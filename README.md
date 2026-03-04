# 日本語 — Learn Japanese

A browser-based app for learning Japanese scripts, words, and numbers. No installation, no account — just open and practise.

**Live at: [derpeagle.github.io/hiragana](https://derpeagle.github.io/hiragana)**

Supports **Norwegian 🇳🇴** and **English 🇬🇧** — switch language in the top left corner.

---

## Features

| Module | Description |
|---|---|
| **Hiragana** あ | Practise all 46 base characters + dakuten (が…), handakuten (ぱ…), and a look-alikes subset for commonly confused characters |
| **Katakana** ア | Same structure as hiragana, with its own look-alikes subset (シ/ツ, ソ/ン, etc.) |
| **Words** 語 | Recognise Japanese words in hiragana, katakana, or both (1–10 characters) — with a dictionary of all in-app words and audio pronunciation |
| **Numbers** 数 | Practise Japanese numbers in any range up to 999 billion — three directions: Japanese→number, number→Japanese, or mixed |
| **Daily Challenge** 🏆 | 10 date-seeded random characters per day — build a challenge streak |
| **Challenge** ⚡ | Three timed/scored game modes with highscore tracking |
| **Progress** ★ | Colour-coded overview of all characters + accuracy stats and weak spots |
| **How-to** ? | In-app guide covering all features and tips for beginners |

---

## Mastery System

Each character has a **streak** of 10 dots:

```
○○○○○○○○○○  — not started
●●●●○○○○○○  — 4 correct in a row
●●●●●●●●●●  — mastered ✓ (turns green)
```

- Answer correctly **10 times in a row** → character is mastered
- One typo won't break your streak — it only resets after **3 wrong answers in a row**
- Progress is saved automatically in the browser (`localStorage`)

---

## Daily Streak

Every day you answer at least one character correctly, your **daily streak** increases by one. A 🔥 badge on the home screen shows your current streak. Missing a day resets the streak, but your personal record is kept.

---

## Daily Challenge

Each day, 10 characters are deterministically selected from the full hiragana or katakana set (including dakuten and handakuten) using a date-seeded random number generator. Answer all 10 correctly to complete the challenge. Complete challenges on consecutive days to build a **challenge streak**. A ✓ appears on the home screen card once you've finished today's challenge.

---

## Challenge Modes

Three competitive game modes, each with separate highscore tracking for hiragana and katakana:

| Mode | How it works |
|---|---|
| **Hourglass** ⏳ | Start with 30 seconds. Correct = +2s, wrong = −5s. Survive as long as you can. |
| **3 Lives** ❤️ | No timer — answer as many as you can with only 3 lives. |
| **Speedrun** 🏁 | Choose your character subsets and race to answer them all. Wrong answers go back in the queue. |

All modes let you choose which character subsets to include, and track your personal best.

---

## Settings

Accessible from the gear icon on the home screen:

| Setting | Description |
|---|---|
| **Theme** | Switch between System, Light, and Dark mode |
| **Auto-answer** | Automatically submit when your input matches exactly |
| **Dakuten default** | Include dakuten characters (゛) by default in trainers |
| **Handakuten default** | Include handakuten characters (゜) by default in trainers |
| **Hint threshold** | Show a hint after 1, 2, 3, or 5 wrong attempts — or never |
| **Export / Import** | Back up all progress as JSON, or restore from a previous backup |
| **Reset highscores** | Clear challenge records (requires typed confirmation) |
| **Reset all** | Wipe all progress and settings (multi-step confirmation for safety) |

---

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no build step
- [Bootstrap 5](https://getbootstrap.com/) for layout utilities
- `localStorage` for saving progress, streaks, and settings
- Built-in i18n supporting Norwegian and English
- Pre-recorded audio pronunciation (Edge TTS, ja-JP-NanamiNeural)
- PWA-ready — installs to home screen, works offline via service worker

---

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/DerpEagle/hiragana.git
   ```
2. Open `index.html` in your browser — that's it!

Optionally, use a local server:
```bash
npx serve .
```

---

## File Overview

```
index.html        — Main menu + settings overlay
hiragana.html     — Hiragana trainer
katakana.html     — Katakana trainer
ord.html          — Word trainer
tall.html         — Number trainer
daily.html        — Daily challenge
challenge.html    — Challenge modes (hourglass, lives, speedrun)
speedrun.html     — Speedrun mode
progresjon.html   — Progress overview
howto.html        — How-to guide
app.js            — Hiragana data and settings
katakana.js       — Katakana data
ord.js            — Word trainer logic
tall.js           — Number trainer logic
trainer-core.js   — Shared trainer logic (CharacterProgress + UIController)
streak.js         — Daily streak tracking (StreakManager)
speak.js          — Audio pronunciation (pre-recorded files + kana fallback)
lang.js           — Translations (no/en)
theme.js          — Light/dark theme switcher
styles.css        — All styles
sw.js             — Service worker (offline cache)
manifest.json     — PWA manifest
audio/            — Pre-recorded pronunciation files (MP3)
```

---

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
Made to make Japanese fun and easy for everyone!
