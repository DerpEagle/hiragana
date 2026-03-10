/*
 * ┌─────────────────────────────────────────┐
 * │         Glenn's Japanese Trainer        │
 * │    あ ア — hiragana, katakana & more    │
 * └─────────────────────────────────────────┘
 *
 * setninger.js — Glenn A.
 * Sentence/grammar trainer with progressive difficulty levels.
 */

// sentence data — grouped by grammar level
const SentenceDictionary = {

  // ── Level 1: X は Y です ──────────────────────────────────

  "これはほんです": {
    romanji: "kore wa hon desu",
    translation: "this is a book (dette er en bok)",
    level: 1, category: "desu"
  },
  "それはペンです": {
    romanji: "sore wa pen desu",
    translation: "that is a pen (det er en penn)",
    level: 1, category: "desu"
  },
  "わたしはがくせいです": {
    romanji: "watashi wa gakusei desu",
    translation: "I am a student (jeg er en student)",
    level: 1, category: "desu"
  },
  "あなたはせんせいです": {
    romanji: "anata wa sensei desu",
    translation: "you are a teacher (du er en lærer)",
    level: 1, category: "desu"
  },
  "かれはにほんじんです": {
    romanji: "kare wa nihonjin desu",
    translation: "he is Japanese (han er japansk)",
    level: 1, category: "desu"
  },
  "かのじょはいしゃです": {
    romanji: "kanojo wa isha desu",
    translation: "she is a doctor (hun er en lege)",
    level: 1, category: "desu"
  },
  "これはねこです": {
    romanji: "kore wa neko desu",
    translation: "this is a cat (dette er en katt)",
    level: 1, category: "desu"
  },
  "あれはやまです": {
    romanji: "are wa yama desu",
    translation: "that over there is a mountain (det der borte er et fjell)",
    level: 1, category: "desu"
  },
  "ここはがっこうです": {
    romanji: "koko wa gakkou desu",
    translation: "this place is a school (dette stedet er en skole)",
    level: 1, category: "desu"
  },
  "きょうはげつようびです": {
    romanji: "kyou wa getsuyoubi desu",
    translation: "today is Monday (i dag er det mandag)",
    level: 1, category: "desu"
  },

  // ── Level 2: Particles (を, に, で, へ) ───────────────────

  "みずをのみます": {
    romanji: "mizu wo nomimasu",
    translation: "I drink water (jeg drikker vann)",
    level: 2, category: "wo"
  },
  "ごはんをたべます": {
    romanji: "gohan wo tabemasu",
    translation: "I eat rice/food (jeg spiser ris/mat)",
    level: 2, category: "wo"
  },
  "ほんをよみます": {
    romanji: "hon wo yomimasu",
    translation: "I read a book (jeg leser en bok)",
    level: 2, category: "wo"
  },
  "おんがくをききます": {
    romanji: "ongaku wo kikimasu",
    translation: "I listen to music (jeg hører på musikk)",
    level: 2, category: "wo"
  },
  "テレビをみます": {
    romanji: "terebi wo mimasu",
    translation: "I watch TV (jeg ser på TV)",
    level: 2, category: "wo"
  },
  "がっこうにいきます": {
    romanji: "gakkou ni ikimasu",
    translation: "I go to school (jeg går på skolen)",
    level: 2, category: "ni"
  },
  "うちにかえります": {
    romanji: "uchi ni kaerimasu",
    translation: "I go home (jeg drar hjem)",
    level: 2, category: "ni"
  },
  "ここにすわります": {
    romanji: "koko ni suwarimasu",
    translation: "I sit here (jeg sitter her)",
    level: 2, category: "ni"
  },
  "でんしゃでいきます": {
    romanji: "densha de ikimasu",
    translation: "I go by train (jeg reiser med tog)",
    level: 2, category: "de"
  },
  "にほんごではなします": {
    romanji: "nihongo de hanashimasu",
    translation: "I speak in Japanese (jeg snakker på japansk)",
    level: 2, category: "de"
  },

  // ── Level 3: Full SOV sentences ───────────────────────────

  "わたしはにほんごをべんきょうします": {
    romanji: "watashi wa nihongo wo benkyou shimasu",
    translation: "I study Japanese (jeg studerer japansk)",
    level: 3, category: "sov"
  },
  "わたしはまいにちコーヒーをのみます": {
    romanji: "watashi wa mainichi koohii wo nomimasu",
    translation: "I drink coffee every day (jeg drikker kaffe hver dag)",
    level: 3, category: "sov"
  },
  "かれはしんぶんをよみます": {
    romanji: "kare wa shinbun wo yomimasu",
    translation: "he reads the newspaper (han leser avisen)",
    level: 3, category: "sov"
  },
  "わたしはあさごはんをたべます": {
    romanji: "watashi wa asagohan wo tabemasu",
    translation: "I eat breakfast (jeg spiser frokost)",
    level: 3, category: "sov"
  },
  "かのじょはえいごをはなします": {
    romanji: "kanojo wa eigo wo hanashimasu",
    translation: "she speaks English (hun snakker engelsk)",
    level: 3, category: "sov"
  },
  "ともだちはとうきょうにすんでいます": {
    romanji: "tomodachi wa toukyou ni sundeimasu",
    translation: "my friend lives in Tokyo (vennen min bor i Tokyo)",
    level: 3, category: "sov"
  },
  "わたしはまいにちにほんごをれんしゅうします": {
    romanji: "watashi wa mainichi nihongo wo renshuu shimasu",
    translation: "I practice Japanese every day (jeg øver japansk hver dag)",
    level: 3, category: "sov"
  },
  "せんせいはがっこうでおしえます": {
    romanji: "sensei wa gakkou de oshiemasu",
    translation: "the teacher teaches at school (læreren underviser på skolen)",
    level: 3, category: "sov"
  },
  "わたしはでんしゃでしごとにいきます": {
    romanji: "watashi wa densha de shigoto ni ikimasu",
    translation: "I go to work by train (jeg tar toget til jobb)",
    level: 3, category: "sov"
  },
  "こどもたちはこうえんであそびます": {
    romanji: "kodomotachi wa kouen de asobimasu",
    translation: "the children play in the park (barna leker i parken)",
    level: 3, category: "sov"
  },

  // ── Level 4: Adjectives & negation ────────────────────────

  "このほんはおもしろいです": {
    romanji: "kono hon wa omoshiroi desu",
    translation: "this book is interesting (denne boka er interessant)",
    level: 4, category: "adjective"
  },
  "きょうはあついです": {
    romanji: "kyou wa atsui desu",
    translation: "today is hot (i dag er det varmt)",
    level: 4, category: "adjective"
  },
  "にほんごはむずかしいです": {
    romanji: "nihongo wa muzukashii desu",
    translation: "Japanese is difficult (japansk er vanskelig)",
    level: 4, category: "adjective"
  },
  "このりょうりはおいしいです": {
    romanji: "kono ryouri wa oishii desu",
    translation: "this food is delicious (denne maten er deilig)",
    level: 4, category: "adjective"
  },
  "さくらはきれいです": {
    romanji: "sakura wa kirei desu",
    translation: "cherry blossoms are beautiful (kirsebærblomster er vakre)",
    level: 4, category: "adjective"
  },
  "わたしはさかなをたべません": {
    romanji: "watashi wa sakana wo tabemasen",
    translation: "I don't eat fish (jeg spiser ikke fisk)",
    level: 4, category: "negative"
  },
  "かれはにほんごをはなしません": {
    romanji: "kare wa nihongo wo hanashimasen",
    translation: "he doesn't speak Japanese (han snakker ikke japansk)",
    level: 4, category: "negative"
  },
  "きょうはさむくないです": {
    romanji: "kyou wa samukunai desu",
    translation: "today is not cold (i dag er det ikke kaldt)",
    level: 4, category: "negative"
  },
  "このえいがはおもしろくないです": {
    romanji: "kono eiga wa omoshirokunai desu",
    translation: "this movie is not interesting (denne filmen er ikke interessant)",
    level: 4, category: "negative"
  },
  "あのレストランはしずかではありません": {
    romanji: "ano resutoran wa shizuka dewa arimasen",
    translation: "that restaurant is not quiet (den restauranten er ikke rolig)",
    level: 4, category: "negative"
  },

  // ── Level 5: Past tense & compound ────────────────────────

  "きのうえいがをみました": {
    romanji: "kinou eiga wo mimashita",
    translation: "I watched a movie yesterday (jeg så en film i går)",
    level: 5, category: "past"
  },
  "あさごはんをたべました": {
    romanji: "asagohan wo tabemashita",
    translation: "I ate breakfast (jeg spiste frokost)",
    level: 5, category: "past"
  },
  "にほんにいきました": {
    romanji: "nihon ni ikimashita",
    translation: "I went to Japan (jeg dro til Japan)",
    level: 5, category: "past"
  },
  "ともだちにあいました": {
    romanji: "tomodachi ni aimashita",
    translation: "I met a friend (jeg traff en venn)",
    level: 5, category: "past"
  },
  "きのうべんきょうしませんでした": {
    romanji: "kinou benkyou shimasendeshita",
    translation: "I didn't study yesterday (jeg studerte ikke i går)",
    level: 5, category: "past"
  },
  "あめがふっています": {
    romanji: "ame ga futteimasu",
    translation: "it is raining (det regner)",
    level: 5, category: "compound"
  },
  "いまテレビをみています": {
    romanji: "ima terebi wo miteimasu",
    translation: "I am watching TV now (jeg ser på TV nå)",
    level: 5, category: "compound"
  },
  "かれはもうかえりました": {
    romanji: "kare wa mou kaerimashita",
    translation: "he already went home (han har allerede dratt hjem)",
    level: 5, category: "past"
  },
  "わたしはまだたべていません": {
    romanji: "watashi wa mada tabeteimasen",
    translation: "I haven't eaten yet (jeg har ikke spist ennå)",
    level: 5, category: "compound"
  },
  "にほんごをはなすことができます": {
    romanji: "nihongo wo hanasu koto ga dekimasu",
    translation: "I can speak Japanese (jeg kan snakke japansk)",
    level: 5, category: "compound"
  },
};

