/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  kanji.js — Kanji trainer logic with meaning and reading modes
 *  Glenn's Japanese Trainer
 */

// storage keys
StorageManager.STORAGE_KEY = "kanji-trainer-progress";
StorageManager.SETTINGS_KEY = "kanji-trainer-settings";

// current mode: "meaning" or "reading"
let kanjiMode = localStorage.getItem("kanji-mode") || "meaning";

function getAllCharacters(selectedSubsets) {
  const characters = [];
  selectedSubsets.forEach((subset) => {
    if (KanjiData[subset]) {
      KanjiData[subset].forEach((entry) => {
        // build accepted answers based on mode
        characters.push({
          character: entry.kanji,
          romanji: getAcceptedAnswers(entry),
          _entry: entry,
        });
      });
    }
  });
  return characters;
}

// strip okurigana parentheses: "mi(ru)" → "miru", "ta(beru)" → "taberu"
function stripParens(s) {
  return s.replace(/[()]/g, "");
}

function getAcceptedAnswers(entry) {
  if (kanjiMode === "meaning") {
    // accept both English and Norwegian meanings
    const answers = entry.meaning.map((m) => m.toLowerCase());
    if (entry.meaningNo) {
      entry.meaningNo.forEach((m) => answers.push(m.toLowerCase()));
    }
    return answers;
  }
  // reading mode: accept both onyomi and kunyomi (stripped of parens)
  const answers = [];
  entry.onyomi.forEach((r) => answers.push(stripParens(r).toLowerCase()));
  entry.kunyomi.forEach((r) => answers.push(stripParens(r).toLowerCase()));
  return answers;
}

