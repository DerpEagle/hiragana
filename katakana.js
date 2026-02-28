const KatakanaData = {
  vowels: [
    { character: "ア", romanji: ["a"] },
    { character: "イ", romanji: ["i"] },
    { character: "ウ", romanji: ["u"] },
    { character: "エ", romanji: ["e"] },
    { character: "オ", romanji: ["o"] },
  ],
  ka: [
    { character: "カ", romanji: ["ka"] },
    { character: "キ", romanji: ["ki"] },
    { character: "ク", romanji: ["ku"] },
    { character: "ケ", romanji: ["ke"] },
    { character: "コ", romanji: ["ko"] },
  ],
  sa: [
    { character: "サ", romanji: ["sa"] },
    { character: "シ", romanji: ["shi"] },
    { character: "ス", romanji: ["su"] },
    { character: "セ", romanji: ["se"] },
    { character: "ソ", romanji: ["so"] },
  ],
  ta: [
    { character: "タ", romanji: ["ta"] },
    { character: "チ", romanji: ["chi"] },
    { character: "ツ", romanji: ["tsu"] },
    { character: "テ", romanji: ["te"] },
    { character: "ト", romanji: ["to"] },
  ],
  na: [
    { character: "ナ", romanji: ["na"] },
    { character: "ニ", romanji: ["ni"] },
    { character: "ヌ", romanji: ["nu"] },
    { character: "ネ", romanji: ["ne"] },
    { character: "ノ", romanji: ["no"] },
  ],
  ha: [
    { character: "ハ", romanji: ["ha"] },
    { character: "ヒ", romanji: ["hi"] },
    { character: "フ", romanji: ["fu"] },
    { character: "ヘ", romanji: ["he"] },
    { character: "ホ", romanji: ["ho"] },
  ],
  ma: [
    { character: "マ", romanji: ["ma"] },
    { character: "ミ", romanji: ["mi"] },
    { character: "ム", romanji: ["mu"] },
    { character: "メ", romanji: ["me"] },
    { character: "モ", romanji: ["mo"] },
  ],
  ya: [
    { character: "ヤ", romanji: ["ya"] },
    { character: "ユ", romanji: ["yu"] },
    { character: "ヨ", romanji: ["yo"] },
  ],
  ra: [
    { character: "ラ", romanji: ["ra"] },
    { character: "リ", romanji: ["ri"] },
    { character: "ル", romanji: ["ru"] },
    { character: "レ", romanji: ["re"] },
    { character: "ロ", romanji: ["ro"] },
  ],
  wa: [
    { character: "ワ", romanji: ["wa"] },
    { character: "ヲ", romanji: ["wo", "o"] },
  ],
  n: [{ character: "ン", romanji: ["n"] }],
};

function getAllCharacters(selectedSubsets) {
  const characters = [];
  selectedSubsets.forEach((subset) => {
    if (KatakanaData[subset]) {
      characters.push(...KatakanaData[subset]);
    }
  });
  return characters;
}

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
    if (!progress) {
      console.error(`Character ${character} not initialized`);
      return;
    }
    if (isCorrect) {
      progress.recordCorrect();
    } else {
      progress.recordIncorrect();
    }
  }

  getMasteredCharacters() {
    const mastered = [];
    for (const [character, progress] of this.characterProgress.entries()) {
      if (progress.isMastered) {
        mastered.push(character);
      }
    }
    return mastered;
  }

  getProgressSummary(selectedSubsets) {
    const availableCharacters = getAllCharacters(selectedSubsets);
    let totalCount = availableCharacters.length;
    let masteredCount = 0;
    availableCharacters.forEach((charObj) => {
      const progress = this.characterProgress.get(charObj.character);
      if (progress && progress.isMastered) {
        masteredCount++;
      }
    });
    return {
      total: totalCount,
      mastered: masteredCount,
      percentage:
        totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0,
    };
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
    if (!availableCharacters || availableCharacters.length === 0) {
      return null;
    }
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
      return this.calculateWeight(progress);
    });
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    if (totalWeight === 0) {
      const randomIndex = Math.floor(Math.random() * charactersToSelect.length);
      return charactersToSelect[randomIndex];
    }
    let random = Math.random() * totalWeight;
    for (let i = 0; i < charactersToSelect.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        return charactersToSelect[i];
      }
    }
    return charactersToSelect[charactersToSelect.length - 1];
  }

  calculateWeight(characterProgress) {
    if (!characterProgress) {
      return 2.0;
    }
    return characterProgress.getWeight();
  }
}

