const HiraganaData = {
  vowels: [
    { character: "あ", romanji: ["a"] },
    { character: "い", romanji: ["i"] },
    { character: "う", romanji: ["u"] },
    { character: "え", romanji: ["e"] },
    { character: "お", romanji: ["o"] },
  ],
  ka: [
    { character: "か", romanji: ["ka"] },
    { character: "き", romanji: ["ki"] },
    { character: "く", romanji: ["ku"] },
    { character: "け", romanji: ["ke"] },
    { character: "こ", romanji: ["ko"] },
  ],
  sa: [
    { character: "さ", romanji: ["sa"] },
    { character: "し", romanji: ["shi"] },
    { character: "す", romanji: ["su"] },
    { character: "せ", romanji: ["se"] },
    { character: "そ", romanji: ["so"] },
  ],
  ta: [
    { character: "た", romanji: ["ta"] },
    { character: "ち", romanji: ["chi"] },
    { character: "つ", romanji: ["tsu"] },
    { character: "て", romanji: ["te"] },
    { character: "と", romanji: ["to"] },
  ],
  na: [
    { character: "な", romanji: ["na"] },
    { character: "に", romanji: ["ni"] },
    { character: "ぬ", romanji: ["nu"] },
    { character: "ね", romanji: ["ne"] },
    { character: "の", romanji: ["no"] },
  ],
  ha: [
    { character: "は", romanji: ["ha"] },
    { character: "ひ", romanji: ["hi"] },
    { character: "ふ", romanji: ["fu"] },
    { character: "へ", romanji: ["he"] },
    { character: "ほ", romanji: ["ho"] },
  ],
  ma: [
    { character: "ま", romanji: ["ma"] },
    { character: "み", romanji: ["mi"] },
    { character: "む", romanji: ["mu"] },
    { character: "め", romanji: ["me"] },
    { character: "も", romanji: ["mo"] },
  ],
  ya: [
    { character: "や", romanji: ["ya"] },
    { character: "ゆ", romanji: ["yu"] },
    { character: "よ", romanji: ["yo"] },
  ],
  ra: [
    { character: "ら", romanji: ["ra"] },
    { character: "り", romanji: ["ri"] },
    { character: "る", romanji: ["ru"] },
    { character: "れ", romanji: ["re"] },
    { character: "ろ", romanji: ["ro"] },
  ],
  wa: [
    { character: "わ", romanji: ["wa"] },
    { character: "を", romanji: ["wo", "o"] },
  ],
  n: [{ character: "ん", romanji: ["n"] }],
  // Numbers 0-9
  numbers_0_9: [
    { character: "れい", romanji: ["rei", "0"], translation: "0" },
    { character: "いち", romanji: ["ichi", "1"], translation: "1" },
    { character: "に", romanji: ["ni", "2"], translation: "2" },
    { character: "さん", romanji: ["san", "3"], translation: "3" },
    { character: "よん", romanji: ["yon", "shi", "4"], translation: "4" },
    { character: "ご", romanji: ["go", "5"], translation: "5" },
    { character: "ろく", romanji: ["roku", "6"], translation: "6" },
    { character: "なな", romanji: ["nana", "shichi", "7"], translation: "7" },
    { character: "はち", romanji: ["hachi", "8"], translation: "8" },
    { character: "きゅう", romanji: ["kyuu", "ku", "9"], translation: "9" },
  ],
  // Numbers 10-19
  numbers_10_19: [
    { character: "じゅう", romanji: ["juu", "10"], translation: "10" },
    { character: "じゅういち", romanji: ["juuichi", "11"], translation: "11" },
    { character: "じゅうに", romanji: ["juuni", "12"], translation: "12" },
    { character: "じゅうさん", romanji: ["juusan", "13"], translation: "13" },
    { character: "じゅうよん", romanji: ["juuyon", "14"], translation: "14" },
    { character: "じゅうご", romanji: ["juugo", "15"], translation: "15" },
    { character: "じゅうろく", romanji: ["juuroku", "16"], translation: "16" },
    { character: "じゅうなな", romanji: ["juunana", "17"], translation: "17" },
    { character: "じゅうはち", romanji: ["juuhachi", "18"], translation: "18" },
    {
      character: "じゅうきゅう",
      romanji: ["juukyuu", "19"],
      translation: "19",
    },
  ],
  // Numbers 20-29
  numbers_20_29: [
    { character: "にじゅう", romanji: ["nijuu", "20"], translation: "20" },
    {
      character: "にじゅういち",
      romanji: ["nijuuichi", "21"],
      translation: "21",
    },
    { character: "にじゅうに", romanji: ["nijuuni", "22"], translation: "22" },
    {
      character: "にじゅうさん",
      romanji: ["nijuusan", "23"],
      translation: "23",
    },
    {
      character: "にじゅうよん",
      romanji: ["nijuuyon", "24"],
      translation: "24",
    },
    { character: "にじゅうご", romanji: ["nijuugo", "25"], translation: "25" },
    {
      character: "にじゅうろく",
      romanji: ["nijuuroku", "26"],
      translation: "26",
    },
    {
      character: "にじゅうなな",
      romanji: ["nijuunana", "27"],
      translation: "27",
    },
    {
      character: "にじゅうはち",
      romanji: ["nijuuhachi", "28"],
      translation: "28",
    },
    {
      character: "にじゅうきゅう",
      romanji: ["nijuukyuu", "29"],
      translation: "29",
    },
  ],
  numbers_30_39: [
    { character: "さんじゅう", romanji: ["sanjuu", "30"], translation: "30" },
    {
      character: "さんじゅういち",
      romanji: ["sanjuuichi", "31"],
      translation: "31",
    },
    {
      character: "さんじゅうに",
      romanji: ["sanjuuni", "32"],
      translation: "32",
    },
    {
      character: "さんじゅうさん",
      romanji: ["sanjuusan", "33"],
      translation: "33",
    },
    {
      character: "さんじゅうよん",
      romanji: ["sanjuuyon", "34"],
      translation: "34",
    },
    {
      character: "さんじゅうご",
      romanji: ["sanjuugo", "35"],
      translation: "35",
    },
    {
      character: "さんじゅうろく",
      romanji: ["sanjuuroku", "36"],
      translation: "36",
    },
    {
      character: "さんじゅうなな",
      romanji: ["sanjuunana", "37"],
      translation: "37",
    },
    {
      character: "さんじゅうはち",
      romanji: ["sanjuuhachi", "38"],
      translation: "38",
    },
    {
      character: "さんじゅうきゅう",
      romanji: ["sanjuukyuu", "39"],
      translation: "39",
    },
  ],
  numbers_40_49: [
    { character: "よんじゅう", romanji: ["yonjuu", "40"], translation: "40" },
    {
      character: "よんじゅういち",
      romanji: ["yonjuuichi", "41"],
      translation: "41",
    },
    {
      character: "よんじゅうに",
      romanji: ["yonjuuni", "42"],
      translation: "42",
    },
    {
      character: "よんじゅうさん",
      romanji: ["yonjuusan", "43"],
      translation: "43",
    },
    {
      character: "よんじゅうよん",
      romanji: ["yonjuuyon", "44"],
      translation: "44",
    },
    {
      character: "よんじゅうご",
      romanji: ["yonjuugo", "45"],
      translation: "45",
    },
    {
      character: "よんじゅうろく",
      romanji: ["yonjuuroku", "46"],
      translation: "46",
    },
    {
      character: "よんじゅうなな",
      romanji: ["yonjuunana", "47"],
      translation: "47",
    },
    {
      character: "よんじゅうはち",
      romanji: ["yonjuuhachi", "48"],
      translation: "48",
    },
    {
      character: "よんじゅうきゅう",
      romanji: ["yonjuukyuu", "49"],
      translation: "49",
    },
  ],
  numbers_50_59: [
    { character: "ごじゅう", romanji: ["gojuu", "50"], translation: "50" },
    {
      character: "ごじゅういち",
      romanji: ["gojuuichi", "51"],
      translation: "51",
    },
    { character: "ごじゅうに", romanji: ["gojuuni", "52"], translation: "52" },
    {
      character: "ごじゅうさん",
      romanji: ["gojuusan", "53"],
      translation: "53",
    },
    {
      character: "ごじゅうよん",
      romanji: ["gojuuyon", "54"],
      translation: "54",
    },
    { character: "ごじゅうご", romanji: ["gojuugo", "55"], translation: "55" },
    {
      character: "ごじゅうろく",
      romanji: ["gojuuroku", "56"],
      translation: "56",
    },
    {
      character: "ごじゅうなな",
      romanji: ["gojuunana", "57"],
      translation: "57",
    },
    {
      character: "ごじゅうはち",
      romanji: ["gojuuhachi", "58"],
      translation: "58",
    },
    {
      character: "ごじゅうきゅう",
      romanji: ["gojuukyuu", "59"],
      translation: "59",
    },
  ],
  numbers_60_69: [
    { character: "ろくじゅう", romanji: ["rokujuu", "60"], translation: "60" },
    {
      character: "ろくじゅういち",
      romanji: ["rokujuuichi", "61"],
      translation: "61",
    },
    {
      character: "ろくじゅうに",
      romanji: ["rokujuuni", "62"],
      translation: "62",
    },
    {
      character: "ろくじゅうさん",
      romanji: ["rokujuusan", "63"],
      translation: "63",
    },
    {
      character: "ろくじゅうよん",
      romanji: ["rokujuuyon", "64"],
      translation: "64",
    },
    {
      character: "ろくじゅうご",
      romanji: ["rokujuugo", "65"],
      translation: "65",
    },
    {
      character: "ろくじゅうろく",
      romanji: ["rokujuuroku", "66"],
      translation: "66",
    },
    {
      character: "ろくじゅうなな",
      romanji: ["rokujuunana", "67"],
      translation: "67",
    },
    {
      character: "ろくじゅうはち",
      romanji: ["rokujuuhachi", "68"],
      translation: "68",
    },
    {
      character: "ろくじゅうきゅう",
      romanji: ["rokujuukyuu", "69"],
      translation: "69",
    },
  ],
  numbers_70_79: [
    { character: "ななじゅう", romanji: ["nanajuu", "70"], translation: "70" },
    {
      character: "ななじゅういち",
      romanji: ["nanajuuichi", "71"],
      translation: "71",
    },
    {
      character: "ななじゅうに",
      romanji: ["nanajuuni", "72"],
      translation: "72",
    },
    {
      character: "ななじゅうさん",
      romanji: ["nanajuusan", "73"],
      translation: "73",
    },
    {
      character: "ななじゅうよん",
      romanji: ["nanajuuyon", "74"],
      translation: "74",
    },
    {
      character: "ななじゅうご",
      romanji: ["nanajuugo", "75"],
      translation: "75",
    },
    {
      character: "ななじゅうろく",
      romanji: ["nanajuuroku", "76"],
      translation: "76",
    },
    {
      character: "ななじゅうなな",
      romanji: ["nanajuunana", "77"],
      translation: "77",
    },
    {
      character: "ななじゅうはち",
      romanji: ["nanajuuhachi", "78"],
      translation: "78",
    },
    {
      character: "ななじゅうきゅう",
      romanji: ["nanajuukyuu", "79"],
      translation: "79",
    },
  ],
  numbers_80_89: [
    { character: "はちじゅう", romanji: ["hachijuu", "80"], translation: "80" },
    {
      character: "はちじゅういち",
      romanji: ["hachijuuichi", "81"],
      translation: "81",
    },
    {
      character: "はちじゅうに",
      romanji: ["hachijuuni", "82"],
      translation: "82",
    },
    {
      character: "はちじゅうさん",
      romanji: ["hachijuusan", "83"],
      translation: "83",
    },
    {
      character: "はちじゅうよん",
      romanji: ["hachijuuyon", "84"],
      translation: "84",
    },
    {
      character: "はちじゅうご",
      romanji: ["hachijuugo", "85"],
      translation: "85",
    },
    {
      character: "はちじゅうろく",
      romanji: ["hachijuuroku", "86"],
      translation: "86",
    },
    {
      character: "はちじゅうなな",
      romanji: ["hachijuunana", "87"],
      translation: "87",
    },
    {
      character: "はちじゅうはち",
      romanji: ["hachijuuhachi", "88"],
      translation: "88",
    },
    {
      character: "はちじゅうきゅう",
      romanji: ["hachijuukyuu", "89"],
      translation: "89",
    },
  ],
  numbers_90_99: [
    {
      character: "きゅうじゅう",
      romanji: ["kyuujuu", "90"],
      translation: "90",
    },
    {
      character: "きゅうじゅういち",
      romanji: ["kyuujuuichi", "91"],
      translation: "91",
    },
    {
      character: "きゅうじゅうに",
      romanji: ["kyuujuuni", "92"],
      translation: "92",
    },
    {
      character: "きゅうじゅうさん",
      romanji: ["kyuujuusan", "93"],
      translation: "93",
    },
    {
      character: "きゅうじゅうよん",
      romanji: ["kyuujuuyon", "94"],
      translation: "94",
    },
    {
      character: "きゅうじゅうご",
      romanji: ["kyuujuugo", "95"],
      translation: "95",
    },
    {
      character: "きゅうじゅうろく",
      romanji: ["kyuujuuroku", "96"],
      translation: "96",
    },
    {
      character: "きゅうじゅうなな",
      romanji: ["kyuujuunana", "97"],
      translation: "97",
    },
    {
      character: "きゅうじゅうはち",
      romanji: ["kyuujuuhachi", "98"],
      translation: "98",
    },
    {
      character: "きゅうじゅうきゅう",
      romanji: ["kyuujuukyuu", "99"],
      translation: "99",
    },
  ],
  numbers_hundreds: [
    { character: "ひゃく", romanji: ["hyaku", "100"], translation: "100" },
    { character: "にひゃく", romanji: ["nihyaku", "200"], translation: "200" },
    {
      character: "さんびゃく",
      romanji: ["sanbyaku", "300"],
      translation: "300",
    },
    {
      character: "よんひゃく",
      romanji: ["yonhyaku", "400"],
      translation: "400",
    },
    { character: "ごひゃく", romanji: ["gohyaku", "500"], translation: "500" },
    {
      character: "ろっぴゃく",
      romanji: ["roppyaku", "600"],
      translation: "600",
    },
    {
      character: "ななひゃく",
      romanji: ["nanahyaku", "700"],
      translation: "700",
    },
    {
      character: "はっぴゃく",
      romanji: ["happyaku", "800"],
      translation: "800",
    },
    {
      character: "きゅうひゃく",
      romanji: ["kyuuhyaku", "900"],
      translation: "900",
    },
    { character: "せん", romanji: ["sen", "1000"], translation: "1000" },
  ],
};

