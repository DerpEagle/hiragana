# 日本語 — Learn Japanese

A browser-based app for learning Japanese scripts and numbers. No installation, no account — just open and practise.

**Live at: [derpeagle.github.io/hiragana](https://derpeagle.github.io/hiragana)**

Supports **Norwegian 🇳🇴** and **English 🇬🇧** — switch language in the top right corner.

---

## Features

| Module | Description |
|---|---|
| **Hiragana** あ | Practise all 46 base characters + dakuten (が…) and handakuten (ぱ…) |
| **Katakana** ア | Same structure as hiragana, used for foreign loanwords |
| **Words** 語 | Recognise Japanese words written in hiragana or katakana |
| **Numbers** 数 | Type Japanese numbers (romaji or digits) in any range you choose |
| **Progress** ★ | Colour-coded overview of all characters you have learned |

---

## Mastery System

Each character has a **streak** of 10 dots:

```
○○○○○○○○○○  — not started
●●●●○○○○○○  — 4 correct in a row
●●●●●●●●●● — mastered ✓ (turns green)
```

- Answer correctly **10 times in a row** → character is mastered
- One typo won't break your streak — it only resets after **3 wrong answers in a row**
- Progress is saved automatically in the browser (`localStorage`)

---

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no frameworks, no build step
- [Bootstrap 5](https://getbootstrap.com/) for layout
- `localStorage` for saving progress and settings
- Built-in i18n supporting Norwegian and English

---

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/DerpEagle/learn-hiragana.git
   ```
2. Open `index.html` in your browser — that's it!

Optionally, use a local server:
```bash
npx serve .
```

---

## File Overview

```
index.html        — Main menu
hiragana.html     — Hiragana trainer
katakana.html     — Katakana trainer
ord.html          — Word trainer
tall.html         — Number trainer
progresjon.html   — Progress overview
howto.html        — How-to guide
app.js            — Hiragana data and settings
katakana.js       — Katakana data
trainer-core.js   — Shared trainer logic
lang.js           — Translations (no/en)
styles.css        — All styles
```

---

## License

MIT — do whatever you want with the code. Made to make Japanese fun and easy for everyone!