const StorageManager = {
  STORAGE_KEY: "katakana-trainer-progress",
  SETTINGS_KEY: "katakana-trainer-settings",

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
      if (error.name === "QuotaExceededError") {
        console.error("localStorage quota exceeded");
        alert(t('storage-full'));
      } else {
        console.error("Error saving progress:", error);
      }
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
    } catch (error) {
      console.error("Error loading progress (corrupt data):", error);
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
    } catch (error) {
      console.error("Error saving settings:", error);
      return false;
    }
  },

  loadSettings() {
    try {
      const settingsStr = localStorage.getItem(this.SETTINGS_KEY);
      if (!settingsStr) return { selectedSubsets: [] };
      return JSON.parse(settingsStr);
    } catch (error) {
      console.error("Error loading settings:", error);
      return { selectedSubsets: [] };
    }
  },

  clearAll() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.SETTINGS_KEY);
    } catch (error) {
      console.error("Error clearing data:", error);
    }
  },

  isAvailable() {
    try {
      const test = "__storage_test__";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      console.warn("localStorage is not available");
      return false;
    }
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
    this.nextBtn = document.getElementById("next-btn");
    this.showAnswerBtn = document.getElementById("show-answer-btn");
    this.randomBtn = document.getElementById("random-btn");
    this.clearBtn = document.getElementById("clear-btn");
    this.masteredCharactersDiv = document.getElementById("mastered-characters");
    this.toggleSubsetBtn = document.getElementById("toggle-subset-btn");
    this.subsetMenu = document.getElementById("subset-menu");
    this.menuBackdrop = document.getElementById("menu-backdrop");
    this.initializeEventListeners();
    this.loadSettings();
  }

  initializeEventListeners() {
    this.answerInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleAnswer(this.answerInput.value);
      }
    });

    this.nextBtn.addEventListener("click", () => {
      this.nextCharacter();
    });

    this.showAnswerBtn.addEventListener("click", () => {
      this.showAnswer();
    });

    this.randomBtn.addEventListener("click", () => {
      this.selectAllSubsets();
    });

    this.clearBtn.addEventListener("click", () => {
      this.clearAllSubsets();
    });

    this.toggleSubsetBtn.addEventListener("click", () => {
      if (this.subsetMenu.classList.contains("hidden")) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    });

    this.menuBackdrop.addEventListener("click", () => this.closeMenu());
    const closeBtn = document.getElementById("close-subset-btn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeMenu());

    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        this.handleSubsetChange();
      });
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
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    this.handleSubsetChange();
  }

  selectAllSubsets() {
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
    this.handleSubsetChange();
  }

  handleSubsetChange() {
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    this.selectedSubsets = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    StorageManager.saveSettings(this.selectedSubsets);
    this.updateProgressDisplay();

    if (this.selectedSubsets.length > 0) {
      this.nextCharacter();
    } else {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t('select-from-menu');
      this.answerInput.value = "";
    }
  }

  displayCharacter(characters) {
    if (!characters || characters.length === 0) {
      this.characterDisplay.textContent = "選択してください";
      this.translationDisplay.textContent = "";
      return;
    }
    this.currentCharacters = characters;
    const displayText = characters.map((c) => c.character).join("");
    this.characterDisplay.textContent = displayText;
    this.translationDisplay.textContent = "";
    this.answerInput.value = "";
    this.answerInput.focus();
    this.hintDisplay.classList.add("hidden");
    this.incorrectAttempts = 0;
  }

  handleAnswer(userInput) {
    if (!userInput.trim() || this.currentCharacters.length === 0) {
      return;
    }
    const combinedRomanji = this.currentCharacters
      .map((c) => c.romanji)
      .reduce((acc, arr) => {
        if (acc.length === 0) return arr;
        const combinations = [];
        acc.forEach((a) => {
          arr.forEach((b) => {
            combinations.push(a + b);
          });
        });
        return combinations;
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
    this.currentCharacters.forEach((charObj) => {
      this.progressTracker.recordAnswer(charObj.character, false);
    });
    StorageManager.saveProgress(this.progressTracker);

    this.answerInput.classList.add("flash-incorrect");
    setTimeout(() => this.answerInput.classList.remove("flash-incorrect"), 400);

    if (this.incorrectAttempts >= 3) {
      this.showHint();
    }
    this.answerInput.value = "";
    this.answerInput.focus();
  }

  showHint() {
    if (this.currentCharacters.length === 0) return;
    const firstRomanji = this.currentCharacters[0].romanji[0];
    this.hintDisplay.textContent = `${t('hint-prefix')} "${firstRomanji[0]}"`;
    this.hintDisplay.classList.remove("hidden");
  }

  showAnswer() {
    if (this.currentCharacters.length === 0) return;
    const answer = this.currentCharacters.map((c) => c.romanji[0]).join("");
    this.hintDisplay.textContent = `${t('answer-prefix')} ${answer}`;
    this.hintDisplay.classList.remove("hidden");
    this.currentCharacters.forEach((charObj) => {
      this.progressTracker.recordAnswer(charObj.character, false);
    });
    StorageManager.saveProgress(this.progressTracker);
  }

  nextCharacter() {
    if (this.selectedSubsets.length === 0) {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t('select-from-menu');
      return;
    }
    const availableCharacters = getAllCharacters(this.selectedSubsets);
    if (availableCharacters.length === 0) {
      this.characterDisplay.textContent = "❌";
      return;
    }
    const selectedChar = this.characterSelector.selectNext(availableCharacters);
    if (selectedChar) {
      this.displayCharacter([selectedChar]);
    }
  }

  updateProgressDisplay() {
    const masteredChars = this.progressTracker.getMasteredCharacters();
    this.masteredCharactersDiv.innerHTML = "";
    masteredChars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      this.masteredCharactersDiv.appendChild(span);
    });
  }

  suggestNextSubset() {
    const allSubsets = Object.keys(KatakanaData);
    const unselectedSubsets = allSubsets.filter(
      (subset) => !this.selectedSubsets.includes(subset),
    );
    if (unselectedSubsets.length === 0) return;
    const nextSubset = unselectedSubsets[0];
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      if (checkbox.value === nextSubset) checkbox.checked = true;
    });
    this.handleSubsetChange();
    this.openMenu();
  }

  loadSettings() {
    const settings = StorageManager.loadSettings();
    if (settings.selectedSubsets && settings.selectedSubsets.length > 0) {
      this.selectedSubsets = settings.selectedSubsets;
      const checkboxes = document.querySelectorAll(
        '.subset-checkboxes input[type="checkbox"]',
      );
      checkboxes.forEach((checkbox) => {
        if (this.selectedSubsets.includes(checkbox.value)) {
          checkbox.checked = true;
        }
      });
      this.updateProgressDisplay();
      this.nextCharacter();
    } else {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t('select-from-menu');
    }
  }
}