// Word dictionary - Japanese words with meanings
const WordDictionary = {
  あい: { romanji: "ai", translation: "love (kjærlighet)" },
  いえ: { romanji: "ie", translation: "house (hus)" },
  うえ: { romanji: "ue", translation: "above (over)" },
  おと: { romanji: "oto", translation: "sound (lyd)" },
  かお: { romanji: "kao", translation: "face (ansikt)" },
  きた: { romanji: "kita", translation: "north (nord)" },
  くち: { romanji: "kuchi", translation: "mouth (munn)" },
  こえ: { romanji: "koe", translation: "voice (stemme)" },
  さけ: { romanji: "sake", translation: "alcohol / salmon (alkohol / laks)" },
  した: { romanji: "shita", translation: "below (under)" },
  すし: { romanji: "sushi", translation: "sushi" },
  そら: { romanji: "sora", translation: "sky (himmel)" },
  たこ: { romanji: "tako", translation: "octopus / kite (blekksprut / drage)" },
  ちち: { romanji: "chichi", translation: "father / milk (far / melk)" },
  つき: { romanji: "tsuki", translation: "moon (måne)" },
  てら: { romanji: "tera", translation: "temple (tempel)" },
  とり: { romanji: "tori", translation: "bird (fugl)" },
  なつ: { romanji: "natsu", translation: "summer (sommer)" },
  にく: { romanji: "niku", translation: "meat (kjøtt)" },
  ぬの: { romanji: "nuno", translation: "cloth (stoff)" },
  ねこ: { romanji: "neko", translation: "cat (katt)" },
  のみ: { romanji: "nomi", translation: "flea (loppe)" },
  はな: { romanji: "hana", translation: "flower / nose (blomst / nese)" },
  ひと: { romanji: "hito", translation: "person (person)" },
  ふね: { romanji: "fune", translation: "ship (skip)" },
  へや: { romanji: "heya", translation: "room (rom)" },
  ほし: { romanji: "hoshi", translation: "star (stjerne)" },
  まち: { romanji: "machi", translation: "town (by)" },
  みず: { romanji: "mizu", translation: "water (vann)" },
  むし: { romanji: "mushi", translation: "insect (insekt)" },
  めし: { romanji: "meshi", translation: "meal (måltid)" },
  もり: { romanji: "mori", translation: "forest (skog)" },
  やま: { romanji: "yama", translation: "mountain (fjell)" },
  ゆき: { romanji: "yuki", translation: "snow (snø)" },
  よる: { romanji: "yoru", translation: "night (natt)" },
  らく: { romanji: "raku", translation: "easy (lett)" },
  りゆう: { romanji: "riyuu", translation: "reason (grunn)" },
  るす: { romanji: "rusu", translation: "absence (fravær)" },
  わに: { romanji: "wani", translation: "crocodile (krokodille)" },
  いぬ: { romanji: "inu", translation: "dog (hund)" },
  うみ: { romanji: "umi", translation: "sea (hav)" },
  かぜ: { romanji: "kaze", translation: "wind / cold (vind / forkjølelse)" },
  きもの: { romanji: "kimono", translation: "kimono" },
  さかな: { romanji: "sakana", translation: "fish (fisk)" },
  たまご: { romanji: "tamago", translation: "egg (egg)" },
  なまえ: { romanji: "namae", translation: "name (navn)" },
  はし: {
    romanji: "hashi",
    translation: "bridge / chopsticks (bro / spisepinner)",
  },
  みみ: { romanji: "mimi", translation: "ear (øre)" },
  ゆめ: { romanji: "yume", translation: "dream (drøm)" },
};