// normalize romaji for flexible answer matching
function normalizeRomaji(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")       // collapse whitespace
    .replace(/ou/g, "oo")       // accept ou/oo
    .replace(/uu/g, "uu")       // keep uu
    .replace(/\bha\b/g, "wa")   // は particle
    .replace(/\bhe\b/g, "e")    // へ particle
    .replace(/\bo\b/g, "wo");   // を particle (accept both)
}

// state
let currentLevel = 0; // 0 = all
let sentenceQueue = [];
let sentenceQueueIndex = 0;
let currentSentence = null;
let incorrectAttempts = 0;
let charsHidden = false;

// dom refs
const levelSelect = document.getElementById("level-select");
const charDisplay = document.getElementById("hiragana-character");
const transDisplay = document.getElementById("translation-display");
const answerInput = document.getElementById("answer-input");
const hintDisplay = document.getElementById("hint-display");
const nextBtn = document.getElementById("next-btn");
const showAnswerBtn = document.getElementById("show-answer-btn");
const hideCharsBtn = document.getElementById("hide-chars-btn");
const roundProgress = document.getElementById("round-progress");
const roundTotal = document.getElementById("round-total");
const sentenceCountDisplay = document.getElementById("sentence-count");

function updateHideButton() {
  if (charsHidden) {
    charDisplay.classList.add("chars-hidden");
    hideCharsBtn.textContent = t("show-chars");
    hideCharsBtn.classList.add("active-toggle");
  } else {
    charDisplay.classList.remove("chars-hidden");
    hideCharsBtn.textContent = t("hide-chars");
    hideCharsBtn.classList.remove("active-toggle");
  }
}