const BASE_KATAKANA_DATA = JSON.parse(JSON.stringify(KatakanaData));

const EXTRA_DAKUTEN = [
  { character: "ガ", romanji: ["ga"], subset: "ka" },
  { character: "ギ", romanji: ["gi"], subset: "ka" },
  { character: "グ", romanji: ["gu"], subset: "ka" },
  { character: "ゲ", romanji: ["ge"], subset: "ka" },
  { character: "ゴ", romanji: ["go"], subset: "ka" },
  { character: "ザ", romanji: ["za"], subset: "sa" },
  { character: "ジ", romanji: ["ji"], subset: "sa" },
  { character: "ズ", romanji: ["zu"], subset: "sa" },
  { character: "ゼ", romanji: ["ze"], subset: "sa" },
  { character: "ゾ", romanji: ["zo"], subset: "sa" },
  { character: "ダ", romanji: ["da"], subset: "ta" },
  { character: "ヂ", romanji: ["ji"], subset: "ta" },
  { character: "ヅ", romanji: ["zu"], subset: "ta" },
  { character: "デ", romanji: ["de"], subset: "ta" },
  { character: "ド", romanji: ["do"], subset: "ta" },
  { character: "バ", romanji: ["ba"], subset: "ha" },
  { character: "ビ", romanji: ["bi"], subset: "ha" },
  { character: "ブ", romanji: ["bu"], subset: "ha" },
  { character: "ベ", romanji: ["be"], subset: "ha" },
  { character: "ボ", romanji: ["bo"], subset: "ha" },
];