/**
 * Get all characters from selected subsets
 * @param {Array<string>} selectedSubsets - Array of subset names
 * @returns {Array<Object>} Array of character objects
 */
function getAllCharacters(selectedSubsets) {
  const characters = [];
  selectedSubsets.forEach((subset) => {
    if (HiraganaData[subset]) {
      characters.push(...HiraganaData[subset]);
    }
  });
  return characters;
}

/**
 * Tracks progress for a single hiragana character
 * Implements spaced repetition logic
 */
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

  /**
   * Record a correct answer
   * Increases streak, checks for mastered status, updates review time
   */
  recordCorrect() {
    this.correctCount++;
    this.currentStreak++;
    this.lastSeen = Date.now();

    // Check if character is mastered (10 correct in a row)
    if (this.currentStreak >= 10 && !this.isMastered) {
      this.isMastered = true;
    }

    // Calculate next review time based on spaced repetition
    // Longer streak = longer wait time
    if (this.isMastered) {
      // Mastered characters: review after 24 hours
      this.nextReviewTime = Date.now() + 24 * 60 * 60 * 1000;
    } else {
      // Regular characters: review after (streak * 5 minutes)
      this.nextReviewTime = Date.now() + this.currentStreak * 5 * 60 * 1000;
    }
  }

  /**
   * Record an incorrect answer
   * Resets streak, removes mastered status if applicable, updates review time
   */
  recordIncorrect() {
    this.incorrectCount++;
    this.currentStreak = 0;
    this.lastSeen = Date.now();

    // Remove mastered status if character was mastered
    if (this.isMastered) {
      this.isMastered = false;
    }

    // Show again soon (30 seconds)
    this.nextReviewTime = Date.now() + 30 * 1000;
  }

  /**
   * Calculate weight for spaced repetition algorithm
   * Higher weight = higher probability of being selected
   * @returns {number} Weight value
   */
  getWeight() {
    const baseWeight = 1.0;

    // Error multiplier: more errors = higher weight
    const errorMultiplier = 1.0 + this.incorrectCount / (this.correctCount + 1);

    // Time multiplier: longer since last seen = higher weight
    const reviewInterval = 5 * 60 * 1000; // 5 minutes in milliseconds
    const timeSinceLastSeen = this.lastSeen
      ? Date.now() - this.lastSeen
      : reviewInterval;
    const timeMultiplier = Math.min(2.0, timeSinceLastSeen / reviewInterval);

    // Mastered multiplier: mastered characters have much lower weight
    const masteredMultiplier = this.isMastered ? 0.1 : 1.0;

    return baseWeight * errorMultiplier * timeMultiplier * masteredMultiplier;
  }
}

