const WordDictionary = {
  // 2 tegn
  'あい':   { romanji: 'ai',      translation: 'love (kjærlighet)' },
  'いえ':   { romanji: 'ie',      translation: 'house (hus)' },
  'いぬ':   { romanji: 'inu',     translation: 'dog (hund)' },
  'うみ':   { romanji: 'umi',     translation: 'sea (hav)' },
  'みず':   { romanji: 'mizu',    translation: 'water (vann)' },
  'やま':   { romanji: 'yama',    translation: 'mountain (fjell)' },
  'ゆき':   { romanji: 'yuki',    translation: 'snow (snø)' },
  'そら':   { romanji: 'sora',    translation: 'sky (himmel)' },
  'くち':   { romanji: 'kuchi',   translation: 'mouth (munn)' },
  'はな':   { romanji: 'hana',    translation: 'flower / nose (blomst / nese)' },

  // 3 tegn (mange vanlige)
  'うえ':   { romanji: 'ue',      translation: 'above (over / oppe)' },
  'おと':   { romanji: 'oto',     translation: 'sound (lyd)' },
  'かお':   { romanji: 'kao',     translation: 'face (ansikt)' },
  'きた':   { romanji: 'kita',    translation: 'north (nord)' },
  'こえ':   { romanji: 'koe',     translation: 'voice (stemme)' },
  'さけ':   { romanji: 'sake',    translation: 'alcohol / salmon (alkohol / laks)' },
  'した':   { romanji: 'shita',   translation: 'below (under / nedenfor)' },
  'すし':   { romanji: 'sushi',   translation: 'sushi' },
  'たこ':   { romanji: 'tako',    translation: 'octopus / kite (blekksprut / drage)' },
  'ちち':   { romanji: 'chichi',  translation: 'father / milk (far / melk)' },
  'つき':   { romanji: 'tsuki',   translation: 'moon (måne)' },
  'てら':   { romanji: 'tera',    translation: 'temple (tempel)' },
  'とり':   { romanji: 'tori',    translation: 'bird (fugl)' },
  'なつ':   { romanji: 'natsu',   translation: 'summer (sommer)' },
  'にく':   { romanji: 'niku',    translation: 'meat (kjøtt)' },
  'ねこ':   { romanji: 'neko',    translation: 'cat (katt)' },
  'のみ':   { romanji: 'nomi',    translation: 'drink / flea (drikke / loppe)' },
  'ひと':   { romanji: 'hito',    translation: 'person' },
  'ふね':   { romanji: 'fune',    translation: 'ship / boat (skip / båt)' },
  'へや':   { romanji: 'heya',    translation: 'room (rom)' },
  'ほし':   { romanji: 'hoshi',   translation: 'star (stjerne)' },
  'まち':   { romanji: 'machi',   translation: 'town (by / tettsted)' },
  'むし':   { romanji: 'mushi',   translation: 'insect (insekt)' },
  'めし':   { romanji: 'meshi',   translation: 'meal / rice (måltid / ris)' },
  'もり':   { romanji: 'mori',    translation: 'forest (skog)' },
  'わに':   { romanji: 'wani',    translation: 'crocodile (krokodille)' },

  // 4 tegn
  'ありがとう': { romanji: 'arigatou', translation: 'thank you (takk)' },
  'おはよう':   { romanji: 'ohayou',   translation: 'good morning (god morgen)' },
  'こんばんは': { romanji: 'konbanwa', translation: 'good evening (god kveld)' },
  'さようなら': { romanji: 'sayounara', translation: 'goodbye (hadet)' },
  'たんじょうび': { romanji: 'tanjoubi', translation: 'birthday (bursdag)' },
  'しんぶん':   { romanji: 'shinbun',  translation: 'newspaper (avis)' },
  'でんしゃ':   { romanji: 'densha',   translation: 'train (tog)' },
  'じてんしゃ': { romanji: 'jitensha', translation: 'bicycle (sykkel)' },
  'きっさてん': { romanji: 'kissaten', translation: 'café (kafé)' },
  'びょういん': { romanji: 'byouin',   translation: 'hospital (sykehus)' },

  // flere 4- og 5-tegnsord
  'れいぞうこ': { romanji: 'reizouko', translation: 'refrigerator (kjøleskap)' },
  'でんわ':     { romanji: 'denwa',    translation: 'telephone (telefon)' },
  'こうえん':   { romanji: 'kouen',    translation: 'park' },
  'しょくどう': { romanji: 'shokudou', translation: 'cafeteria (kantine / spisested)' },
  'きょうしつ': { romanji: 'kyoushitsu', translation: 'classroom (klasserom)' },
  'せんせい':   { romanji: 'sensei',   translation: 'teacher (lærer)' },
  'がっこう':   { romanji: 'gakkou',   translation: 'school (skole)' },
  'かいしゃ':   { romanji: 'kaisha',   translation: 'company (selskap / firma)' },
  'しょうがつ': { romanji: 'shougatsu', translation: 'New Year (nyttår)' },

  // flere vanlige ord i ulike lengder
  'おんがく':   { romanji: 'ongaku',   translation: 'music (musikk)' },
  'えいが':     { romanji: 'eiga',     translation: 'film / movie (film)' },
  'ほん':       { romanji: 'hon',      translation: 'book (bok)' },
  'テレビ':     { romanji: 'terebi',   translation: 'television (tv)' },
  'くるま':     { romanji: 'kuruma',   translation: 'car (bil)' },
  'れんしゅう': { romanji: 'renshuu',  translation: 'practice (øvelse)' },
  'しごと':     { romanji: 'shigoto',  translation: 'work (jobb)' },
  'りょこう':   { romanji: 'ryokou',   translation: 'travel (reise)' },
  'せかい':     { romanji: 'sekai',    translation: 'world (verden)' },
  'かぞく':     { romanji: 'kazoku',   translation: 'family (familie)' },

  // mat-relaterte ord
  'ごはん':     { romanji: 'gohan',    translation: 'rice / meal (ris / måltid)' },
  'おちゃ':     { romanji: 'ocha',     translation: 'tea (te)' },
  'こうちゃ':   { romanji: 'koucha',   translation: 'black tea (sort te)' },
  'くだもの':   { romanji: 'kudamono', translation: 'fruit (frukt)' },
  'やさい':     { romanji: 'yasai',    translation: 'vegetables (grønnsaker)' },
  'にほんしょく': { romanji: 'nihonshoku', translation: 'Japanese food (japansk mat)' },

  // kroppen
  'あし':       { romanji: 'ashi',     translation: 'foot / leg (fot / ben)' },
  'て':         { romanji: 'te',       translation: 'hand (hånd)' },
  'め':         { romanji: 'me',       translation: 'eye (øye)' },
  'みみ':       { romanji: 'mimi',     translation: 'ear (øre)' },
  'あたま':     { romanji: 'atama',    translation: 'head (hode)' },

  // natur / tid
  'はれ':       { romanji: 'hare',     translation: 'sunny (solskinn)' },
  'あめ':       { romanji: 'ame',      translation: 'rain (regn)' },
  'きせつ':     { romanji: 'kisetsu',  translation: 'season (årstid)' },
  'ひ':         { romanji: 'hi',       translation: 'day / fire (dag / ild)' },

  // følelser / mennesker
  'かなしい':   { romanji: 'kanashii', translation: 'sad (trist)' },
  'うれしい':   { romanji: 'ureshii',  translation: 'happy (glad)' },
  'ともだち':   { romanji: 'tomodachi', translation: 'friend (venn)' },
  'かんじ':     { romanji: 'kanji',    translation: 'kanji (characters)' },

  // reise / steder
  'くうこう':   { romanji: 'kuukou',   translation: 'airport (flyplass)' },
  'えき':       { romanji: 'eki',      translation: 'station (stasjon)' },
  'みせ':       { romanji: 'mise',     translation: 'shop / store (butikk)' },

  // flere eksempler for variasjon
  'おかね':     { romanji: 'okane',    translation: 'money (penger)' },
  'てんき':     { romanji: 'tenki',    translation: 'weather (vær)' },
  'しゅくだい': { romanji: 'shukudai', translation: 'homework (lekser)' },
  'けいたい':   { romanji: 'keitai',   translation: 'mobile phone (mobil)' },
  'れきし':     { romanji: 'rekishi',  translation: 'history (historie)' },
  'びじゅつ':   { romanji: 'bijutsu',  translation: 'art (kunst)' },
  'げんき':     { romanji: 'genki',    translation: 'healthy / energetic (frisk / energisk)' },

  // reserve / flere mulige ord
  'しお':       { romanji: 'shio',     translation: 'salt' },
  'さくら':     { romanji: 'sakura',   translation: 'cherry blossom (kirsebærblomst)' },
  'にほん':     { romanji: 'nihon',    translation: 'Japan' },
  'とうきょう': { romanji: 'toukyou',  translation: 'Tokyo' },
  'おんせん':   { romanji: 'onsen',    translation: 'hot spring (varmt bad)' },
  'すいぞくかん': { romanji: 'suizokukan', translation: 'aquarium (akvarium)' },

  // Ekstra 2-tegns ord
  'かわ': { romanji: 'kawa',    translation: 'river (elv)' },
  'くも': { romanji: 'kumo',    translation: 'cloud (sky)' },
  'なみ': { romanji: 'nami',    translation: 'wave (bølge)' },
  'ほね': { romanji: 'hone',    translation: 'bone (bein)' },
  'みそ': { romanji: 'miso',    translation: 'miso' },
  'もも': { romanji: 'momo',    translation: 'peach (fersken)' },
  'かに': { romanji: 'kani',    translation: 'crab (krabbe)' },
  'うし': { romanji: 'ushi',    translation: 'cow (ku)' },
  'こい': { romanji: 'koi',     translation: 'carp (karpe)' },
  'はし': { romanji: 'hashi',   translation: 'chopsticks (spisepinner)' },
  'にわ': { romanji: 'niwa',    translation: 'garden (hage)' },
  'くさ': { romanji: 'kusa',    translation: 'grass (gress)' },
  'ふゆ': { romanji: 'fuyu',    translation: 'winter (vinter)' },
  'なか': { romanji: 'naka',    translation: 'middle (midten)' },
  'きり': { romanji: 'kiri',    translation: 'fog (tåke)' },
  'つる': { romanji: 'tsuru',   translation: 'crane (trane)' },
  'さか': { romanji: 'saka',    translation: 'slope / hill (bakke)' },
  'ゆび': { romanji: 'yubi',    translation: 'finger' },
  'いと': { romanji: 'ito',     translation: 'thread (tråd)' },
  'にし': { romanji: 'nishi',   translation: 'west (vest)' },
  'らく': { romanji: 'raku',    translation: 'easy (lett)' },
  'ゆめ': { romanji: 'yume',    translation: 'dream (drøm)' },
  'よる': { romanji: 'yoru',    translation: 'night (natt)' },
  'まめ': { romanji: 'mame',    translation: 'bean (bønne)' },
  'いわ': { romanji: 'iwa',     translation: 'rock / cliff (klippe)' },
  'むら': { romanji: 'mura',    translation: 'village (landsby)' },
  'すな': { romanji: 'suna',    translation: 'sand' },
  'いけ': { romanji: 'ike',     translation: 'pond (dam)' },
  'かべ': { romanji: 'kabe',    translation: 'wall (vegg)' },
  'うで': { romanji: 'ude',     translation: 'arm' },
  'ひも': { romanji: 'himo',    translation: 'cord / string (snor)' },
  'くび': { romanji: 'kubi',    translation: 'neck (hals)' },

  // Ekstra 3-tegns ord
  'うさぎ': { romanji: 'usagi',    translation: 'rabbit (kanin)' },
  'いちご': { romanji: 'ichigo',   translation: 'strawberry (jordbær)' },
  'かえる': { romanji: 'kaeru',    translation: 'frog (frosk)' },
  'こども': { romanji: 'kodomo',   translation: 'child (barn)' },
  'はなし': { romanji: 'hanashi',  translation: 'story (fortelling)' },
  'まつり': { romanji: 'matsuri',  translation: 'festival' },
  'みかん': { romanji: 'mikan',    translation: 'mandarin / tangerine (mandarin)' },
  'ほたる': { romanji: 'hotaru',   translation: 'firefly (ildflue)' },
  'まくら': { romanji: 'makura',   translation: 'pillow (pute)' },
  'りんご': { romanji: 'ringo',    translation: 'apple (eple)' },
  'わかめ': { romanji: 'wakame',   translation: 'seaweed (tang)' },
  'くじら': { romanji: 'kujira',   translation: 'whale (hval)' },
  'ことば': { romanji: 'kotoba',   translation: 'word / language (ord / språk)' },
  'つばさ': { romanji: 'tsubasa',  translation: 'wings (vinger)' },
  'とかげ': { romanji: 'tokage',   translation: 'lizard (øgle)' },
  'はなび': { romanji: 'hanabi',   translation: 'fireworks (fyrverkeri)' },
  'ひかり': { romanji: 'hikari',   translation: 'light (lys)' },
  'ふくろ': { romanji: 'fukuro',   translation: 'bag (pose)' },
  'めがね': { romanji: 'megane',   translation: 'glasses (briller)' },
  'ゆびわ': { romanji: 'yubiwa',   translation: 'ring' },
  'むかし': { romanji: 'mukashi',  translation: 'old times / the past (fortiden)' },
  'みなみ': { romanji: 'minami',   translation: 'south (sør)' },
  'ひるね': { romanji: 'hirune',   translation: 'nap (middagslur)' },
  'けむり': { romanji: 'kemuri',   translation: 'smoke (røyk)' },
  'かがみ': { romanji: 'kagami',   translation: 'mirror (speil)' },
  'きつね': { romanji: 'kitsune',  translation: 'fox (rev)' },
  'しずか': { romanji: 'shizuka',  translation: 'quiet (stille)' },
  'さんぽ': { romanji: 'sanpo',    translation: 'walk / stroll (spasertur)' },
  'まんが': { romanji: 'manga',    translation: 'manga / comic (tegneserie)' },
  'ひつじ': { romanji: 'hitsuji',  translation: 'sheep (sau)' },
  'なかま': { romanji: 'nakama',   translation: 'companion (kamerat)' },
  'あおい': { romanji: 'aoi',      translation: 'blue (blå)' },
  'わかい': { romanji: 'wakai',    translation: 'young (ung)' },
  'いちば': { romanji: 'ichiba',   translation: 'market (marked)' },
  'うなぎ': { romanji: 'unagi',    translation: 'eel (ål)' },

  // Ekstra 4-tegns ord
  'おにぎり': { romanji: 'onigiri',    translation: 'rice ball (risball)' },
  'のりもの': { romanji: 'norimono',   translation: 'vehicle / transport (transportmiddel)' },
  'にわとり': { romanji: 'niwatori',   translation: 'chicken (kylling)' },
  'てぶくろ': { romanji: 'tebukuro',   translation: 'gloves (hansker)' },
  'もんだい': { romanji: 'mondai',     translation: 'problem' },
  'ひこうき': { romanji: 'hikouki',    translation: 'airplane (fly)' },
  'たいよう': { romanji: 'taiyou',     translation: 'sun (sol)' },
  'かいもの': { romanji: 'kaimono',    translation: 'shopping' },
  'えんぴつ': { romanji: 'enpitsu',    translation: 'pencil (blyant)' },
  'どうぶつ': { romanji: 'doubutsu',   translation: 'animal (dyr)' },
  'たてもの': { romanji: 'tatemono',   translation: 'building (bygning)' },
  'まいにち': { romanji: 'mainichi',   translation: 'every day (hver dag)' },
  'ちかてつ': { romanji: 'chikatetsu', translation: 'subway (T-bane)' },
  'べんとう': { romanji: 'bentou',     translation: 'lunch box (matpakke)' },
  'やきそば': { romanji: 'yakisoba',   translation: 'yakisoba' },
  'にほんご': { romanji: 'nihongo',    translation: 'Japanese language (japansk)' },
  'おもちゃ': { romanji: 'omocha',     translation: 'toy (leketøy)' },
  'おとうと': { romanji: 'otouto',     translation: 'younger brother (yngre bror)' },
  'はんたい': { romanji: 'hantai',     translation: 'opposite (motsatt)' },
  'こうこう': { romanji: 'koukou',     translation: 'high school (videregående)' },
  'おまつり': { romanji: 'omatsuri',   translation: 'festival' },

  // Ekstra 5-tegns ord
  'ぬいぐるみ': { romanji: 'nuigurumi',  translation: 'stuffed animal (kosedyr)' },
  'べんきょう': { romanji: 'benkyou',    translation: 'study (studere)' },
  'としょかん': { romanji: 'toshokan',   translation: 'library (bibliotek)' },
  'じどうしゃ': { romanji: 'jidousha',   translation: 'car (bil)' },
  'にんぎょう': { romanji: 'ningyou',    translation: 'doll (dukke)' },
  'おかあさん': { romanji: 'okaasan',    translation: 'mother (mor)' },
  'おとうさん': { romanji: 'otousan',    translation: 'father (far)' },
  'おにいさん': { romanji: 'oniisan',    translation: 'older brother (eldre bror)' },
  'あさごはん': { romanji: 'asagohan',   translation: 'breakfast (frokost)' },
  'ひるごはん': { romanji: 'hirugohan',  translation: 'lunch (lunsj)' },
  'よるごはん': { romanji: 'yorugohan',  translation: 'dinner (middag)' },
  'ちゅうごく': { romanji: 'chuugoku',   translation: 'China (Kina)' },

  // 6-tegns ord
  'しんかんせん': { romanji: 'shinkansen',     translation: 'bullet train (hurtigtog)' },
  'うんどうかい': { romanji: 'undoukai',        translation: 'sports day (idrettsdag)' },
  'はくぶつかん': { romanji: 'hakubutsukan',    translation: 'museum' },
  'むかしばなし': { romanji: 'mukashibanashi',  translation: 'folk tale / fairy tale (eventyr)' },
  'こうこうせい': { romanji: 'koukousei',       translation: 'high school student (videregående-elev)' },

  // 7-tegns ord
  'しょうがっこう': { romanji: 'shougakkou',     translation: 'elementary school (barneskole)' },
  'ちゅうがっこう': { romanji: 'chuugakkou',     translation: 'middle school (ungdomsskole)' },
  'にほんりょうり': { romanji: 'nihonryouri',    translation: 'Japanese cuisine (japansk mat)' },
  'どうぞよろしく': { romanji: 'douzoyoroshiku', translation: 'nice to meet you (hyggelig å møte deg)' },

  // 8-tegns ord
  'こうこうがっこう': { romanji: 'koukougakkou',  translation: 'high school (videregående skole)' },
  'どうもありがとう': { romanji: 'doumoarigatou', translation: 'thank you very much (tusen takk)' },

  // 9-tegns ord
  'おはようございます': { romanji: 'ohayougozaimasu',   translation: 'good morning, formal (god morgen (høflig))' },

  // 10-tegns ord
  'ありがとうございます': { romanji: 'arigatougozaimasu', translation: 'thank you very much, formal (tusen takk (høflig))' },
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
