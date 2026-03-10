/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  lytte.js — Listening mode trainer
 *  Glenn's Japanese Trainer
 */

// build word list from full dictionaries (WordDictionary + KatakanaWordDictionary from ord.js)
function buildWordPool() {
  const dict = Object.assign({}, WordDictionary, KatakanaWordDictionary);
  return Object.entries(dict).map(([word, data]) => ({
    word: word,
    romanji: data.romanji,
    translation: data.translation,
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  // state
  let source = "hiragana";
  let charCount = 0; // 0 = all
  let queue = [];
  let current = null;
  let revealed = false;
  let correct = 0;
  let total = 0;

  // DOM refs
  const charDisplay = document.getElementById("hiragana-character");
  const translationDisplay = document.getElementById("translation-display");
  const answerInput = document.getElementById("answer-input");
  const hintDisplay = document.getElementById("hint-display");
  const playBtn = document.getElementById("play-btn");
  const nextBtn = document.getElementById("next-btn");
  const showAnswerBtn = document.getElementById("show-answer-btn");
  const replayBtn = document.getElementById("replay-btn");
  const roundProgress = document.getElementById("round-progress");
  const roundTotal = document.getElementById("round-total");
  const scriptBtns = document.querySelectorAll(".script-btn");
  const charcountRow = document.getElementById("charcount-row");
  const charcountSelect = document.getElementById("lytte-charcount");
  const wordCountDisplay = document.getElementById("word-count");

  // populate char-count selector
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

  // build pool from source
  function getPool() {
    if (source === "hiragana") {
      const chars = [];
      Object.values(HiraganaData).forEach((group) => {
        group.forEach((c) => chars.push({ word: c.character, romanji: c.romanji[0] }));
      });
      return chars;
    }
    if (source === "katakana") {
      const chars = [];
      Object.values(KatakanaData).forEach((group) => {
        group.forEach((c) => chars.push({ word: c.character, romanji: c.romanji[0] }));
      });
      return chars;
    }
    // words — full dictionary, filtered by char count
    let pool = buildWordPool();
    if (charCount > 0) {
      pool = pool.filter((w) => [...w.word].length === charCount);
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

  function playAudio() {
    if (current) speakJapanese(current.word);
  }

  function nextItem() {
    if (queue.length === 0) buildQueue();
    current = DifficultyTracker.weightedPick(queue, (w) => w.word);
    revealed = false;
    charDisplay.textContent = "?";
    charDisplay.classList.add("lytte-hidden");
    translationDisplay.textContent = "";
    hintDisplay.classList.add("hidden");
    answerInput.value = "";
    answerInput.focus();
    // auto-play audio
    setTimeout(playAudio, 200);
  }

  function reveal() {
    if (!current) return;
    revealed = true;
    charDisplay.textContent = current.word;
    charDisplay.classList.remove("lytte-hidden");
    if (current.translation) {
      translationDisplay.textContent = getWordTranslation(current.translation);
    }
  }

  function handleAnswer() {
    if (!current || revealed) return;
    const val = answerInput.value.trim().toLowerCase();
    if (!val) return;

    const isCorrect = val === current.romanji.toLowerCase();
    DifficultyTracker.record(current.word, isCorrect);
    if (isCorrect) {
      correct++;
      roundProgress.textContent = correct;
      reveal();
      answerInput.classList.add("flash-correct");
      if (typeof StreakManager !== "undefined") StreakManager.recordActivity();
      MilestoneTracker.recordStart();
      MilestoneTracker.checkStreak();
      MilestoneTracker.checkAnswerCount();
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
    reveal();
    hintDisplay.textContent = t("answer-prefix") + " " + current.romanji;
    hintDisplay.classList.remove("hidden");
  }

  // source toggle
  scriptBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      scriptBtns.forEach((b) => b.classList.remove("script-btn--active"));
      btn.classList.add("script-btn--active");
      source = btn.dataset.source;
      // show/hide char count selector
      if (source === "words") {
        charcountRow.classList.remove("hidden");
      } else {
        charcountRow.classList.add("hidden");
      }
      buildQueue();
      nextItem();
    });
  });

  // char count change
  charcountSelect.addEventListener("change", (e) => {
    charCount = parseInt(e.target.value);
    buildQueue();
    nextItem();
  });

  // controls
  playBtn.addEventListener("click", playAudio);
  replayBtn.addEventListener("click", playAudio);
  nextBtn.addEventListener("click", nextItem);
  showAnswerBtn.addEventListener("click", showAnswer);

  answerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (revealed) nextItem();
      else handleAnswer();
    }
  });

  // auto-answer
  answerInput.addEventListener("input", () => {
    if (!current || revealed) return;
    const val = answerInput.value.trim().toLowerCase();
    if (!val) return;
    const answer = current.romanji.toLowerCase();
    if (val === answer) handleAnswer();
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
