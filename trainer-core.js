/*
 * ┌─────────────────────────────────────────┐
 * │         Glenn's Japanese Trainer        │
 * │    あ ア — hiragana, katakana & more    │
 * └─────────────────────────────────────────┘
 *
 * trainer-core.js — Glenn A.
 * Shared classes used by both hiragana and katakana trainers.
 * Must be loaded before app.js / katakana.js
 */

class CharacterProgress {
  constructor(character, romanjiArray) {
    this.character = character;
    this.romanji = romanjiArray;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.currentStreak = 0;
    this.isMastered = false;
    this.lastSeen = null;
    this.nextReviewTime = Date.now();
  }

  recordCorrect() {
    this.correctCount++;
    this.currentStreak++;
    this.lastSeen = Date.now();
    if (this.currentStreak >= 10 && !this.isMastered) {
      this.isMastered = true;
    }
    if (this.isMastered) {
      this.nextReviewTime = Date.now() + 24 * 60 * 60 * 1000;
    } else {
      this.nextReviewTime = Date.now() + this.currentStreak * 5 * 60 * 1000;
    }
  }

  recordIncorrect() {
    this.incorrectCount++;
    this.currentStreak = 0;
    this.lastSeen = Date.now();
    if (this.isMastered) {
      this.isMastered = false;
    }
    this.nextReviewTime = Date.now() + 30 * 1000;
  }

  getWeight() {
    const baseWeight = 1.0;
    const errorMultiplier = 1.0 + this.incorrectCount / (this.correctCount + 1);
    const reviewInterval = 5 * 60 * 1000;
    const timeSinceLastSeen = this.lastSeen
      ? Date.now() - this.lastSeen
      : reviewInterval;
    const timeMultiplier = Math.min(2.0, timeSinceLastSeen / reviewInterval);
    const masteredMultiplier = this.isMastered ? 0.1 : 1.0;
    return baseWeight * errorMultiplier * timeMultiplier * masteredMultiplier;
  }
}

class ProgressTracker {
  constructor() {
    this.characterProgress = new Map();
  }

  initializeCharacter(character, romanjiArray) {
    if (!this.characterProgress.has(character)) {
      this.characterProgress.set(
        character,
        new CharacterProgress(character, romanjiArray),
      );
    }
  }

  recordAnswer(character, isCorrect) {
    const progress = this.characterProgress.get(character);
    if (!progress) return;
    if (isCorrect) {
      progress.recordCorrect();
    } else {
      progress.recordIncorrect();
    }
  }

  getMasteredCharacters() {
    const mastered = [];
    for (const [character, progress] of this.characterProgress.entries()) {
      if (progress.isMastered) mastered.push(character);
    }
    return mastered;
  }

  getProgress(character) {
    return this.characterProgress.get(character) || null;
  }

  getAllProgress() {
    return this.characterProgress;
  }
}

class CharacterSelector {
  constructor(progressTracker) {
    this.progressTracker = progressTracker;
  }

  selectNext(availableCharacters) {
    if (!availableCharacters || availableCharacters.length === 0) return null;
    availableCharacters.forEach((charObj) => {
      this.progressTracker.initializeCharacter(
        charObj.character,
        charObj.romanji,
      );
    });
    const currentTime = Date.now();
    const readyCharacters = availableCharacters.filter((charObj) => {
      const progress = this.progressTracker.getProgress(charObj.character);
      return progress && progress.nextReviewTime <= currentTime;
    });
    const charactersToSelect =
      readyCharacters.length > 0 ? readyCharacters : availableCharacters;
    const weights = charactersToSelect.map((charObj) => {
      const progress = this.progressTracker.getProgress(charObj.character);
      return progress ? progress.getWeight() : 2.0;
    });
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    if (totalWeight === 0) {
      return charactersToSelect[
        Math.floor(Math.random() * charactersToSelect.length)
      ];
    }
    let random = Math.random() * totalWeight;
    for (let i = 0; i < charactersToSelect.length; i++) {
      random -= weights[i];
      if (random <= 0) return charactersToSelect[i];
    }
    return charactersToSelect[charactersToSelect.length - 1];
  }
}

