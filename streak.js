/*
 * ┌─────────────────────────────────────────┐
 * │         Glenn's Japanese Trainer        │
 * │    あ ア — hiragana, katakana & more    │
 * └─────────────────────────────────────────┘
 *
 * streak.js — Glenn A.
 * Tracks daily activity streak in localStorage.
 */

const StreakManager = {
  KEY: "app-daily-streak",

  getData() {
    try {
      const str = localStorage.getItem(this.KEY);
      if (!str) return { currentStreak: 0, longestStreak: 0, lastActiveDate: null };
      return JSON.parse(str);
    } catch {
      return { currentStreak: 0, longestStreak: 0, lastActiveDate: null };
    }
  },

  recordActivity() {
    const today = new Date().toISOString().slice(0, 10);
    const data = this.getData();
    if (data.lastActiveDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (data.lastActiveDate === yesterday) {
      data.currentStreak++;
    } else {
      data.currentStreak = 1;
    }
    data.longestStreak = Math.max(data.longestStreak, data.currentStreak);
    data.lastActiveDate = today;
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch {}
  },

  getDisplay() {
    const data = this.getData();
    return { current: data.currentStreak, longest: data.longestStreak };
  },
};
