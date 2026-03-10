/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  omvendt.js — Reverse mode: see romaji, type kana
 *  Glenn's Japanese Trainer
 */

document.addEventListener("DOMContentLoaded", () => {
  // state
  let source = "hiragana";
  let charCount = 0;
  let queue = [];
  let current = null;
  let correct = 0;
  let total = 0;

  // DOM refs
  const romajiDisplay = document.getElementById("romaji-display");
  const translationDisplay = document.getElementById("translation-display");
  const answerInput = document.getElementById("answer-input");
  const hintDisplay = document.getElementById("hint-display");
  const nextBtn = document.getElementById("next-btn");
  const showAnswerBtn = document.getElementById("show-answer-btn");
  const roundProgress = document.getElementById("round-progress");
  const roundTotal = document.getElementById("round-total");
  const scriptBtns = document.querySelectorAll(".script-btn");
  const charcountRow = document.getElementById("charcount-row");
  const charcountSelect = document.getElementById("omvendt-charcount");
  const wordCountDisplay = document.getElementById("word-count");

  function populateCharCount() {
    charcountSelect.innerHTML = "";
    const unit = t("chars-unit") || "tegn";
    const allOpt = document.createElement("option");
    allOpt.value = "0";
    allOpt.textContent = t("level-all") || "Alle";
    charcountSelect.appendChild(allOpt);
    for (let i = 1; i <= 13; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = i + " " + unit;
      charcountSelect.appendChild(opt);
    }
  }

  function getPool() {
    if (source === "hiragana") {
      const chars = [];
      Object.values(HiraganaData).forEach((group) => {
        group.forEach((c) => chars.push({ kana: c.character, romanji: c.romanji[0] }));
      });
      return chars;
    }
    if (source === "katakana") {
      const chars = [];
      Object.values(KatakanaData).forEach((group) => {
        group.forEach((c) => chars.push({ kana: c.character, romanji: c.romanji[0] }));
      });
      return chars;
    }
    // words
    const dict = Object.assign({}, WordDictionary, KatakanaWordDictionary);
    let pool = Object.entries(dict).map(([word, data]) => ({
      kana: word,
      romanji: data.romanji,
      translation: data.translation,
    }));
    if (charCount > 0) {
      pool = pool.filter((w) => [...w.kana].length === charCount);
    }
    return pool;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildQueue() {
    queue = shuffle(getPool().slice());
    correct = 0;
    total = queue.length;
    roundTotal.textContent = total;
    roundProgress.textContent = correct;
    if (wordCountDisplay) {
      wordCountDisplay.textContent = "(" + total + " " + (t("words-label") || "ord").toLowerCase() + ")";
    }
  }

  function nextItem() {
    if (queue.length === 0) buildQueue();
    current = DifficultyTracker.weightedPick(queue, (w) => w.kana);
    romajiDisplay.textContent = current.romanji;
    if (current.translation) {
      translationDisplay.textContent = getWordTranslation(current.translation);
    } else {
      translationDisplay.textContent = "";
    }
    hintDisplay.classList.add("hidden");
    answerInput.value = "";
    answerInput.focus();
  }

  function handleAnswer() {
    if (!current) return;
    const val = answerInput.value.trim();
    if (!val) return;

    const isCorrect = val === current.kana;
    DifficultyTracker.record(current.kana, isCorrect);
    if (isCorrect) {
      correct++;
      roundProgress.textContent = correct;
      answerInput.classList.add("flash-correct");
      if (typeof StreakManager !== "undefined") StreakManager.recordActivity();
      MilestoneTracker.recordStart();
      MilestoneTracker.checkStreak();
      MilestoneTracker.checkAnswerCount();
      speakJapanese(current.kana);
      setTimeout(() => {
        answerInput.classList.remove("flash-correct");
        nextItem();
      }, 500);
    } else {
      answerInput.classList.add("flash-incorrect");
      setTimeout(() => answerInput.classList.remove("flash-incorrect"), 400);
      answerInput.value = "";
    }
  }

  function showAnswer() {
    if (!current) return;
    hintDisplay.textContent = t("answer-prefix") + " " + current.kana;
    hintDisplay.classList.remove("hidden");
    speakJapanese(current.kana);
  }

  // source toggle
  scriptBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      scriptBtns.forEach((b) => b.classList.remove("script-btn--active"));
      btn.classList.add("script-btn--active");
      source = btn.dataset.source;
      if (source === "words") {
        charcountRow.classList.remove("hidden");
      } else {
        charcountRow.classList.add("hidden");
      }
      buildQueue();
      nextItem();
    });
  });

  charcountSelect.addEventListener("change", (e) => {
    charCount = parseInt(e.target.value);
    buildQueue();
    nextItem();
  });

  // controls
  nextBtn.addEventListener("click", nextItem);
  showAnswerBtn.addEventListener("click", showAnswer);

  answerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAnswer();
    }
  });

  // track IME composition so auto-answer doesn't fire mid-compose
  let composing = false;
  answerInput.addEventListener("compositionstart", () => { composing = true; });
  answerInput.addEventListener("compositionend", () => {
    composing = false;
    // re-check after composition finishes
    if (!current) return;
    const val = answerInput.value.trim();
    if (val && val === current.kana) handleAnswer();
  });

  // auto-answer for kana input
  answerInput.addEventListener("input", () => {
    if (composing) return;
    if (!current) return;
    const val = answerInput.value.trim();
    if (!val) return;
    if (val === current.kana) handleAnswer();
  });

  // escape to go back
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const backLink = document.querySelector(".back-link");
      if (backLink) backLink.click();
    }
  });

  populateCharCount();
  buildQueue();
  nextItem();
});
