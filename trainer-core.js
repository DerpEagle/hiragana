/* prettier-ignore */
/*
 *     _   _    ___ _  _____   _   _  _ ___  ___ ___  ___ ___ _  _
 *    /_\ | |  | __| |/ / __| /_\ | \| |   \| __| _ \/ __| __| \| |
 *   / _ \| |__| _|| ' <\__ \/ _ \| .` | |) | _||   /\__ \ _|| .` |
 *  /_/ \_\____|___|_|\_\___/_/ \_\_|\_|___/|___|_|_\|___/___|_|\_|
 *
 *  trainer-core.js — Shared trainer engine
 *  Glenn's Japanese Trainer
 */

// lightweight difficulty tracker for word/listening/reverse trainers
const DifficultyTracker = {
  KEY: "difficulty-data",

  _load() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch { return {}; }
  },

  _save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch {}
  },

  record(key, correct) {
    const data = this._load();
    if (!data[key]) data[key] = { c: 0, w: 0 };
    if (correct) data[key].c++;
    else data[key].w++;
    this._save(data);
  },

  // returns weight: higher = show more often
  getWeight(key) {
    const data = this._load();
    const d = data[key];
    if (!d) return 1.5; // unseen items get slight priority
    const errorRate = d.w / (d.c + d.w + 1);
    return 0.5 + errorRate * 3; // range: 0.5 (easy) to 3.5 (hard)
  },

  // weighted random pick from an array of items, using keyFn to get the key
  weightedPick(items, keyFn) {
    if (items.length === 0) return null;
    const weights = items.map((item) => this.getWeight(keyFn(item)));
    const totalWeight = weights.reduce((s, w) => s + w, 0);
    let r = Math.random() * totalWeight;
    for (let i = 0; i < items.length; i++) {
      r -= weights[i];
      if (r <= 0) return items[i];
    }
    return items[items.length - 1];
  },
};