/**
 * Tracks progress for all hiragana characters
 * Manages the collection of CharacterProgress objects
 */
class ProgressTracker {
  constructor() {
    this.characterProgress = new Map(); // character -> CharacterProgress
  }

  /**
   * Initialize a character if it doesn't exist
   * @param {string} character - The hiragana character
   * @param {Array<string>} romanjiArray - Array of valid romanji
   */
  initializeCharacter(character, romanjiArray) {
    if (!this.characterProgress.has(character)) {
      this.characterProgress.set(
        character,
        new CharacterProgress(character, romanjiArray),
      );
    }
  }

  /**
   * Record an answer for a character
   * @param {string} character - The hiragana character
   * @param {boolean} isCorrect - Whether the answer was correct
   */
  recordAnswer(character, isCorrect) {
    const progress = this.characterProgress.get(character);
    if (!progress) {
      console.error(`Character ${character} not initialized`);
      return;
    }

    if (isCorrect) {
      progress.recordCorrect();
    } else {
      progress.recordIncorrect();
    }
  }

  /**
   * Get list of mastered characters
   * @returns {Array<string>} Array of mastered character strings
   */
  getMasteredCharacters() {
    const mastered = [];
    for (const [character, progress] of this.characterProgress.entries()) {
      if (progress.isMastered) {
        mastered.push(character);
      }
    }
    return mastered;
  }