// rebuild romanji arrays when mode changes
function refreshCharacterAnswers() {
  if (!window.uiController) return;
  if (window.uiController.currentCharacters.length > 0) {
    window.uiController.currentCharacters.forEach((c) => {
      if (c._entry) c.romanji = getAcceptedAnswers(c._entry);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let progressTracker = StorageManager.loadProgress();
  if (!progressTracker) progressTracker = new ProgressTracker();

  const characterSelector = new CharacterSelector(progressTracker);
  const uiController = new UIController(progressTracker, characterSelector);
  window.uiController = uiController;

  // mode toggle buttons
  const modeMeaningBtn = document.getElementById("mode-meaning");
  const modeReadingBtn = document.getElementById("mode-reading");
  const answerInput = document.getElementById("answer-input");
  const kanjiInfo = document.getElementById("kanji-info");

  function setMode(mode) {
    kanjiMode = mode;
    localStorage.setItem("kanji-mode", mode);

    modeMeaningBtn.classList.toggle("kanji-mode-btn--active", mode === "meaning");
    modeReadingBtn.classList.toggle("kanji-mode-btn--active", mode === "reading");

    // update placeholder
    if (mode === "meaning") {
      answerInput.placeholder = t("kanji-placeholder-meaning");
    } else {
      answerInput.placeholder = t("kanji-placeholder-reading");
    }

    refreshCharacterAnswers();

    // update info display for current character without changing it
    if (uiController.currentCharacters.length > 0) {
      updateKanjiInfo(uiController.currentCharacters);
      answerInput.value = "";
      answerInput.focus();
    }
  }

  modeMeaningBtn.addEventListener("click", () => setMode("meaning"));
  modeReadingBtn.addEventListener("click", () => setMode("reading"));

  // initialize mode UI
  setMode(kanjiMode);

  // override displayCharacter to show kanji info
  const origDisplay = uiController.displayCharacter.bind(uiController);
  uiController.displayCharacter = function (characters) {
    origDisplay(characters);
    updateKanjiInfo(characters);
  };

  // override showAnswer to show language-correct answer + readings
  const origShowAnswer = uiController.showAnswer.bind(uiController);
  uiController.showAnswer = function () {
    origShowAnswer();
    if (this.currentCharacters.length > 0) {
      const entry = this.currentCharacters[0]._entry;
      if (entry) {
        const hintDisplay = document.getElementById("hint-display");
        if (kanjiMode === "meaning") {
          const meanings = getLang() === "no" && entry.meaningNo
            ? entry.meaningNo : entry.meaning;
          hintDisplay.textContent = `${t("answer-prefix")} ${meanings.join(", ")}`;
        } else {
          // show accepted readings (stripped of parentheses = what you type)
          const accepted = [];
          entry.onyomi.forEach((r) => accepted.push(stripParens(r)));
          entry.kunyomi.forEach((r) => accepted.push(stripParens(r)));
          hintDisplay.textContent = `${t("answer-prefix")} ${accepted.join(", ")}`;
        }
      }
      showFullInfo(this.currentCharacters);
    }
  };

  // override handleCorrectAnswer to flash info briefly
  const origCorrect = uiController.handleCorrectAnswer.bind(uiController);
  uiController.handleCorrectAnswer = function () {
    // show info on correct
    if (this.currentCharacters.length > 0) {
      showFullInfo(this.currentCharacters);
    }
    origCorrect();
  };

  function updateKanjiInfo(characters) {
    if (!characters || characters.length === 0 || !characters[0]._entry) {
      kanjiInfo.classList.add("hidden");
      return;
    }
    // show mode hint: in meaning mode show "type the English meaning", in reading mode show onyomi/kunyomi labels
    kanjiInfo.classList.remove("hidden");
    const entry = characters[0]._entry;
    if (kanjiMode === "meaning") {
      kanjiInfo.textContent = "";
      kanjiInfo.classList.add("hidden");
    } else {
      // show meaning as context when in reading mode
      const meanings = getLang() === "no" && entry.meaningNo
        ? entry.meaningNo : entry.meaning;
      kanjiInfo.textContent = meanings.join(", ");
    }
  }

  function showFullInfo(characters) {
    if (!characters[0]._entry) return;
    const entry = characters[0]._entry;
    const parts = [];
    const meanings = getLang() === "no" && entry.meaningNo
      ? entry.meaningNo : entry.meaning;
    parts.push(meanings.join(", "));
    if (entry.onyomi.length > 0) parts.push("On: " + entry.onyomi.join(", "));
    if (entry.kunyomi.length > 0) parts.push("Kun: " + entry.kunyomi.join(", "));
    kanjiInfo.textContent = parts.join(" | ");
    kanjiInfo.classList.remove("hidden");
  }

  // dictionary
  const dictOverlay = document.getElementById("dict-overlay");
  const dictList = document.getElementById("dict-list");

  function openDictionary() {
    const lang = getLang();
    dictList.innerHTML = "";

    const groupNames = {
      numbers: t("kanji-numbers"),
      time: t("kanji-time"),
      people: t("kanji-people"),
      nature: t("kanji-nature"),
      verbs: t("kanji-verbs"),
      adjectives: t("kanji-adjectives"),
    };

    Object.entries(KanjiData).forEach(([group, entries]) => {
      const heading = document.createElement("div");
      heading.className = "dict-group-title";
      heading.textContent = groupNames[group] || group;
      dictList.appendChild(heading);

      entries.forEach((entry) => {
        const meanings = lang === "no" && entry.meaningNo
          ? entry.meaningNo : entry.meaning;
        const row = document.createElement("div");
        row.className = "dict-word";
        row.innerHTML =
          '<button class="dict-speak-btn" data-speak="' + entry.kanji + '" title="Hør uttale"><svg class="speak-icon" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M19 5a9 9 0 010 14"/></svg></button>' +
          '<span class="dict-word-jp">' + entry.kanji + "</span>" +
          '<span class="dict-word-rom">' +
            (entry.onyomi.length > 0 ? entry.onyomi.join(", ") : "") +
            (entry.onyomi.length > 0 && entry.kunyomi.length > 0 ? " · " : "") +
            (entry.kunyomi.length > 0 ? entry.kunyomi.join(", ") : "") +
          "</span>" +
          '<span class="dict-word-tr">' + meanings.join(", ") + "</span>";
        dictList.appendChild(row);
      });
    });

    dictOverlay.classList.remove("hidden");
  }

  function closeDictionary() {
    dictOverlay.classList.add("hidden");
  }

  document.getElementById("dict-btn").addEventListener("click", openDictionary);
  document.getElementById("dict-close-btn").addEventListener("click", closeDictionary);
  dictOverlay.addEventListener("click", (e) => {
    if (e.target === dictOverlay) closeDictionary();
    const speakBtn = e.target.closest(".dict-speak-btn");
    if (speakBtn && speakBtn.dataset.speak) speakJapanese(speakBtn.dataset.speak);
  });
});