function buildQueue() {
  const entries = Object.entries(SentenceDictionary);
  const matching = currentLevel === 0
    ? entries
    : entries.filter(([, data]) => data.level === currentLevel);

  sentenceQueue = matching
    .map(([key, data]) => ({ key, ...data }))
    .sort(() => Math.random() - 0.5);
  sentenceQueueIndex = 0;

  const label = t("sentences-label");
  sentenceCountDisplay.textContent = matching.length > 0
    ? matching.length + " " + label
    : t("no-sentences-in-level");
  updateProgress();
}

function nextSentence() {
  if (sentenceQueue.length === 0) {
    charDisplay.textContent = "—";
    transDisplay.textContent = t("no-sentences-in-level");
    return;
  }

  if (sentenceQueueIndex >= sentenceQueue.length) {
    sentenceQueue.sort(() => Math.random() - 0.5);
    sentenceQueueIndex = 0;
  }

  currentSentence = sentenceQueue[sentenceQueueIndex++];
  charDisplay.textContent = currentSentence.key;
  transDisplay.textContent = getWordTranslation(currentSentence.translation);
  answerInput.value = "";
  if (!("ontouchstart" in window)) answerInput.focus();
  hintDisplay.classList.add("hidden");
  incorrectAttempts = 0;
  updateProgress();
}