// storage keys are set by the page script before DOMContentLoaded fires
const StorageManager = {
  STORAGE_KEY: "",
  SETTINGS_KEY: "",

  saveProgress(progressTracker) {
    try {
      const data = {};
      for (const [character, progress] of progressTracker
        .getAllProgress()
        .entries()) {
        data[character] = {
          character: progress.character,
          romanji: progress.romanji,
          correctCount: progress.correctCount,
          incorrectCount: progress.incorrectCount,
          currentStreak: progress.currentStreak,
          isMastered: progress.isMastered,
          lastSeen: progress.lastSeen,
          nextReviewTime: progress.nextReviewTime,
        };
      }
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (error) {
      if (error.name === "QuotaExceededError") alert(t("storage-full"));
      return false;
    }
  },

  loadProgress() {
    try {
      const dataStr = localStorage.getItem(this.STORAGE_KEY);
      if (!dataStr) return null;
      const data = JSON.parse(dataStr);
      const tracker = new ProgressTracker();
      for (const [, progressData] of Object.entries(data)) {
        tracker.initializeCharacter(
          progressData.character,
          progressData.romanji,
        );
        const progress = tracker.getProgress(progressData.character);
        if (progress) {
          progress.correctCount = progressData.correctCount;
          progress.incorrectCount = progressData.incorrectCount;
          progress.currentStreak = progressData.currentStreak;
          progress.isMastered = progressData.isMastered;
          progress.lastSeen = progressData.lastSeen;
          progress.nextReviewTime = progressData.nextReviewTime;
        }
      }
      return tracker;
    } catch {
      localStorage.removeItem(this.STORAGE_KEY);
      return null;
    }
  },

  saveSettings(selectedSubsets) {
    try {
      localStorage.setItem(
        this.SETTINGS_KEY,
        JSON.stringify({ selectedSubsets }),
      );
      return true;
    } catch {
      return false;
    }
  },

  loadSettings() {
    try {
      const str = localStorage.getItem(this.SETTINGS_KEY);
      if (!str) return { selectedSubsets: [] };
      return JSON.parse(str);
    } catch {
      return { selectedSubsets: [] };
    }
  },

  clearAll() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.SETTINGS_KEY);
    } catch {}
  },
};

class UIController {
  constructor(progressTracker, characterSelector) {
    this.progressTracker = progressTracker;
    this.characterSelector = characterSelector;
    this.currentCharacters = [];
    this.incorrectAttempts = 0;
    this.selectedSubsets = [];

    this.characterDisplay = document.getElementById("hiragana-character");
    this.answerInput = document.getElementById("answer-input");
    this.hintDisplay = document.getElementById("hint-display");
    this.translationDisplay = document.getElementById("translation-display");
    this.streakDisplay = document.getElementById("streak-display");
    this.nextBtn = document.getElementById("next-btn");
    this.showAnswerBtn = document.getElementById("show-answer-btn");
    this.randomBtn = document.getElementById("random-btn");
    this.clearBtn = document.getElementById("clear-btn");
    this.toggleSubsetBtn = document.getElementById("toggle-subset-btn");
    this.subsetMenu = document.getElementById("subset-menu");
    this.menuBackdrop = document.getElementById("menu-backdrop");

    this.initializeEventListeners();
    this.loadSettings();
  }

