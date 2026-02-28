// Convert any non-negative integer to Japanese (supports up to ~999 billion)
function convertToJapanese(n) {
  if (n === 0) return { character: 'れい', romanji: ['rei', 'zero', '0'] };

  const ones_h = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
  const ones_r = ['', 'ichi', 'ni', 'san', 'yon', 'go', 'roku', 'nana', 'hachi', 'kyuu'];
  // Irregular 百: 300=sanbyaku, 600=roppyaku, 800=happyaku
  const hyaku_h = ['', 'ひゃく', 'にひゃく', 'さんびゃく', 'よんひゃく', 'ごひゃく', 'ろっぴゃく', 'ななひゃく', 'はっぴゃく', 'きゅうひゃく'];
  const hyaku_r = ['', 'hyaku', 'nihyaku', 'sanbyaku', 'yonhyaku', 'gohyaku', 'roppyaku', 'nanahyaku', 'happyaku', 'kyuuhyaku'];
  // Irregular 千: 1000=sen (no いち), 3000=sanzen, 8000=hassen
  const sen_h = ['', 'せん', 'にせん', 'さんぜん', 'よんせん', 'ごせん', 'ろくせん', 'ななせん', 'はっせん', 'きゅうせん'];
  const sen_r = ['', 'sen', 'nisen', 'sanzen', 'yonsen', 'gosen', 'rokusen', 'nanasen', 'hassen', 'kyuusen'];

  function under10k(x) {
    if (x === 0) return { h: '', r: '' };
    const thou = Math.floor(x / 1000);
    const hund = Math.floor((x % 1000) / 100);
    const tens = Math.floor((x % 100) / 10);
    const ones = x % 10;
    let h = '', r = '';
    if (thou > 0) { h += sen_h[thou];   r += sen_r[thou]; }
    if (hund > 0) { h += hyaku_h[hund]; r += hyaku_r[hund]; }
    if      (tens === 1) { h += 'じゅう'; r += 'juu'; }
    else if (tens  >  1) { h += ones_h[tens] + 'じゅう'; r += ones_r[tens] + 'juu'; }
    if (ones > 0) { h += ones_h[ones]; r += ones_r[ones]; }
    return { h, r };
  }

  const oku  = Math.floor(n / 100000000);
  const man  = Math.floor((n % 100000000) / 10000);
  const rest = n % 10000;

  let h = '', r = '';
  if (oku  > 0) { const o = under10k(oku);  h += o.h + 'おく'; r += o.r + 'oku'; }
  if (man  > 0) { const m = under10k(man);  h += m.h + 'まん'; r += m.r + 'man'; }
  const rem = under10k(rest);
  h += rem.h;
  r += rem.r;

  const romanjiArr = [r, String(n)];
  if (n === 4) romanjiArr.splice(1, 0, 'shi');
  if (n === 7) romanjiArr.splice(1, 0, 'shichi');
  if (n === 9) romanjiArr.splice(1, 0, 'ku');

  return { character: h, romanji: romanjiArr };
}

/**
 * Marker resultat for en tegn-objekt.
 * Når et tegn er svart riktig minst én gang, blir det "mastered" permanent.
 * Feil øker feil-teller men fjerner ikke mastered (for å ta hensyn til feiltasting).
 */
function markCharacterResult(charObj, correct) {
    if (correct) {
        charObj.mastered = true;
        charObj.lastCorrectAt = Date.now();
        charObj.correctCount = (charObj.correctCount || 0) + 1;
    } else {
        charObj.incorrectCount = (charObj.incorrectCount || 0) + 1;
        charObj.lastIncorrectAt = Date.now();
        // Ikke fjern charObj.mastered her — vil la det være mestret dersom det noen gang var korrekt.
    }
}

// State
const QUEUE_LIMIT = 10000; // use shuffled queue for small ranges, random for large
let minNum = 0, maxNum = 9;
let queue = [];
let queueIndex = 0;
let currentEntry = null;
let incorrectAttempts = 0;
let recentNums = [];
let sessionCount = 0;

