const LANG = {
  no: {
    // Navigation
    back: "← Tilbake",

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
    "small-kana-row": "Små kana",

    // Hiragana page
    "hiragana-title": "Øv på Hiragana:",
    "mastered-hiragana": "Mestrede hiraganas",

    // Katakana page
    "katakana-title": "Øv på Katakana:",
    "mastered-katakana": "Mestrede katakanas",

    // Ord page
    "ord-title": "Øv på ord",
    "char-count-label": "Antall tegn:",
    "hide-chars": "Skjul tegn",

    // Tall page
    "tall-title": "Øv på tall:",
    "from-label": "Fra",
    "to-label": "til",
    "tall-placeholder": "Skriv romanji eller tall...",
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

    // Main menu
    "menu-subtitle": "Lær japansk",
    "footer-sub": "Laget for å gjøre japansk gøy og lett for alle!",
    "learn-hiragana": "Lær Hiragana",
    "learn-katakana": "Lær Katakana",
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

    // Script type toggle tooltips
    "tooltip-hiragana": "Øv bare på Hiragana",
    "tooltip-katakana": "Øv bare på Katakana",
    "tooltip-both": "Begge",
  },
  en: {
    // Navigation
    back: "← Back",

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
    "n-row": "N",
    "small-kana-row": "Small kana",

    // Hiragana page
    "hiragana-title": "Practice Hiragana:",
    "mastered-hiragana": "Mastered hiragana",

    // Katakana page
    "katakana-title": "Practice Katakana:",
    "mastered-katakana": "Mastered katakana",

    // Ord page
    "ord-title": "Practice words",
    "char-count-label": "Number of characters:",
    "hide-chars": "Hide characters",

    // Tall page
    "tall-title": "Practice numbers:",
    "from-label": "From",
    "to-label": "to",
    "tall-placeholder": "Type romaji or number...",
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

    // Main menu
    "menu-subtitle": "Learn Japanese",
    "footer-sub": "Made to make Japanese fun and easy for everyone!",
    "learn-hiragana": "Learn Hiragana",
    "learn-katakana": "Learn Katakana",
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
    "chars-unit": "characters",
    "words-label": "words",
    "show-chars": "Show characters",
    "storage-full": "Storage is full. Progress cannot be saved.",

    // Script type toggle tooltips
    "tooltip-hiragana": "Practice Hiragana only",
    "tooltip-katakana": "Practice Katakana only",
    "tooltip-both": "Both",
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
    if (el.tagName === "INPUT") {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
}

document.addEventListener("DOMContentLoaded", applyLang);