  initializeEventListeners() {
    this.answerInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleAnswer(this.answerInput.value);
    });
    this.nextBtn.addEventListener("click", () => this.nextCharacter());
    this.showAnswerBtn.addEventListener("click", () => this.showAnswer());
    this.randomBtn.addEventListener("click", () => this.selectAllSubsets());
    this.clearBtn.addEventListener("click", () => this.clearAllSubsets());
    this.toggleSubsetBtn.addEventListener("click", () => {
      this.subsetMenu.classList.contains("hidden")
        ? this.openMenu()
        : this.closeMenu();
    });
    this.menuBackdrop.addEventListener("click", () => this.closeMenu());
    const closeBtn = document.getElementById("close-subset-btn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeMenu());
    document
      .querySelectorAll('.subset-checkboxes input[type="checkbox"]')
      .forEach((cb) => {
        cb.addEventListener("change", () => this.handleSubsetChange());
      });
  }

  openMenu() {
    this.subsetMenu.classList.remove("hidden");
    this.menuBackdrop.classList.remove("hidden");
  }

  closeMenu() {
    this.subsetMenu.classList.add("hidden");
    this.menuBackdrop.classList.add("hidden");
  }

  clearAllSubsets() {
    document
      .querySelectorAll('.subset-checkboxes input[type="checkbox"]')
      .forEach((cb) => {
        cb.checked = false;
      });
    this.handleSubsetChange();
  }

  selectAllSubsets() {
    document
      .querySelectorAll('.subset-checkboxes input[type="checkbox"]')
      .forEach((cb) => {
        cb.checked = true;
      });
    this.handleSubsetChange();
  }

  handleSubsetChange() {
    this.selectedSubsets = Array.from(
      document.querySelectorAll('.subset-checkboxes input[type="checkbox"]'),
    )
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    StorageManager.saveSettings(this.selectedSubsets);
    this.updateProgressDisplay();

    if (this.selectedSubsets.length > 0) {
      this.nextCharacter();
    } else {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t("select-from-menu");
      this.answerInput.value = "";
      this.updateStreakDisplay();
    }
  }

  displayCharacter(characters) {
    if (!characters || characters.length === 0) return;
    this.currentCharacters = characters;

    const displayText = characters.map((c) => c.character).join("");
    this.characterDisplay.textContent = displayText;

    const isMastered = characters.every((c) => {
      const p = this.progressTracker.getProgress(c.character);
      return p && p.isMastered;
    });
    this.characterDisplay.classList.toggle("char-correct", isMastered);

    this.translationDisplay.textContent = "";
    this.answerInput.value = "";
    this.answerInput.focus();
    this.hintDisplay.classList.add("hidden");
    this.incorrectAttempts = 0;
    this.updateStreakDisplay();
  }

  handleAnswer(userInput) {
    if (!userInput.trim() || this.currentCharacters.length === 0) return;
    const combinedRomanji = this.currentCharacters
      .map((c) => c.romanji)
      .reduce((acc, arr) => {
        if (acc.length === 0) return arr;
        const combos = [];
        acc.forEach((a) => arr.forEach((b) => combos.push(a + b)));
        return combos;
      }, []);
    const isCorrect = combinedRomanji.some(
      (r) => r.toLowerCase() === userInput.trim().toLowerCase(),
    );
    if (isCorrect) {
      this.handleCorrectAnswer();
    } else {
      this.handleIncorrectAnswer();
    }
  }

  handleCorrectAnswer() {
    this.currentCharacters.forEach((charObj) => {
      this.progressTracker.recordAnswer(charObj.character, true);
    });
    StorageManager.saveProgress(this.progressTracker);
    this.updateProgressDisplay();

    this.answerInput.classList.add("flash-correct");
    setTimeout(() => {
      this.answerInput.classList.remove("flash-correct");
      this.nextCharacter();
    }, 300);
  }

  handleIncorrectAnswer() {
    this.incorrectAttempts++;
    this.answerInput.classList.add("flash-incorrect");
    setTimeout(() => this.answerInput.classList.remove("flash-incorrect"), 400);

    if (this.incorrectAttempts >= 3) {
      this.currentCharacters.forEach((charObj) => {
        this.progressTracker.recordAnswer(charObj.character, false);
      });
      StorageManager.saveProgress(this.progressTracker);
      this.updateStreakDisplay();
      this.showHint();
    }
    this.answerInput.value = "";
    this.answerInput.focus();
  }

  showHint() {
    if (this.currentCharacters.length === 0) return;
    const firstRomanji = this.currentCharacters[0].romanji[0];
    this.hintDisplay.textContent = `${t("hint-prefix")} "${firstRomanji[0]}"`;
    this.hintDisplay.classList.remove("hidden");
  }

  showAnswer() {
    if (this.currentCharacters.length === 0) return;
    const answer = this.currentCharacters.map((c) => c.romanji[0]).join("");
    this.hintDisplay.textContent = `${t("answer-prefix")} ${answer}`;
    this.hintDisplay.classList.remove("hidden");
    this.currentCharacters.forEach((charObj) => {
      this.progressTracker.recordAnswer(charObj.character, false);
    });
    StorageManager.saveProgress(this.progressTracker);
    this.updateStreakDisplay();
  }

  nextCharacter() {
    if (this.selectedSubsets.length === 0) {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t("select-from-menu");
      return;
    }
    // getAllCharacters() is defined in the page script (app.js / katakana.js)
    const availableCharacters = getAllCharacters(this.selectedSubsets);
    if (availableCharacters.length === 0) {
      this.characterDisplay.textContent = "❌";
      return;
    }
    const selectedChar = this.characterSelector.selectNext(availableCharacters);
    if (selectedChar) this.displayCharacter([selectedChar]);
  }

  updateProgressDisplay() {
    document.querySelectorAll(".subset-row__chars").forEach((el) => {
      if (!el.dataset.initialized) {
        const chars = [...el.textContent];
        el.innerHTML = "";
        chars.forEach((ch) => {
          const span = document.createElement("span");
          span.textContent = ch;
          span.dataset.char = ch;
          el.appendChild(span);
        });
        el.dataset.initialized = "1";
      }
    });
    const masteredSet = new Set(this.progressTracker.getMasteredCharacters());
    document
      .querySelectorAll(".subset-row__chars [data-char]")
      .forEach((span) => {
        span.classList.toggle(
          "char-mastered",
          masteredSet.has(span.dataset.char),
        );
      });
    if (this.currentCharacters && this.currentCharacters.length > 0) {
      const isMastered = this.currentCharacters.every((c) =>
        masteredSet.has(c.character),
      );
      this.characterDisplay.classList.toggle("char-correct", isMastered);
    }
    this.updateStreakDisplay();
  }

  updateStreakDisplay() {
    if (!this.streakDisplay) return;
    if (!this.currentCharacters || this.currentCharacters.length === 0) {
      this.streakDisplay.textContent = "";
      return;
    }
    const progress = this.progressTracker.getProgress(
      this.currentCharacters[0].character,
    );
    const streak = progress ? progress.currentStreak : 0;
    const isMastered = progress && progress.isMastered;
    const filled = isMastered ? 10 : Math.min(streak, 10);
    this.streakDisplay.textContent =
      "●".repeat(filled) + "○".repeat(10 - filled);
    this.streakDisplay.className =
      "streak-display" + (isMastered ? " streak-display--mastered" : "");
  }

  loadSettings() {
    const settings = StorageManager.loadSettings();
    if (settings.selectedSubsets && settings.selectedSubsets.length > 0) {
      this.selectedSubsets = settings.selectedSubsets;
      document
        .querySelectorAll('.subset-checkboxes input[type="checkbox"]')
        .forEach((cb) => {
          if (this.selectedSubsets.includes(cb.value)) cb.checked = true;
        });
      this.updateProgressDisplay();
      this.nextCharacter();
    } else {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t("select-from-menu");
    }
  }
}