  /**
   * Get progress summary for selected subsets
   * @param {Array<string>} selectedSubsets - Array of subset names
   * @returns {Object} Summary with total and mastered counts
   */
  getProgressSummary(selectedSubsets) {
    const availableCharacters = getAllCharacters(selectedSubsets);
    let totalCount = availableCharacters.length;
    let masteredCount = 0;

    availableCharacters.forEach((charObj) => {
      const progress = this.characterProgress.get(charObj.character);
      if (progress && progress.isMastered) {
        masteredCount++;
      }
    });

    return {
      total: totalCount,
      mastered: masteredCount,
      percentage:
        totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0,
    };
  }

  /**
   * Get progress object for a specific character
   * @param {string} character - The hiragana character
   * @returns {CharacterProgress|null} Progress object or null
   */
  getProgress(character) {
    return this.characterProgress.get(character) || null;
  }

  /**
   * Get all character progress entries
   * @returns {Map} Map of all character progress
   */
  getAllProgress() {
    return this.characterProgress;
  }
}

/**
 * Implements spaced repetition algorithm for selecting next character
 * Uses weighted random selection based on character progress
 */
class CharacterSelector {
  constructor(progressTracker) {
    this.progressTracker = progressTracker;
  }

  /**
   * Select next character using weighted random selection
   * @param {Array<Object>} availableCharacters - Array of character objects from HiraganaData
   * @returns {Object|null} Selected character object or null if none available
   */
  selectNext(availableCharacters) {
    if (!availableCharacters || availableCharacters.length === 0) {
      return null;
    }

    // Initialize any characters that don't have progress yet
    availableCharacters.forEach((charObj) => {
      this.progressTracker.initializeCharacter(
        charObj.character,
        charObj.romanji,
      );
    });

    // Filter characters that are ready for review
    const currentTime = Date.now();
    const readyCharacters = availableCharacters.filter((charObj) => {
      const progress = this.progressTracker.getProgress(charObj.character);
      return progress && progress.nextReviewTime <= currentTime;
    });

    // If no characters are ready, use all available characters
    const charactersToSelect =
      readyCharacters.length > 0 ? readyCharacters : availableCharacters;

    // Calculate weights for each character
    const weights = charactersToSelect.map((charObj) => {
      const progress = this.progressTracker.getProgress(charObj.character);
      return this.calculateWeight(progress);
    });

    // Perform weighted random selection
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    if (totalWeight === 0) {
      // If all weights are 0, select randomly
      const randomIndex = Math.floor(Math.random() * charactersToSelect.length);
      return charactersToSelect[randomIndex];
    }

    let random = Math.random() * totalWeight;

    for (let i = 0; i < charactersToSelect.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        return charactersToSelect[i];
      }
    }

    // Fallback: return last character
    return charactersToSelect[charactersToSelect.length - 1];
  }

  /**
   * Calculate weight for a character based on its progress
   * Higher weight = higher probability of being selected
   * @param {CharacterProgress} characterProgress - Progress object
   * @returns {number} Weight value
   */
  calculateWeight(characterProgress) {
    if (!characterProgress) {
      // New character: high weight
      return 2.0;
    }

    return characterProgress.getWeight();
  }
}

/**
 * Manages localStorage operations for progress and settings
 * Handles serialization, deserialization, and error handling
 */