const EXTRA_HANDAKUTEN = [
  { character: "パ", romanji: ["pa"], subset: "ha" },
  { character: "ピ", romanji: ["pi"], subset: "ha" },
  { character: "プ", romanji: ["pu"], subset: "ha" },
  { character: "ペ", romanji: ["pe"], subset: "ha" },
  { character: "ポ", romanji: ["po"], subset: "ha" },
];

const EXTRA_SMALL_KANA = [
  { character: "ャ", romanji: ["xya"], subset: "small" },
  { character: "ュ", romanji: ["xyu"], subset: "small" },
  { character: "ョ", romanji: ["xyo"], subset: "small" },
  { character: "ァ", romanji: ["xa"], subset: "small" },
  { character: "ィ", romanji: ["xi"], subset: "small" },
  { character: "ゥ", romanji: ["xu"], subset: "small" },
  { character: "ェ", romanji: ["xe"], subset: "small" },
  { character: "ォ", romanji: ["xo"], subset: "small" },
];

function applyToggles(dakutenEnabled, handakutenEnabled, smallEnabled) {
  Object.keys(BASE_KATAKANA_DATA).forEach((key) => {
    KatakanaData[key] = JSON.parse(JSON.stringify(BASE_KATAKANA_DATA[key]));
  });

  if (KatakanaData.small) delete KatakanaData.small;

  if (dakutenEnabled) {
    EXTRA_DAKUTEN.forEach((item) => {
      if (KatakanaData[item.subset]) {
        KatakanaData[item.subset].push({
          character: item.character,
          romanji: item.romanji,
        });
      }
    });
  }

  if (handakutenEnabled) {
    EXTRA_HANDAKUTEN.forEach((item) => {
      if (KatakanaData[item.subset]) {
        KatakanaData[item.subset].push({
          character: item.character,
          romanji: item.romanji,
        });
      }
    });
  }

  if (smallEnabled) {
    KatakanaData.small = EXTRA_SMALL_KANA.map((item) => ({
      character: item.character,
      romanji: item.romanji,
    }));
  }

  try {
    localStorage.setItem("katakana-include-dakuten", dakutenEnabled ? "1" : "0");
    localStorage.setItem("katakana-include-handakuten", handakutenEnabled ? "1" : "0");
    localStorage.setItem("katakana-include-small-kana", smallEnabled ? "1" : "0");
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let progressTracker = StorageManager.loadProgress();
  if (!progressTracker) {
    progressTracker = new ProgressTracker();
  }

  const characterSelector = new CharacterSelector(progressTracker);
  const uiController = new UIController(progressTracker, characterSelector);
  window.uiController = uiController;

  const dakChk = document.getElementById("include-dakuten");
  const hanChk = document.getElementById("include-handakuten");
  const smallChk = document.getElementById("include-small-kana");

  const dakInit = localStorage.getItem("katakana-include-dakuten") === "1";
  const hanInit = localStorage.getItem("katakana-include-handakuten") === "1";
  const smallInit = localStorage.getItem("katakana-include-small-kana") === "1";

  if (dakChk) dakChk.checked = dakInit;
  if (hanChk) hanChk.checked = hanInit;
  if (smallChk) smallChk.checked = smallInit;

  applyToggles(dakInit, hanInit, smallInit);

  function onToggleChange() {
    const dak = dakChk ? dakChk.checked : false;
    const han = hanChk ? hanChk.checked : false;
    const small = smallChk ? smallChk.checked : false;
    applyToggles(dak, han, small);

    if (window.uiController) {
      window.uiController.updateProgressDisplay();
      if (
        window.uiController.selectedSubsets &&
        window.uiController.selectedSubsets.length > 0
      ) {
        window.uiController.nextCharacter();
      }
    }
  }

  if (dakChk) dakChk.addEventListener("change", onToggleChange);
  if (hanChk) hanChk.addEventListener("change", onToggleChange);
  if (smallChk) smallChk.addEventListener("change", onToggleChange);
});