// DOM elements
const fromInput     = document.getElementById('from-input');
const toInput       = document.getElementById('to-input');
const rangeCount    = document.getElementById('range-count');
const charDisplay   = document.getElementById('hiragana-character');
const transDisplay  = document.getElementById('translation-display');
const answerInput   = document.getElementById('answer-input');
const hintDisplay   = document.getElementById('hint-display');
const nextBtn       = document.getElementById('next-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const roundProgress = document.getElementById('round-progress');
const roundTotal    = document.getElementById('round-total');

function adjustFontSize(text) {
  const len = text.length;
  let size;
  if      (len <=  2) size = '10rem';
  else if (len <=  4) size = '8rem';
  else if (len <=  6) size = '6rem';
  else if (len <= 10) size = '4rem';
  else if (len <= 15) size = '2.8rem';
  else if (len <= 22) size = '2rem';
  else if (len <= 30) size = '1.5rem';
  else if (len <= 45) size = '1rem';
  else                size = '0.75rem';
  charDisplay.style.fontSize = size;
}

function rangeSize() {
  return Math.max(0, maxNum - minNum + 1);
}

function updateRange() {
  minNum = parseInt(fromInput.value) || 0;
  maxNum = parseInt(toInput.value)   || 0;

  const count = rangeSize();

  if (count <= 0) {
    rangeCount.textContent = t('no-numbers-in-range');
    charDisplay.textContent = '—';
    charDisplay.style.fontSize = '';
    transDisplay.textContent = '';
    return;
  }

  rangeCount.textContent = `${count.toLocaleString()} ${count === 1 ? t('number-singular') : t('numbers-in-range')}`;

  if (count <= QUEUE_LIMIT) {
    queue = [];
    for (let i = minNum; i <= maxNum; i++) queue.push(i);
    queue.sort(() => Math.random() - 0.5);
  } else {
    queue = null;
  }
  queueIndex = 0;
  recentNums = [];
  sessionCount = 0;

  updateProgress();
  nextNumber();
}

function pickNext() {
  if (queue !== null) {
    if (queueIndex >= queue.length) {
      queue.sort(() => Math.random() - 0.5);
      queueIndex = 0;
    }
    return queue[queueIndex++];
  }
  // Large range: random, avoid recent 20
  const avoidLen = Math.min(20, Math.floor(rangeSize() / 2));
  let n, attempts = 0;
  do {
    n = Math.floor(Math.random() * rangeSize()) + minNum;
    attempts++;
  } while (recentNums.includes(n) && attempts < 30);
  recentNums.push(n);
  if (recentNums.length > avoidLen) recentNums.shift();
  return n;
}

function nextNumber() {
  if (rangeSize() <= 0) return;

  const n = pickNext();
  const entry = convertToJapanese(n);
  currentEntry = { ...entry, numValue: n };

  charDisplay.textContent = currentEntry.character;
  adjustFontSize(currentEntry.character);
  transDisplay.textContent = '';

  answerInput.value = '';
  const active = document.activeElement;
  if (active !== fromInput && active !== toInput) {
    answerInput.focus();
  }
  hintDisplay.classList.add('hidden');
  incorrectAttempts = 0;

  updateProgress();
}

function handleAnswer(input) {
  if (!input.trim() || !currentEntry) return;

  const isCorrect = currentEntry.romanji.some(
    r => r.toLowerCase() === input.trim().toLowerCase()
  );

  markCharacterResult(currentEntry, isCorrect);

  if (isCorrect) {
    sessionCount++;
    answerInput.classList.add('flash-correct');
    setTimeout(() => {
      answerInput.classList.remove('flash-correct');
      nextNumber();
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
  if (!currentEntry) return;
  hintDisplay.textContent = `${t('hint-prefix')} "${currentEntry.romanji[0][0]}"`;
  hintDisplay.classList.remove('hidden');
}

function showAnswer() {
  if (!currentEntry) return;
  hintDisplay.textContent = `${t('answer-prefix')} ${currentEntry.romanji[0]}`;
  hintDisplay.classList.remove('hidden');
}

function updateProgress() {
  if (queue !== null) {
    roundProgress.textContent = queueIndex;
    roundTotal.textContent = queue.length;
  } else {
    roundProgress.textContent = sessionCount;
    roundTotal.textContent = '∞';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedFrom = localStorage.getItem('tall-trainer-from');
  const savedTo   = localStorage.getItem('tall-trainer-to');
  if (savedFrom !== null) fromInput.value = savedFrom;
  if (savedTo   !== null) toInput.value   = savedTo;

  function onRangeChange() {
    localStorage.setItem('tall-trainer-from', fromInput.value);
    localStorage.setItem('tall-trainer-to',   toInput.value);
    updateRange();
  }

  fromInput.addEventListener('change', onRangeChange);
  toInput.addEventListener('change', onRangeChange);

  nextBtn.addEventListener('click', nextNumber);
  showAnswerBtn.addEventListener('click', showAnswer);
  answerInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleAnswer(answerInput.value);
  });

  updateRange();
});