const StorageManager = {
  STORAGE_KEY: "hiragana-trainer-progress",
  SETTINGS_KEY: "hiragana-trainer-settings",

  /**
   * Save progress tracker to localStorage
   * @param {ProgressTracker} progressTracker - Progress tracker instance
   * @returns {boolean} True if save was successful
   */
  saveProgress(progressTracker) {
    try {
      const data = {};

      // Serialize each CharacterProgress object
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
      if (error.name === "QuotaExceededError") {
        console.error("localStorage quota exceeded");
        alert(t('storage-full'));
      } else {
        console.error("Error saving progress:", error);
      }
      return false;
    }
  },

  /**
   * Load progress from localStorage
   * @returns {ProgressTracker|null} Loaded progress tracker or null
   */
  loadProgress() {
    try {
      const dataStr = localStorage.getItem(this.STORAGE_KEY);

      if (!dataStr) {
        return null; // No saved data
      }

      const data = JSON.parse(dataStr);
      const tracker = new ProgressTracker();

      // Deserialize each character progress
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
    } catch (error) {
      console.error("Error loading progress (corrupt data):", error);
      // Clear corrupt data
      localStorage.removeItem(this.STORAGE_KEY);
      return null;
    }
  },

  /**
   * Save selected subsets to localStorage
   * @param {Array<string>} selectedSubsets - Array of subset names
   * @returns {boolean} True if save was successful
   */
  saveSettings(selectedSubsets) {
    try {
      const settings = {
        selectedSubsets: selectedSubsets,
      };
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
      return true;
    } catch (error) {
      console.error("Error saving settings:", error);
      return false;
    }
  },

  /**
   * Load settings from localStorage
   * @returns {Object} Settings object with selectedSubsets array
   */
  loadSettings() {
    try {
      const settingsStr = localStorage.getItem(this.SETTINGS_KEY);

      if (!settingsStr) {
        // Return default settings
        return { selectedSubsets: [] };
      }

      const settings = JSON.parse(settingsStr);
      return settings;
    } catch (error) {
      console.error("Error loading settings:", error);
      return { selectedSubsets: [] };
    }
  },

  /**
   * Clear all stored data
   */
  clearAll() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.SETTINGS_KEY);
    } catch (error) {
      console.error("Error clearing data:", error);
    }
  },

  /**
   * Check if localStorage is available
   * @returns {boolean} True if localStorage is supported
   */
  isAvailable() {
    try {
      const test = "__storage_test__";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      console.warn("localStorage is not available");
      return false;
    }
  },
};

/**
 * Manages UI interactions and updates
 * Coordinates between user input, progress tracking, and display
 */
class UIController {
  constructor(progressTracker, characterSelector) {
    this.progressTracker = progressTracker;
    this.characterSelector = characterSelector;
    this.currentCharacters = [];
    this.incorrectAttempts = 0;
    this.selectedSubsets = [];

    // DOM elements
    this.characterDisplay = document.getElementById("hiragana-character");
    this.answerInput = document.getElementById("answer-input");
    this.hintDisplay = document.getElementById("hint-display");
    this.translationDisplay = document.getElementById("translation-display");
    this.nextBtn = document.getElementById("next-btn");
    this.showAnswerBtn = document.getElementById("show-answer-btn");
    this.randomBtn = document.getElementById("random-btn");
    this.clearBtn = document.getElementById("clear-btn");
    this.masteredCharactersDiv = document.getElementById("mastered-characters");
    this.toggleSubsetBtn = document.getElementById("toggle-subset-btn");
    this.subsetMenu = document.getElementById("subset-menu");
    this.menuBackdrop = document.getElementById("menu-backdrop");
    this.initializeEventListeners();
    this.loadSettings();
  }

