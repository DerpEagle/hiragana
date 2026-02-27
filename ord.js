const WordDictionary = {
  // 2 tegn
  'あい':   { romanji: 'ai',      translation: 'kjærlighet' },
  'いえ':   { romanji: 'ie',      translation: 'hus' },
  'いぬ':   { romanji: 'inu',     translation: 'hund' },
  'うみ':   { romanji: 'umi',     translation: 'hav' },
  'みず':   { romanji: 'mizu',    translation: 'vann' },
  'やま':   { romanji: 'yama',    translation: 'fjell' },
  'ゆき':   { romanji: 'yuki',    translation: 'snø' },
  'そら':   { romanji: 'sora',    translation: 'himmel' },
  'くち':   { romanji: 'kuchi',   translation: 'munn' },
  'はな':   { romanji: 'hana',    translation: 'blomst / nese' },

  // 3 tegn (mange vanlige)
  'うえ':   { romanji: 'ue',      translation: 'over / oppe' },
  'おと':   { romanji: 'oto',     translation: 'lyd' },
  'かお':   { romanji: 'kao',     translation: 'ansikt' },
  'きた':   { romanji: 'kita',    translation: 'nord' },
  'こえ':   { romanji: 'koe',     translation: 'stemme' },
  'さけ':   { romanji: 'sake',    translation: 'alkohol / laks' },
  'した':   { romanji: 'shita',   translation: 'under / nedenfor' },
  'すし':   { romanji: 'sushi',   translation: 'sushi' },
  'たこ':   { romanji: 'tako',    translation: 'blekksprut / drage' },
  'ちち':   { romanji: 'chichi',  translation: 'far / melk' },
  'つき':   { romanji: 'tsuki',   translation: 'måne' },
  'てら':   { romanji: 'tera',    translation: 'tempel' },
  'とり':   { romanji: 'tori',    translation: 'fugl' },
  'なつ':   { romanji: 'natsu',   translation: 'sommer' },
  'にく':   { romanji: 'niku',    translation: 'kjøtt' },
  'ねこ':   { romanji: 'neko',    translation: 'katt' },
  'のみ':   { romanji: 'nomi',    translation: 'drikke / loppe' },
  'ひと':   { romanji: 'hito',    translation: 'person' },
  'ふね':   { romanji: 'fune',    translation: 'skip / båt' },
  'へや':   { romanji: 'heya',    translation: 'rom' },
  'ほし':   { romanji: 'hoshi',   translation: 'stjerne' },
  'まち':   { romanji: 'machi',   translation: 'by / tettsted' },
  'むし':   { romanji: 'mushi',   translation: 'insekt' },
  'めし':   { romanji: 'meshi',   translation: 'måltid / ris' },
  'もり':   { romanji: 'mori',    translation: 'skog' },
  'わに':   { romanji: 'wani',    translation: 'krokodille' },

  // 4 tegn
  'ありがとう': { romanji: 'arigatou', translation: 'takk' },
  'おはよう':   { romanji: 'ohayou',   translation: 'god morgen' },
  'こんばんは': { romanji: 'konbanwa', translation: 'god kveld' },
  'さようなら': { romanji: 'sayounara', translation: 'hadet' },
  'たんじょうび': { romanji: 'tanjoubi', translation: 'bursdag' }, // lengre, men OK om valgt lengde tillater
  'しんぶん':   { romanji: 'shinbun',  translation: 'avis' },
  'でんしゃ':   { romanji: 'densha',   translation: 'tog' },
  'じてんしゃ': { romanji: 'jitensha', translation: 'sykkel' },
  'きっさてん': { romanji: 'kissaten', translation: 'kafé' },
  'びょういん': { romanji: 'byouin',   translation: 'sykehus' },

  // flere 4- og 5-tegnsord
  'れいぞうこ': { romanji: 'reizouko', translation: 'kjøleskap' },
  'でんわ':     { romanji: 'denwa',    translation: 'telefon' },
  'こうえん':   { romanji: 'kouen',    translation: 'park' },
  'しょくどう': { romanji: 'shokudou', translation: 'kantine / spisested' },
  'きょうしつ': { romanji: 'kyoushitsu', translation: 'klasserom' },
  'せんせい':   { romanji: 'sensei',   translation: 'lærer' },
  'がっこう':   { romanji: 'gakkou',   translation: 'skole' },
  'かいしゃ':   { romanji: 'kaisha',   translation: 'selskap / firma' },
  'しょうがつ': { romanji: 'shougatsu', translation: 'nyttår' },

  // flere vanlige ord i ulike lengder
  'おんがく':   { romanji: 'ongaku',   translation: 'musikk' },
  'えいが':     { romanji: 'eiga',     translation: 'film' },
  'ほん':       { romanji: 'hon',      translation: 'bok' },
  'テレビ':     { romanji: 'terebi',   translation: 'tv' },
  'くるま':     { romanji: 'kuruma',   translation: 'bil' },
  'れんしゅう': { romanji: 'renshuu',  translation: 'øvelse' },
  'しごと':     { romanji: 'shigoto',  translation: 'jobb' },
  'りょこう':   { romanji: 'ryokou',   translation: 'reise' },
  'せかい':     { romanji: 'sekai',    translation: 'verden' },
  'かぞく':     { romanji: 'kazoku',   translation: 'familie' },

  // mat-relaterte ord
  'ごはん':     { romanji: 'gohan',    translation: 'ris / måltid' },
  'おちゃ':     { romanji: 'ocha',     translation: 'te' },
  'こうちゃ':   { romanji: 'koucha',   translation: 'sort te' },
  'くだもの':   { romanji: 'kudamono', translation: 'frukt' },
  'やさい':     { romanji: 'yasai',    translation: 'grønnsaker' },
  'にほんしょく': { romanji: 'nihonshoku', translation: 'japansk mat' },

  // kroppen
  'あし':       { romanji: 'ashi',     translation: 'fot / ben' },
  'て':         { romanji: 'te',       translation: 'hånd' },
  'め':         { romanji: 'me',       translation: 'øye' },
  'みみ':       { romanji: 'mimi',     translation: 'øre' },
  'あたま':     { romanji: 'atama',    translation: 'hode' },

  // natur / tid
  'はれ':       { romanji: 'hare',     translation: 'solskinn' },
  'あめ':       { romanji: 'ame',      translation: 'regn' },
  'きせつ':     { romanji: 'kisetsu',  translation: 'årstid' },
  'つき':       { romanji: 'tsuki',    translation: 'måne' },
  'ひ':         { romanji: 'hi',       translation: 'dag / ild' },

  // følelser / mennesker
  'かなしい':   { romanji: 'kanashii', translation: 'trist' },
  'うれしい':   { romanji: 'ureshii',  translation: 'glad' },
  'ともだち':   { romanji: 'tomodachi',translation: 'venn' },
  'かんじ':     { romanji: 'kanji',    translation: 'kanji (tegn)' },

  // reise / steder
  'くうこう':   { romanji: 'kuukou',   translation: 'flyplass' },
  'えき':       { romanji: 'eki',      translation: 'stasjon' },
  'みせ':       { romanji: 'mise',     translation: 'butikk' },

  // flere eksempler for variasjon
  'おかね':     { romanji: 'okane',    translation: 'penger' },
  'てんき':     { romanji: 'tenki',    translation: 'vær' },
  'しゅくだい': { romanji: 'shukudai', translation: 'lekser' },
  'けいたい':   { romanji: 'keitai',   translation: 'mobil' },
  'れきし':     { romanji: 'rekishi',  translation: 'historie' },
  'びじゅつ':   { romanji: 'bijutsu',  translation: 'kunst' },
  'げんき':     { romanji: 'genki',    translation: 'frisk / energisk' },

  // reserve / flere mulige ord — du kan legge til enda flere her
  'しお':       { romanji: 'shio',     translation: 'salt' },
  'さくら':     { romanji: 'sakura',   translation: 'kirsebærblomst' },
  'にほん':     { romanji: 'nihon',    translation: 'Japan' },
  'とうきょう': { romanji: 'toukyou',  translation: 'Tokyo' },
  'おんせん':   { romanji: 'onsen',    translation: 'varmt bad' },
  'すいぞくかん': { romanji: 'suizokukan', translation: 'akvarium' }
};