function handleAnswer(input) {
  if (!input.trim() || !currentSentence) return;

  const userAnswer = normalizeRomaji(input);
  const correctAnswer = normalizeRomaji(currentSentence.romanji);
  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    if (typeof StreakManager !== "undefined") StreakManager.recordActivity();
    answerInput.classList.add("flash-correct");
    setTimeout(() => {
      answerInput.classList.remove("flash-correct");
      nextSentence();
    }, 300);
  } else {
    incorrectAttempts++;
    answerInput.classList.add("flash-incorrect");
    setTimeout(() => answerInput.classList.remove("flash-incorrect"), 400);
    var _ht = localStorage.getItem("hint-threshold") || "3";
    if (_ht !== "never" && incorrectAttempts >= parseInt(_ht, 10)) showHint();
    answerInput.value = "";
    answerInput.focus();
  }
}

function showHint() {
  if (!currentSentence) return;
  // show first word of the romaji
  var firstWord = currentSentence.romanji.split(" ")[0];
  hintDisplay.textContent = t("hint-prefix") + ' "' + firstWord + '"';
  hintDisplay.classList.remove("hidden");
}

function showAnswer() {
  if (!currentSentence) return;
  hintDisplay.textContent = t("answer-prefix") + " " + currentSentence.romanji;
  hintDisplay.classList.remove("hidden");
}

function updateProgress() {
  roundProgress.textContent = sentenceQueueIndex;
  roundTotal.textContent = sentenceQueue.length;
}

document.addEventListener("DOMContentLoaded", () => {
  // build level selector
  const allOpt = document.createElement("option");
  allOpt.value = "0";
  allOpt.textContent = t("level-all");
  allOpt.selected = true;
  levelSelect.appendChild(allOpt);

  for (let i = 1; i <= 5; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = t("level-" + i);
    levelSelect.appendChild(opt);
  }

  levelSelect.addEventListener("change", (e) => {
    currentLevel = parseInt(e.target.value);
    buildQueue();
    nextSentence();
  });

  nextBtn.addEventListener("click", nextSentence);
  showAnswerBtn.addEventListener("click", showAnswer);
  document.getElementById("speak-btn").addEventListener("click", () => {
    if (currentSentence) speakJapanese(currentSentence.key);
  });
  hideCharsBtn.addEventListener("click", () => {
    charsHidden = !charsHidden;
    updateHideButton();
  });

  answerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAnswer(answerInput.value);
    }
  });

  // auto-answer
  answerInput.addEventListener("input", () => {
    if (localStorage.getItem("auto-answer") !== "true") return;
    if (!currentSentence) return;
    const val = answerInput.value.trim().toLowerCase();
    if (!val) return;
    const answer = currentSentence.romanji.toLowerCase();
    if (val.length >= answer.length) {
      const normVal = normalizeRomaji(val);
      const normAns = normalizeRomaji(answer);
      if (normVal === normAns) {
        handleAnswer(answerInput.value);
      } else {
        incorrectAttempts++;
        answerInput.classList.add("flash-incorrect");
        setTimeout(() => answerInput.classList.remove("flash-incorrect"), 400);
        var _ht = localStorage.getItem("hint-threshold") || "3";
        if (_ht !== "never" && incorrectAttempts >= parseInt(_ht, 10)) showHint();
        answerInput.value = "";
        answerInput.focus();
      }
    }
  });

  buildQueue();
  nextSentence();
});
