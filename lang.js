/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  lang.js — Translations (no/en)
 *  Glenn's Japanese Trainer
 */

const LANG = {
  no: {
    // Navigation
    back: "◀",

    // Common controls
    next: "Neste →",
    "show-answer": "Vis svar",

    // Hamburger menu
    "select-charset": "Velg tegnsett",
    "choose-all": "Velg alle",
    "remove-all": "Fjern alle",
    "extra-chars": "Ekstra tegn",
    "small-kana": "Små kana",

    // Subset row names
    vowels: "Vokaler",
    "ka-row": "K-lyd",
    "sa-row": "S-lyd",
    "ta-row": "T-lyd",
    "na-row": "N-lyd",
    "ha-row": "H-lyd",
    "ma-row": "M-lyd",
    "ya-row": "Y-lyd",
    "ra-row": "R-lyd",
    "wa-row": "W-lyd",
    "n-row": "N",
    "lookalikes": "Forvekslende",
    "small-kana-row": "Små kana",

    // Hiragana page
    "hiragana-title": "Hiragana",
    "mastered-hiragana": "Mestrede hiraganas",

    // Katakana page
    "katakana-title": "Katakana",
    "mastered-katakana": "Mestrede katakanas",

    // Kanji page
    "kanji-title": "Kanji",
    "kanji-numbers": "Tall",
    "kanji-time": "Tid",
    "kanji-people": "Mennesker & ting",
    "kanji-nature": "Natur & retning",
    "kanji-verbs": "Verb",
    "kanji-adjectives": "Adjektiv",
    "kanji-mode-meaning": "Betydning",
    "kanji-mode-reading": "Lesing",
    "kanji-placeholder-meaning": "Skriv oversettelsen...",
    "kanji-placeholder-reading": "Skriv uttale (romaji)...",

    // Ord page
    "ord-title": "Ord",
    "char-count-label": "Antall tegn:",
    "hide-chars": "Skjul tegn",
    "dictionary": "Ordbok",
    "dict-chars": "tegn",

    // Tall page
    "tall-title": "Tall",
    "from-label": "Fra",
    "to-label": "til",
    "tall-placeholder": "Skriv romanji eller tall...",
    "tall-placeholder-num": "Skriv tallet...",
    "tall-placeholder-jp": "Skriv romanji...",
    "lifetime-label": "Totalt riktig:",

    // Common training
    "romanji-placeholder": "Skriv romanji her...",
    "progress-heading": "Fremgang",
    "round-label": "Denne runden:",

    // Progresjon page
    "prog-title": "Min Progresjon",
    "total-mastered": "Totalt mestret:",
    "mastered-check": "Mestret ✓",
    "not-practiced": "Ikke øvd på ennå",
    "correct-label": "Riktig",
    "streak-label": "Streak",
    "learned-label": "lært",

    // How-to page
    "howto-title": "Slik bruker du appen",

    // Daily challenge
    "daily-challenge": "Dagens Utfordring",
    "daily-subtitle": "10 tilfeldige tegn — nye hvert døgn",
    "daily-complete-title": "Fullført! 🎉",
    "daily-complete-msg": "Du klarte alle 10 tegn for i dag!",
    "daily-streak-label": "Daglig utfordring på rad",
    "daily-streak-singular": "Daglig utfordring på rad",
    "daily-progress-label": "tegn fullført",

    // Main menu
    "menu-subtitle": "Lær japansk",
    "footer-sub": "Laget for å gjøre det gøy og enkelt å lære japansk - for alle!",
    "footer-rights": "Alle rettigheter forbeholdt.",
    "learn-kana": "Lær Kana",
    "learn-hiragana": "Lær Hiragana",
    "learn-katakana": "Lær Katakana",
    "learn-kanji": "Lær Kanji",
    "kana-title": "Kana",
    "learn-words": "Lær Ord",
    "learn-numbers": "Lær Tall",
    "my-progress": "Min Progresjon",

    // JS dynamic strings
    "select-from-menu": "Velg tegn fra menyen ☰",
    "hint-prefix": "Hint: Begynner med",
    "answer-prefix": "Svar:",
    "no-numbers-in-range": "Ingen tall i dette området",
    "numbers-in-range": "tall",
    "number-singular": "tall",
    "no-words-in-count": "Ingen ord med dette antallet",
    "chars-unit": "tegn",
    "words-label": "ord",
    "show-chars": "Vis tegn",
    "storage-full": "Lagringsplass er full. Fremgang kan ikke lagres.",
    "auto-answer": "Auto-svar",

    // Streak
    "streak-day": "dag på rad",
    "streak-days": "dager på rad",
    "streak-current": "Dager på rad",
    "streak-longest": "Din rekord",

    // Detailed stats
    "needs-practice": "Trenger mer øving",
    "needs-practice-desc": "Tegnene du oftest svarer feil på — høyere % betyr bedre",
    "accuracy-label": "Nøyaktighet",
    "correct-short": "riktig",
    "no-mistakes-yet": "Ingen feil registrert ennå — bra jobba!",
    "legend-mastered": "Mestret",
    "legend-seen": "Sett, ikke mestret",
    "legend-unseen": "Ikke øvd på",

    // Script type friend tooltips
    "tooltip-hiragana": "Øv bare på Hiragana",
    "tooltip-katakana": "Øv bare på Katakana",
    "tooltip-both": "Begge",

    // Challenge page
    "challenge-title": "Utfordring",
    "mode-hourglass": "Tidspresset",
    "mode-hourglass-desc": "30 sek. +2s riktig, −5s feil.",
    "mode-lives": "3 Liv",
    "mode-lives-desc": "Ingen tidtaker. Hvor mange tegn klarer du?",
    "mode-speedrun": "Speedrun",
    "mode-speedrun-desc": "Velg tegnsett. Klokka tikker oppover.",
    "challenge-start": "Start",
    "challenge-back-mode": "◀ Tilbake",
    "challenge-quit": "Avslutt",
    "challenge-game-over": "Ferdig!",
    "challenge-complete": "Bra jobba!",
    "challenge-score-label": "Poeng",
    "challenge-chars-answered": "tegn riktig",
    "challenge-personal-best": "Personlig rekord",
    "challenge-new-best": "Ny rekord!",
    "challenge-play-again": "Spill igjen",
    "challenge-change-mode": "Bytt modus",
    "challenge-chars-selected": "tegn valgt",
    "challenge-no-chars": "Velg minst ett tegnsett",
    "challenge-today-best": "I dag",
    "challenge-best-time": "Lengst overlevd",
    "challenge-avg-time": "Beste snitt",
    "challenge-per-char": "per tegn",
    "challenge-survival": "Overlevd",
    "challenge-highscore": "Highscore",
    "challenge-no-data": "Ingen data ennå",
    "challenge-combo-best": "Rekord for dette settet",
    "challenge-change-subsets": "Bytt tegnsett",

    // Settings overlay
    "settings-challenge": "Utfordringsinnstillinger",
    "settings-training": "Treningsinnstillinger",
    "settings-data": "Data",
    "setting-dakuten": "Dakuten (゛) standard",
    "setting-handakuten": "Handakuten (゜) standard",
    "setting-hint-threshold": "Visning av hint",
    "setting-hint-never": "Aldri",
    "setting-export": "Eksporter data",
    "setting-import": "Importer data",
    "setting-reset-highscore": "Nullstill highscore",
    "setting-reset-highscore-btn": "Nullstill highscore...",
    "setting-reset-hs-prompt": "Skriv SLETT eller DELETE for å bekrefte:",
    "setting-reset-hs-confirm": "Slett highscores",
    "setting-reset-done": "Ferdig!",
    "setting-reset-all": "Nullstill all progresjon",
    "setting-reset-all-btn": "Nullstill all progresjon...",
    "setting-reset-all-sure": "Er du helt sikker?",
    "setting-yes": "Ja",
    "setting-no": "Nei",
    "setting-reset-all-romanji": "Skriv 'はい' for ja, 'いいえ' for nei:",
    "setting-reset-all-final": "Trykk for å slette alt",
    "setting-import-invalid": "Ugyldig fil. Forventet en JSON-eksport fra denne appen.",
    "setting-import-error": "Kunne ikke lese filen.",
    "setting-deleted-reloading": "Slettet. Laster på nytt...",

    // Theme
    "settings-theme": "Utseende",
    "setting-theme-label": "Tema",
    "setting-theme-system": "System",
    "setting-theme-light": "Lys",
    "setting-theme-dark": "Mørk",
  },
  en: {
    // Navigation
    back: "◀",

    // Common controls
    next: "Next →",
    "show-answer": "Show answer",

    // Hamburger menu
    "select-charset": "Select character set",
    "choose-all": "Select all",
    "remove-all": "Remove all",
    "extra-chars": "Extra characters",
    "small-kana": "Small kana",

    // Subset row names
    vowels: "Vowels",
    "ka-row": "K-sound",
    "sa-row": "S-sound",
    "ta-row": "T-sound",
    "na-row": "N-sound",
    "ha-row": "H-sound",
    "ma-row": "M-sound",
    "ya-row": "Y-sound",
    "ra-row": "R-sound",
    "wa-row": "W-sound",
    "lookalikes": "Look-alikes",
    "n-row": "N",
    "small-kana-row": "Small kana",

    // Hiragana page
    "hiragana-title": "Hiragana",
    "mastered-hiragana": "Mastered hiragana",

    // Katakana page
    "katakana-title": "Katakana",
    "mastered-katakana": "Mastered katakana",

    // Kanji page
    "kanji-title": "Kanji",
    "kanji-numbers": "Numbers",
    "kanji-time": "Time",
    "kanji-people": "People & things",
    "kanji-nature": "Nature & directions",
    "kanji-verbs": "Verbs",
    "kanji-adjectives": "Adjectives",
    "kanji-mode-meaning": "Meaning",
    "kanji-mode-reading": "Reading",
    "kanji-placeholder-meaning": "Type the meaning...",
    "kanji-placeholder-reading": "Type the reading (romaji)...",

    // Ord page
    "ord-title": "Words",
    "char-count-label": "Characters:",
    "hide-chars": "Hide characters",
    "dictionary": "Dictionary",
    "dict-chars": "chars",

    // Tall page
    "tall-title": "Numbers",
    "from-label": "From",
    "to-label": "to",
    "tall-placeholder": "Type romaji or number...",
    "tall-placeholder-num": "Type the number...",
    "tall-placeholder-jp": "Type romaji...",
    "lifetime-label": "Total correct:",

    // Common training
    "romanji-placeholder": "Type romaji here...",
    "progress-heading": "Progress",
    "round-label": "This round:",

    // Progresjon page
    "prog-title": "My Progress",
    "total-mastered": "Total mastered:",
    "mastered-check": "Mastered ✓",
    "not-practiced": "Not practiced yet",
    "correct-label": "Correct",
    "streak-label": "Streak",
    "learned-label": "learned",

    // How-to page
    "howto-title": "How to use the app",

    // Daily challenge
    "daily-challenge": "Daily Challenge",
    "daily-subtitle": "10 random characters — new every day",
    "daily-complete-title": "Completed! 🎉",
    "daily-complete-msg": "You got all 10 characters for today!",
    "daily-streak-label": "Daily challenges in a row",
    "daily-streak-singular": "Daily challenge in a row",
    "daily-progress-label": "characters done",

    // Main menu
    "menu-subtitle": "Learn Japanese",
    "footer-sub": "Created to make learning Japanese fun and easy for everyone!",
    "footer-rights": "All rights reserved.",
    "learn-kana": "Learn Kana",
    "learn-hiragana": "Learn Hiragana",
    "learn-katakana": "Learn Katakana",
    "learn-kanji": "Learn Kanji",
    "kana-title": "Kana",
    "learn-words": "Learn Words",
    "learn-numbers": "Learn Numbers",
    "my-progress": "My Progress",

    // JS dynamic strings
    "select-from-menu": "Select characters from menu ☰",
    "hint-prefix": "Hint: Starts with",
    "answer-prefix": "Answer:",
    "no-numbers-in-range": "No numbers in this range",
    "numbers-in-range": "numbers",
    "number-singular": "number",
    "no-words-in-count": "No words with this count",
    "chars-unit": "chars",
    "words-label": "words",
    "show-chars": "Show characters",
    "storage-full": "Storage is full. Progress cannot be saved.",
    "auto-answer": "Auto-answer",

    // Streak
    "streak-day": "day in a row",
    "streak-days": "days in a row",
    "streak-current": "Days in a row",
    "streak-longest": "Your record",

    // Detailed stats
    "needs-practice": "Needs more practice",
    "needs-practice-desc": "Characters you answer incorrectly most often — higher % is better",
    "accuracy-label": "Accuracy",
    "correct-short": "correct",
    "no-mistakes-yet": "No mistakes recorded yet — great work!",
    "legend-mastered": "Mastered",
    "legend-seen": "Seen, not mastered",
    "legend-unseen": "Not practiced",

    // Script type toggle tooltips
    "tooltip-hiragana": "Practice Hiragana only",
    "tooltip-katakana": "Practice Katakana only",
    "tooltip-both": "Both",

    // Challenge page
    "challenge-title": "Challenge",
    "mode-hourglass": "Hourglass",
    "mode-hourglass-desc": "30 sec. +2s correct, −5s wrong.",
    "mode-lives": "3 Lives",
    "mode-lives-desc": "No timer. How many characters can you get?",
    "mode-speedrun": "Speedrun",
    "mode-speedrun-desc": "Pick character sets. Clock ticks up.",
    "challenge-start": "Start",
    "challenge-back-mode": "◀ Back",
    "challenge-quit": "Quit",
    "challenge-game-over": "Game over!",
    "challenge-complete": "Well done!",
    "challenge-score-label": "Score",
    "challenge-chars-answered": "characters correct",
    "challenge-personal-best": "Personal best",
    "challenge-new-best": "New record!",
    "challenge-play-again": "Play again",
    "challenge-change-mode": "Change mode",
    "challenge-chars-selected": "characters selected",
    "challenge-no-chars": "Select at least one character set",
    "challenge-today-best": "Today",
    "challenge-best-time": "Longest survived",
    "challenge-avg-time": "Best average",
    "challenge-per-char": "per char",
    "challenge-survival": "Survived",
    "challenge-highscore": "Highscore",
    "challenge-no-data": "No data yet",
    "challenge-combo-best": "Record for this set",
    "challenge-change-subsets": "Change subsets",

    // Settings overlay
    "settings-challenge": "Challenge settings",
    "settings-training": "Training settings",
    "settings-data": "Data",
    "setting-dakuten": "Dakuten (゛) default",
    "setting-handakuten": "Handakuten (゜) default",
    "setting-hint-threshold": "Hint display",
    "setting-hint-never": "Never",
    "setting-export": "Export data",
    "setting-import": "Import data",
    "setting-reset-highscore": "Reset highscores",
    "setting-reset-highscore-btn": "Reset highscores...",
    "setting-reset-hs-prompt": "Type SLETT or DELETE to confirm:",
    "setting-reset-hs-confirm": "Delete highscores",
    "setting-reset-done": "Done!",
    "setting-reset-all": "Reset all progress",
    "setting-reset-all-btn": "Reset all progress...",
    "setting-reset-all-sure": "Are you completely sure?",
    "setting-yes": "Yes",
    "setting-no": "No",
    "setting-reset-all-romanji": "Type 'はい' for yes, 'いいえ' for no:",
    "setting-reset-all-final": "Press to delete everything",
    "setting-import-invalid": "Invalid file. Expected a JSON export from this app.",
    "setting-import-error": "Could not read file.",
    "setting-deleted-reloading": "Deleted. Reloading...",

    // Theme
    "settings-theme": "Appearance",
    "setting-theme-label": "Theme",
    "setting-theme-system": "System",
    "setting-theme-light": "Light",
    "setting-theme-dark": "Dark",
  },
};