  /**
   * Initialize all event listeners
   */
  initializeEventListeners() {
    // Answer input - Enter key
    this.answerInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleAnswer(this.answerInput.value);
      }
    });

    // Next button
    this.nextBtn.addEventListener("click", () => {
      this.nextCharacter();
    });

    // Show answer button
    this.showAnswerBtn.addEventListener("click", () => {
      this.showAnswer();
    });

    // Random button
    this.randomBtn.addEventListener("click", () => {
      this.selectAllSubsets();
    });

    // Clear button
    this.clearBtn.addEventListener("click", () => {
      this.clearAllSubsets();
    });

    // Toggle subset menu button
    this.toggleSubsetBtn.addEventListener("click", () => {
      if (this.subsetMenu.classList.contains("hidden")) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    });

    // Close menu via backdrop or close button
    this.menuBackdrop.addEventListener("click", () => this.closeMenu());
    const closeBtn = document.getElementById("close-subset-btn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeMenu());

    // Subset checkboxes
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        this.handleSubsetChange();
      });
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

  /**
   * Clear all subsets (Fjern alle button)
   */
  clearAllSubsets() {
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    this.handleSubsetChange();
  }

  /**
   * Select all subsets (Random button)
   */
  selectAllSubsets() {
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
    this.handleSubsetChange();
  }

  /**
   * Handle subset selection changes
   */
  handleSubsetChange() {
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    this.selectedSubsets = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    // Save settings
    StorageManager.saveSettings(this.selectedSubsets);

    // Update progress display
    this.updateProgressDisplay();

    // Load new character if subsets changed, otherwise show prompt
    if (this.selectedSubsets.length > 0) {
      this.nextCharacter();
    } else {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t('select-from-menu');
      this.answerInput.value = "";
    }
  }

  /**
   * Display character(s)
   */
  displayCharacter(characters) {
    if (!characters || characters.length === 0) {
      this.characterDisplay.textContent = "選択してください";
      this.translationDisplay.textContent = "";
      return;
    }

    this.currentCharacters = characters;

    // Display all characters
    const displayText = characters.map((c) => c.character).join("");
    this.characterDisplay.textContent = displayText;

    const wordTranslation = WordDictionary[displayText];
    if (wordTranslation) {
      this.translationDisplay.textContent = wordTranslation.translation;
    } else {
      const translations = characters
        .filter((c) => c.translation)
        .map((c) => c.translation);
      this.translationDisplay.textContent =
        translations.length > 0 ? translations.join("") : "";
    }

    // Reset input and hide hint
    this.answerInput.value = "";
    this.answerInput.focus();
    this.hintDisplay.classList.add("hidden");
    this.incorrectAttempts = 0;
  }

  /**
   * Handle user answer
   */
  handleAnswer(userInput) {
    if (!userInput.trim() || this.currentCharacters.length === 0) {
      return;
    }

    // Combine all romanji for validation
    const combinedRomanji = this.currentCharacters
      .map((c) => c.romanji)
      .reduce((acc, arr) => {
        // Create all combinations
        if (acc.length === 0) return arr;
        const combinations = [];
        acc.forEach((a) => {
          arr.forEach((b) => {
            combinations.push(a + b);
          });
        });
        return combinations;
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

  /**
   * Handle correct answer
   */
  handleCorrectAnswer() {
    this.currentCharacters.forEach((charObj) => {
      this.progressTracker.recordAnswer(charObj.character, true);
    });

    StorageManager.saveProgress(this.progressTracker);
    this.updateProgressDisplay();

    this.answerInput.classList.add("flash-correct");
    setTimeout(() => {
      this.answerInput.classList.remove("flash-correct");
      this.nextCharacter();
    }, 300);
  }

  /**
   * Handle incorrect answer
   */
  handleIncorrectAnswer() {
    this.incorrectAttempts++;

    this.currentCharacters.forEach((charObj) => {
      this.progressTracker.recordAnswer(charObj.character, false);
    });

    StorageManager.saveProgress(this.progressTracker);

    this.answerInput.classList.add("flash-incorrect");
    setTimeout(() => this.answerInput.classList.remove("flash-incorrect"), 400);

    if (this.incorrectAttempts >= 3) {
      this.showHint();
    }

    this.answerInput.value = "";
    this.answerInput.focus();
  }

  /**
   * Show hint (first letter)
   */
  showHint() {
    if (this.currentCharacters.length === 0) return;

    const firstRomanji = this.currentCharacters[0].romanji[0];
    this.hintDisplay.textContent = `${t('hint-prefix')} "${firstRomanji[0]}"`;
    this.hintDisplay.classList.remove("hidden");
  }

  /**
   * Show answer
   */
  showAnswer() {
    if (this.currentCharacters.length === 0) return;

    const answer = this.currentCharacters.map((c) => c.romanji[0]).join("");

    this.hintDisplay.textContent = `${t('answer-prefix')} ${answer}`;
    this.hintDisplay.classList.remove("hidden");

    // Count as incorrect
    this.currentCharacters.forEach((charObj) => {
      this.progressTracker.recordAnswer(charObj.character, false);
    });

    StorageManager.saveProgress(this.progressTracker);
  }

  /**
   * Move to next character
   */
  nextCharacter() {
    if (this.selectedSubsets.length === 0) {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t('select-from-menu');
      return;
    }

    const availableCharacters = getAllCharacters(this.selectedSubsets);

    if (availableCharacters.length === 0) {
      this.characterDisplay.textContent = "❌";
      return;
    }

    const selectedChar = this.characterSelector.selectNext(availableCharacters);
    if (selectedChar) {
      this.displayCharacter([selectedChar]);
    }
  }

  /**
   * Update progress display
   */
  updateProgressDisplay() {
    // Update mastered characters list
    const masteredChars = this.progressTracker.getMasteredCharacters();
    this.masteredCharactersDiv.innerHTML = "";

    masteredChars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      this.masteredCharactersDiv.appendChild(span);
    });
  }

  suggestNextSubset() {
    const allSubsets = Object.keys(HiraganaData);
    const unselectedSubsets = allSubsets.filter(
      (subset) => !this.selectedSubsets.includes(subset),
    );
    if (unselectedSubsets.length === 0) return;

    const nextSubset = unselectedSubsets[0];
    const checkboxes = document.querySelectorAll(
      '.subset-checkboxes input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
      if (checkbox.value === nextSubset) checkbox.checked = true;
    });

    this.handleSubsetChange();
    this.openMenu();
  }

  /**
   * Load settings from storage
   */
  loadSettings() {
    const settings = StorageManager.loadSettings();

    if (settings.selectedSubsets && settings.selectedSubsets.length > 0) {
      this.selectedSubsets = settings.selectedSubsets;

      const checkboxes = document.querySelectorAll(
        '.subset-checkboxes input[type="checkbox"]',
      );
      checkboxes.forEach((checkbox) => {
        if (this.selectedSubsets.includes(checkbox.value)) {
          checkbox.checked = true;
        }
      });

      this.updateProgressDisplay();
      this.nextCharacter();
    } else {
      this.characterDisplay.textContent = "—";
      this.translationDisplay.textContent = t('select-from-menu');
    }
  }
}

// keep a deep copy of original data
const BASE_HIRAGANA_DATA = JSON.parse(JSON.stringify(HiraganaData));