// State
let characterCount = 2;
let wordQueue = [];
let wordQueueIndex = 0;
let currentWord = null;
let incorrectAttempts = 0;

// DOM elements
const charCountSelect  = document.getElementById('char-count');
const charDisplay      = document.getElementById('hiragana-character');
const transDisplay     = document.getElementById('translation-display');
const answerInput      = document.getElementById('answer-input');
const hintDisplay      = document.getElementById('hint-display');
const nextBtn          = document.getElementById('next-btn');
const showAnswerBtn    = document.getElementById('show-answer-btn');
const roundProgress    = document.getElementById('round-progress');
const roundTotal       = document.getElementById('round-total');
const wordCountDisplay = document.getElementById('word-count');

function buildQueue() {
  // inkluder alle ord med nøyaktig karakterCount (bruker codepoint-telling)
  const matching = Object.keys(WordDictionary).filter(w => [...w].length === characterCount);
  wordQueue = [...matching].sort(() => Math.random() - 0.5);
  wordQueueIndex = 0;
  wordCountDisplay.textContent = matching.length > 0
    ? `${matching.length} ord`
    : 'Ingen ord med dette antallet';
  updateProgress();
}

function nextWord() {
  if (wordQueue.length === 0) {
    charDisplay.textContent = '—';
    transDisplay.textContent = `Ingen ord med ${characterCount} tegn`;
    return;
  }

  if (wordQueueIndex >= wordQueue.length) {
    wordQueue.sort(() => Math.random() - 0.5);
    wordQueueIndex = 0;
  }

  const word = wordQueue[wordQueueIndex++];
  const entry = WordDictionary[word];
  currentWord = { word, romanji: entry.romanji, translation: entry.translation };

  charDisplay.textContent = word;
  transDisplay.textContent = entry.translation;
  answerInput.value = '';
  answerInput.focus();
  hintDisplay.classList.add('hidden');
  incorrectAttempts = 0;
  updateProgress();
}