function getLang() {
  return localStorage.getItem("app-language") || "no";
}

function t(key) {
  const lang = getLang();
  return (LANG[lang] && LANG[lang][key]) || LANG["no"][key] || key;
}

// Parse "english (norsk)" format — returns just the selected language's part
function getWordTranslation(raw) {
  if (!raw) return raw;
  const lang = getLang();
  const match = raw.match(/^(.+?)\s*\((.+)\)$/);
  if (!match) return raw;
  return lang === "en" ? match[1].trim() : match[2].trim();
}

function applyLang() {
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val === key) return; // no translation found, keep HTML default
    if (el.tagName === "INPUT") {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    const val = t(key);
    if (val === key) return;
    el.title = val;
  });
}

document.addEventListener("DOMContentLoaded", applyLang);

// Escape — capture phase on window so nothing can block it
window.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;

  // close subset menu if open (hiragana / katakana pages)
  var menu = document.getElementById("subset-menu");
  if (menu && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
    var bd = document.getElementById("menu-backdrop");
    if (bd) bd.classList.add("hidden");
    e.stopImmediatePropagation();
    return;
  }

  // page-specific override (e.g. challenge.html navigates to mode select first)
  if (typeof window.onEscapeKey === "function" && window.onEscapeKey()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return;
  }

  // navigate back to index (every sub-page has .back-link)
  if (document.querySelector(".back-link")) {
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.href = "index.html";
  }
}, true);