// milestone celebration system
const MilestoneTracker = {
  KEY: "milestones-achieved",
  QUEUE_KEY: "milestones-pending",
  START_KEY: "training-start-date",

  _getAchieved() {
    try {
      const raw = JSON.parse(localStorage.getItem(this.KEY));
      if (!raw) return {};
      // migrate old array format to object with timestamps
      if (Array.isArray(raw)) {
        const obj = {};
        raw.forEach((id) => { obj[id] = { time: Date.now() }; });
        try { localStorage.setItem(this.KEY, JSON.stringify(obj)); } catch {}
        return obj;
      }
      // migrate plain timestamp format to object format
      let needsMigrate = false;
      for (const id in raw) {
        if (typeof raw[id] === "number") {
          raw[id] = { time: raw[id] };
          needsMigrate = true;
        }
      }
      if (needsMigrate) {
        try { localStorage.setItem(this.KEY, JSON.stringify(raw)); } catch {}
      }
      return raw;
    }
    catch { return {}; }
  },

  _markAchieved(id, title, subtitle, tier) {
    const data = this._getAchieved();
    if (!data[id]) {
      data[id] = { time: Date.now(), title: title, subtitle: subtitle, tier: tier || 1 };
      try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch {}
    }
  },

  _isAchieved(id) {
    return !!this._getAchieved()[id];
  },

  // queue a celebration for later (shown when user leaves the trainer)
  _queue(title, subtitle, tier) {
    try {
      const pending = JSON.parse(localStorage.getItem(this.QUEUE_KEY) || "[]");
      pending.push({ title: title, subtitle: subtitle, tier: tier || 1 });
      localStorage.setItem(this.QUEUE_KEY, JSON.stringify(pending));
    } catch {}
  },

  // show all queued celebrations (called on index/progresjon pages)
  showPending() {
    try {
      const pending = JSON.parse(localStorage.getItem(this.QUEUE_KEY) || "[]");
      localStorage.removeItem(this.QUEUE_KEY);
      if (pending.length === 0) return;
      // show one at a time with delay
      let delay = 300;
      pending.forEach((item) => {
        if (item.type === "mastery") {
          // rebuild a mock progress tracker from stored stats
          const s = item.stats;
          const mock = new ProgressTracker();
          s.chars.forEach((c) => {
            mock.initializeCharacter(c.c, [c.r]);
            const p = mock.getProgress(c.c);
            p.correctCount = c.ok;
            p.incorrectCount = c.err;
            p.isMastered = true;
          });
          setTimeout(() => this._showMasteryCelebration(s.label, mock), delay);
          delay += 15500;
        } else {
          setTimeout(() => this._showCelebration(item.title, item.subtitle, item.tier), delay);
          delay += (item.tier === 3 ? 9500 : item.tier === 2 ? 6500 : 4500);
        }
      });
    } catch {}
  },

  // record first-ever activity timestamp
  recordStart() {
    if (!localStorage.getItem(this.START_KEY)) {
      try { localStorage.setItem(this.START_KEY, Date.now().toString()); } catch {}
    }
  },

  // format a duration in ms to a human-readable string
  _formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return days + " " + (days === 1 ? (t("ms-day") || "dag") : (t("ms-days") || "dager"));
    if (hours > 0) return hours + " " + (hours === 1 ? (t("ms-hour") || "time") : (t("ms-hours") || "timer"));
    return minutes + " " + (t("ms-minutes") || "min");
  },

  // get formatted duration since first activity
  _getTimeSinceStart() {
    const start = parseInt(localStorage.getItem(this.START_KEY));
    if (!start) return null;
    return this._formatDuration(Date.now() - start);
  },

  // get all milestone definitions for the achievements display
  getAllMilestones() {
    const achieved = this._getAchieved();
    const start = parseInt(localStorage.getItem(this.START_KEY)) || 0;
    const milestones = [];

    // streak milestones
    [3, 7, 14, 30, 50, 100, 365].forEach((n) => {
      const id = "streak-" + n;
      const tier = n >= 100 ? 3 : n >= 30 ? 2 : 1;
      const icons = { 1: "🔥", 2: "🔥", 3: "🔥" };
      milestones.push({
        id: id,
        icon: icons[tier],
        title: n + " " + (n === 1 ? (t("ms-day") || "dag") : (t("ms-days") || "dager")) + " " + (t("ms-streak-label") || "på rad"),
        tier: tier,
        achieved: achieved[id] || null,
      });
    });

    // mastery milestones
    ["hiragana", "katakana"].forEach((type) => {
      const id = "master-" + type;
      const label = type === "katakana" ? "Katakana" : "Hiragana";
      milestones.push({
        id: id,
        icon: "👑",
        title: label + " 100%",
        tier: 3,
        achieved: achieved[id] || null,
      });
    });

    // answer count milestones
    [50, 100, 250, 500, 1000, 2500, 5000].forEach((n) => {
      const id = "answers-" + n;
      const tier = n >= 1000 ? 3 : n >= 250 ? 2 : 1;
      const icons = { 1: "⭐", 2: "🏆", 3: "👑" };
      milestones.push({
        id: id,
        icon: icons[tier],
        title: n + " " + (t("milestone-answers") || "riktige svar"),
        tier: tier,
        achieved: achieved[id] || null,
      });
    });

    return milestones;
  },

  // check and queue milestone if new
  check(id, title, subtitle, tier) {
    if (this._isAchieved(id)) return;
    this._markAchieved(id, title, subtitle, tier);
    this._queue(title, subtitle, tier);
  },

  // check streak milestones
  checkStreak() {
    const sd = StreakManager.getDisplay();
    const thresholds = [3, 7, 14, 30, 50, 100, 365];
    thresholds.forEach((n) => {
      if (sd.current >= n) {
        const title = n + " " + (n === 1 ? t("streak-day") : t("streak-days"));
        const tier = n >= 100 ? 3 : n >= 30 ? 2 : 1;
        this.check("streak-" + n, title, t("milestone-streak"), tier);
      }
    });
  },

  // check mastery milestones (call after correct answer in kana trainers)
  checkMastery(progressTracker, type) {
    const mastered = progressTracker.getMasteredCharacters().length;
    const total = progressTracker.getAllProgress().size;
    if (total > 0 && mastered === total) {
      const id = "master-" + type;
      if (this._isAchieved(id)) return;
      const label = type === "katakana" ? "Katakana" : "Hiragana";
      this._markAchieved(id, label + " 100%!", t("milestone-mastery"), 3);
      // queue mastery with stats data snapshot
      try {
        const allP = progressTracker.getAllProgress();
        const stats = { label: label, chars: [] };
        for (const [ch, p] of allP.entries()) {
          stats.chars.push({ c: ch, r: p.romanji[0], ok: p.correctCount, err: p.incorrectCount });
        }
        const pending = JSON.parse(localStorage.getItem(this.QUEUE_KEY) || "[]");
        pending.push({ type: "mastery", stats: stats });
        localStorage.setItem(this.QUEUE_KEY, JSON.stringify(pending));
      } catch {}
    }
  },

  // check answer count milestones
  checkAnswerCount() {
    const data = DifficultyTracker._load();
    let totalCorrect = 0;
    Object.values(data).forEach((d) => { totalCorrect += d.c; });
    const thresholds = [50, 100, 250, 500, 1000, 2500, 5000];
    const achieved = this._getAchieved();
    thresholds.forEach((n, idx) => {
      if (totalCorrect >= n) {
        const tier = n >= 1000 ? 3 : n >= 250 ? 2 : 1;
        const id = "answers-" + n;
        if (achieved[id]) return;

        const totalElapsed = this._getTimeSinceStart();
        let sub = t("milestone-practice");
        if (totalElapsed) {
          sub += " — " + (t("ms-elapsed") || "på") + " " + totalElapsed;
        }

        this._markAchieved(id, n + " " + t("milestone-answers"), sub, tier);
        this._queue(n + " " + t("milestone-answers"), sub, tier);
      }
    });
  },

  // tier: 1 = small, 2 = medium, 3 = epic
  _showCelebration(title, subtitle, tier) {
    tier = tier || 1;
    const tierClass = "milestone-tier-" + tier;

    // tier-specific config
    const icons = { 1: "🎉", 2: "🏆", 3: "👑" };
    const particleCounts = { 1: 12, 2: 25, 3: 45 };
    const durations = { 1: 4000, 2: 6000, 3: 9000 };
    const emojiSets = {
      1: ["✨", "⭐", "🌸"],
      2: ["✨", "⭐", "🌸", "🎊", "💪", "🔥"],
      3: ["✨", "⭐", "🌸", "🎊", "💪", "🔥", "💫", "🏆", "👑", "🎆", "💎", "🌟"],
    };

    const overlay = document.createElement("div");
    overlay.className = "milestone-overlay " + tierClass;
    overlay.innerHTML =
      '<div class="milestone-content">' +
        '<div class="milestone-particles"></div>' +
        '<div class="milestone-icon">' + icons[tier] + '</div>' +
        '<div class="milestone-title">' + title + '</div>' +
        '<div class="milestone-subtitle">' + subtitle + '</div>' +
        '<button class="milestone-close">' + (t("milestone-close") || "OK") + '</button>' +
      '</div>';

    document.body.appendChild(overlay);

    // spawn particles
    const particleContainer = overlay.querySelector(".milestone-particles");
    const emojis = emojiSets[tier];
    const count = particleCounts[tier];
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "milestone-particle";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * (tier === 3 ? 1.5 : 0.5) + "s";
      p.style.animationDuration = (1.5 + Math.random() * tier) + "s";
      if (tier === 3) p.style.fontSize = (1.2 + Math.random() * 0.8) + "rem";
      particleContainer.appendChild(p);
    }

    // close
    const closeBtn = overlay.querySelector(".milestone-close");
    closeBtn.addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
    setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, durations[tier]);
  },

  // special celebration for 100% mastery with stats
  _showMasteryCelebration(label, progressTracker) {
    const allProgress = progressTracker.getAllProgress();
    let totalCorrect = 0;
    let totalIncorrect = 0;
    const chars = [];
    for (const [char, p] of allProgress.entries()) {
      totalCorrect += p.correctCount;
      totalIncorrect += p.incorrectCount;
      chars.push({ char: char, correct: p.correctCount, incorrect: p.incorrectCount, romanji: p.romanji[0] });
    }
    const totalAnswers = totalCorrect + totalIncorrect;
    const accuracy = totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;

    // sort by error rate to find hardest/easiest
    chars.sort((a, b) => {
      const rateA = a.incorrect / (a.correct + a.incorrect + 1);
      const rateB = b.incorrect / (b.correct + b.incorrect + 1);
      return rateB - rateA;
    });
    const hardest = chars.slice(0, 3).filter((c) => c.incorrect > 0);
    const easiest = chars.slice(-3).reverse();

    // build stats HTML
    const elapsed = this._getTimeSinceStart();
    let statsHtml =
      '<div class="mastery-stats">' +
        (elapsed ? '<div class="mastery-stat-row">' +
          '<span class="mastery-stat-label">⏱ ' + (t("ms-time") || "Tid brukt") + '</span>' +
          '<span class="mastery-stat-value">' + elapsed + '</span>' +
        '</div>' : '') +
        '<div class="mastery-stat-row">' +
          '<span class="mastery-stat-label">' + (t("ms-total") || "Totalt") + '</span>' +
          '<span class="mastery-stat-value">' + totalAnswers + ' ' + (t("ms-answers") || "svar") + '</span>' +
        '</div>' +
        '<div class="mastery-stat-row">' +
          '<span class="mastery-stat-label">' + (t("ms-accuracy") || "Treffsikkerhet") + '</span>' +
          '<span class="mastery-stat-value">' + accuracy + '%</span>' +
        '</div>' +
        '<div class="mastery-stat-row">' +
          '<span class="mastery-stat-label">✅ ' + (t("ms-correct") || "Riktige") + '</span>' +
          '<span class="mastery-stat-value mastery-good">' + totalCorrect + '</span>' +
        '</div>' +
        '<div class="mastery-stat-row">' +
          '<span class="mastery-stat-label">❌ ' + (t("ms-wrong") || "Feil") + '</span>' +
          '<span class="mastery-stat-value mastery-bad">' + totalIncorrect + '</span>' +
        '</div>';

    if (hardest.length > 0) {
      statsHtml +=
        '<div class="mastery-char-section">' +
          '<span class="mastery-char-label">😅 ' + (t("ms-hardest") || "Vanskeligst") + '</span>' +
          '<span class="mastery-char-list">' +
            hardest.map((c) => '<span class="mastery-char-chip mastery-char-hard">' + c.char + ' <small>' + c.romanji + '</small></span>').join("") +
          '</span>' +
        '</div>';
    }
    if (easiest.length > 0) {
      statsHtml +=
        '<div class="mastery-char-section">' +
          '<span class="mastery-char-label">💪 ' + (t("ms-easiest") || "Letteste") + '</span>' +
          '<span class="mastery-char-list">' +
            easiest.map((c) => '<span class="mastery-char-chip mastery-char-easy">' + c.char + ' <small>' + c.romanji + '</small></span>').join("") +
          '</span>' +
        '</div>';
    }
    statsHtml += '</div>';

    // build full overlay (tier 3 epic)
    const overlay = document.createElement("div");
    overlay.className = "milestone-overlay milestone-tier-3";
    overlay.innerHTML =
      '<div class="milestone-content milestone-content--mastery">' +
        '<div class="milestone-particles"></div>' +
        '<div class="milestone-icon">👑</div>' +
        '<div class="milestone-title">' + label + ' 100%!</div>' +
        '<div class="milestone-subtitle">' + (t("milestone-mastery") || "Alt mestret!") + '</div>' +
        statsHtml +
        '<button class="milestone-close">' + (t("milestone-close") || "OK") + '</button>' +
      '</div>';

    document.body.appendChild(overlay);

    // particles (epic tier)
    const particleContainer = overlay.querySelector(".milestone-particles");
    const emojis = ["✨", "⭐", "🌸", "🎊", "💪", "🔥", "💫", "🏆", "👑", "🎆", "💎", "🌟"];
    for (let i = 0; i < 45; i++) {
      const p = document.createElement("span");
      p.className = "milestone-particle";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 1.5 + "s";
      p.style.animationDuration = (1.5 + Math.random() * 3) + "s";
      p.style.fontSize = (1.2 + Math.random() * 0.8) + "rem";
      particleContainer.appendChild(p);
    }

    const closeBtn = overlay.querySelector(".milestone-close");
    closeBtn.addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
    setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 15000);
  },
};

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
    const errorMultiplier = 1 + this.incorrectCount / (this.correctCount + 1);
    const reviewInterval = 5 * 60 * 1000;
    const timeSinceLastSeen = this.lastSeen
      ? Date.now() - this.lastSeen
      : reviewInterval;
    const timeMultiplier = Math.min(2, timeSinceLastSeen / reviewInterval);
    const masteredMultiplier = this.isMastered ? 0.1 : 1;
    return errorMultiplier * timeMultiplier * masteredMultiplier;
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
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.SETTINGS_KEY);
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

    this.speakBtn = document.getElementById("speak-btn");

    this.initializeEventListeners();
    this.loadSettings();
  }

  initializeEventListeners() {
    // Enter/Space fallback when auto-answer is off
    this.answerInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.handleAnswer(this.answerInput.value);
      }
    });
    // auto-answer — only submit on exact match
    this.answerInput.addEventListener("input", () => {
      if (localStorage.getItem("auto-answer") !== "true") return;
      if (this.currentCharacters.length === 0) return;
      const val = this.answerInput.value.trim().toLowerCase();
      if (!val) return;
      const answers = this.currentCharacters
        .map((c) => c.romanji)
        .reduce((acc, arr) => {
          if (acc.length === 0) return arr;
          const combos = [];
          acc.forEach((a) => arr.forEach((b) => combos.push(a + b)));
          return combos;
        }, [])
        .map((r) => r.toLowerCase());
      const minLen = Math.min(...answers.map((r) => r.length));
      if (answers.some((r) => r === val)) {
        this.handleAnswer(this.answerInput.value);
      } else if (val.length >= minLen && !answers.some((r) => r.startsWith(val))) {
        // typed something that can't lead to a correct answer — count as wrong
        this.handleIncorrectAnswer();
      }
    });
    this.nextBtn.addEventListener("click", () => this.nextCharacter());
    this.showAnswerBtn.addEventListener("click", () => this.showAnswer());
    this.randomBtn.addEventListener("click", () => this.selectAllSubsets());
    this.clearBtn.addEventListener("click", () => this.clearAllSubsets());
    if (this.speakBtn) {
      this.speakBtn.addEventListener("click", () => {
        if (this.currentCharacters.length > 0) {
          speakJapanese(this.currentCharacters.map(c => c.character).join(""));
        }
      });
    }
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
    // don't focus while the subset menu is open — avoids keyboard popup on mobile
    if (this.subsetMenu.classList.contains("hidden")) {
      this.answerInput.focus();
    }
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
    if (typeof StreakManager !== "undefined") StreakManager.recordActivity();
    MilestoneTracker.recordStart();

    // milestone checks
    const scriptType = typeof KatakanaData !== "undefined" && document.title.includes("Katakana") ? "katakana" : "hiragana";
    MilestoneTracker.checkMastery(this.progressTracker, scriptType);
    MilestoneTracker.checkStreak();

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

    var threshold = localStorage.getItem("hint-threshold") || "3";
    if (threshold !== "never" && this.incorrectAttempts >= parseInt(threshold, 10)) {
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
        // data-char-units lets multi-codepoint combos (e.g. "きゃ") be tracked as one unit
        const chars = el.dataset.charUnits
          ? el.dataset.charUnits.split(",")
          : [...el.textContent];
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