const EXTRA_DAKUTEN = [
  { character: "が", romanji: ["ga"], subset: "ka" },
  { character: "ぎ", romanji: ["gi"], subset: "ka" },
  { character: "ぐ", romanji: ["gu"], subset: "ka" },
  { character: "げ", romanji: ["ge"], subset: "ka" },
  { character: "ご", romanji: ["go"], subset: "ka" },
  { character: "ざ", romanji: ["za"], subset: "sa" },
  { character: "じ", romanji: ["ji"], subset: "sa" },
  { character: "ず", romanji: ["zu"], subset: "sa" },
  { character: "ぜ", romanji: ["ze"], subset: "sa" },
  { character: "ぞ", romanji: ["zo"], subset: "sa" },
  { character: "だ", romanji: ["da"], subset: "ta" },
  { character: "ぢ", romanji: ["ji"], subset: "ta" },
  { character: "づ", romanji: ["zu"], subset: "ta" },
  { character: "で", romanji: ["de"], subset: "ta" },
  { character: "ど", romanji: ["do"], subset: "ta" },
  { character: "ば", romanji: ["ba"], subset: "ha" },
  { character: "び", romanji: ["bi"], subset: "ha" },
  { character: "ぶ", romanji: ["bu"], subset: "ha" },
  { character: "べ", romanji: ["be"], subset: "ha" },
  { character: "ぼ", romanji: ["bo"], subset: "ha" },
];

const EXTRA_HANDAKUTEN = [
  { character: "ぱ", romanji: ["pa"], subset: "ha" },
  { character: "ぴ", romanji: ["pi"], subset: "ha" },
  { character: "ぷ", romanji: ["pu"], subset: "ha" },
  { character: "ぺ", romanji: ["pe"], subset: "ha" },
  { character: "ぽ", romanji: ["po"], subset: "ha" },
];

const EXTRA_SMALL_KANA = [
  { character: "ゃ", romanji: ["xya"], subset: "small" },
  { character: "ゅ", romanji: ["xyu"], subset: "small" },
  { character: "ょ", romanji: ["xyo"], subset: "small" },
  { character: "ぁ", romanji: ["xa"], subset: "small" },
  { character: "ぃ", romanji: ["xi"], subset: "small" },
  { character: "ぅ", romanji: ["xu"], subset: "small" },
  { character: "ぇ", romanji: ["xe"], subset: "small" },
  { character: "ぉ", romanji: ["xo"], subset: "small" },
];

function applyToggles(dakutenEnabled, handakutenEnabled, smallEnabled) {
  // reset HiraganaData to base
  Object.keys(BASE_HIRAGANA_DATA).forEach((key) => {
    HiraganaData[key] = JSON.parse(JSON.stringify(BASE_HIRAGANA_DATA[key]));
  });

  // remove small subset if present
  if (HiraganaData.small) delete HiraganaData.small;

  if (dakutenEnabled) {
    EXTRA_DAKUTEN.forEach((item) => {
      if (HiraganaData[item.subset]) {
        HiraganaData[item.subset].push({
          character: item.character,
          romanji: item.romanji,
        });
      }
    });
  }

  if (handakutenEnabled) {
    EXTRA_HANDAKUTEN.forEach((item) => {
      if (HiraganaData[item.subset]) {
        HiraganaData[item.subset].push({
          character: item.character,
          romanji: item.romanji,
        });
      }
    });
  }

  if (smallEnabled) {
    HiraganaData.small = EXTRA_SMALL_KANA.map((item) => ({
      character: item.character,
      romanji: item.romanji,
    }));
  }

  try {
    localStorage.setItem("include-dakuten", dakutenEnabled ? "1" : "0");
    localStorage.setItem("include-handakuten", handakutenEnabled ? "1" : "0");
    localStorage.setItem("include-small-kana", smallEnabled ? "1" : "0");
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  // Load or create progress tracker
  let progressTracker = StorageManager.loadProgress();
  if (!progressTracker) {
    progressTracker = new ProgressTracker();
  }

  // Create character selector
  const characterSelector = new CharacterSelector(progressTracker);

  // Create UI controller and expose globally
  const uiController = new UIController(progressTracker, characterSelector);
  window.uiController = uiController;

  // Wire up toggle checkboxes (present in index.html)
  const dakChk = document.getElementById("include-dakuten");
  const hanChk = document.getElementById("include-handakuten");
  const smallChk = document.getElementById("include-small-kana");

  const dakInit = localStorage.getItem("include-dakuten") === "1";
  const hanInit = localStorage.getItem("include-handakuten") === "1";
  const smallInit = localStorage.getItem("include-small-kana") === "1";

  if (dakChk) dakChk.checked = dakInit;
  if (hanChk) hanChk.checked = hanInit;
  if (smallChk) smallChk.checked = smallInit;

  // apply initial toggles
  applyToggles(dakInit, hanInit, smallInit);

  // When toggles change, reapply and refresh UI
  function onToggleChange() {
    const dak = dakChk ? dakChk.checked : false;
    const han = hanChk ? hanChk.checked : false;
    const small = smallChk ? smallChk.checked : false;
    applyToggles(dak, han, small);

    if (window.uiController) {
      window.uiController.updateProgressDisplay();
      if (
        window.uiController.selectedSubsets &&
        window.uiController.selectedSubsets.length > 0
      ) {
        window.uiController.nextCharacter();
      }
    }
  }

  if (dakChk) dakChk.addEventListener("change", onToggleChange);
  if (hanChk) hanChk.addEventListener("change", onToggleChange);
  if (smallChk) smallChk.addEventListener("change", onToggleChange);
});