function handleAnswer(input) {
  if (!input.trim() || !currentWord) return;

  const isCorrect = input.trim().toLowerCase() === currentWord.romanji.toLowerCase();

  if (isCorrect) {
    answerInput.classList.add('flash-correct');
    setTimeout(() => {
      answerInput.classList.remove('flash-correct');
      nextWord();
    }, 300);
  } else {
    incorrectAttempts++;
    answerInput.classList.add('flash-incorrect');
    setTimeout(() => answerInput.classList.remove('flash-incorrect'), 400);
    if (incorrectAttempts >= 3) showHint();
    answerInput.value = '';
    answerInput.focus();
  }
}

function showHint() {
  if (!currentWord) return;
  hintDisplay.textContent = `Hint: Begynner med "${currentWord.romanji[0]}"`;
  hintDisplay.classList.remove('hidden');
}

function showAnswer() {
  if (!currentWord) return;
  hintDisplay.textContent = `Svar: ${currentWord.romanji}`;
  hintDisplay.classList.remove('hidden');
}

function updateProgress() {
  roundProgress.textContent = wordQueueIndex;
  roundTotal.textContent = wordQueue.length;
}

document.addEventListener('DOMContentLoaded', () => {
  charCountSelect.addEventListener('change', e => {
    characterCount = parseInt(e.target.value);
    buildQueue();
    nextWord();
  });

  nextBtn.addEventListener('click', nextWord);
  showAnswerBtn.addEventListener('click', showAnswer);
  answerInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleAnswer(answerInput.value);
  });

  buildQueue();
  nextWord();
});