/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  app.js — Hiragana data and settings
 *  Glenn's Japanese Trainer
 */

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
  lookalikes: [
    { character: "あ", romanji: ["a"] },
    { character: "お", romanji: ["o"] },
    { character: "は", romanji: ["ha"] },
    { character: "ほ", romanji: ["ho"] },
    { character: "ね", romanji: ["ne"] },
    { character: "れ", romanji: ["re"] },
    { character: "わ", romanji: ["wa"] },
    { character: "る", romanji: ["ru"] },
    { character: "ろ", romanji: ["ro"] },
    { character: "き", romanji: ["ki"] },
    { character: "さ", romanji: ["sa"] },
    { character: "ら", romanji: ["ra"] },
    { character: "ち", romanji: ["chi"] },
    { character: "め", romanji: ["me"] },
    { character: "ぬ", romanji: ["nu"] },
    { character: "た", romanji: ["ta"] },
    { character: "な", romanji: ["na"] },
    { character: "く", romanji: ["ku"] },
    { character: "へ", romanji: ["he"] },
  ],
  small: [
    { character: "きゃ", romanji: ["kya"] },
    { character: "きゅ", romanji: ["kyu"] },
    { character: "きょ", romanji: ["kyo"] },
    { character: "しゃ", romanji: ["sha"] },
    { character: "しゅ", romanji: ["shu"] },
    { character: "しょ", romanji: ["sho"] },
    { character: "ちゃ", romanji: ["cha"] },
    { character: "ちゅ", romanji: ["chu"] },
    { character: "ちょ", romanji: ["cho"] },
    { character: "にゃ", romanji: ["nya"] },
    { character: "にゅ", romanji: ["nyu"] },
    { character: "にょ", romanji: ["nyo"] },
    { character: "ひゃ", romanji: ["hya"] },
    { character: "ひゅ", romanji: ["hyu"] },
    { character: "ひょ", romanji: ["hyo"] },
    { character: "みゃ", romanji: ["mya"] },
    { character: "みゅ", romanji: ["myu"] },
    { character: "みょ", romanji: ["myo"] },
    { character: "りゃ", romanji: ["rya"] },
    { character: "りゅ", romanji: ["ryu"] },
    { character: "りょ", romanji: ["ryo"] },
  ],
};

// set storage keys before DOMContentLoaded fires
StorageManager.STORAGE_KEY = "hiragana-trainer-progress";
StorageManager.SETTINGS_KEY = "hiragana-trainer-settings";

function getAllCharacters(selectedSubsets) {
  const characters = [];
  selectedSubsets.forEach((subset) => {
    if (HiraganaData[subset]) characters.push(...HiraganaData[subset]);
  });
  return characters;
}

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

// yōon (small kana combinations) added to the small subset when toggles are on
const EXTRA_DAKUTEN_SMALL = [
  { character: "ぎゃ", romanji: ["gya"] },
  { character: "ぎゅ", romanji: ["gyu"] },
  { character: "ぎょ", romanji: ["gyo"] },
  { character: "じゃ", romanji: ["ja"] },
  { character: "じゅ", romanji: ["ju"] },
  { character: "じょ", romanji: ["jo"] },
  { character: "びゃ", romanji: ["bya"] },
  { character: "びゅ", romanji: ["byu"] },
  { character: "びょ", romanji: ["byo"] },
];

const EXTRA_HANDAKUTEN_SMALL = [
  { character: "ぴゃ", romanji: ["pya"] },
  { character: "ぴゅ", romanji: ["pyu"] },
  { character: "ぴょ", romanji: ["pyo"] },
];

function applyToggles(dakutenEnabled, handakutenEnabled) {
  Object.keys(BASE_HIRAGANA_DATA).forEach((key) => {
    HiraganaData[key] = JSON.parse(JSON.stringify(BASE_HIRAGANA_DATA[key]));
  });

  if (dakutenEnabled) {
    EXTRA_DAKUTEN.forEach((item) => {
      if (HiraganaData[item.subset]) {
        HiraganaData[item.subset].push({
          character: item.character,
          romanji: item.romanji,
        });
      }
    });
    EXTRA_DAKUTEN_SMALL.forEach((item) => {
      HiraganaData.small.push({ character: item.character, romanji: item.romanji });
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
    EXTRA_HANDAKUTEN_SMALL.forEach((item) => {
      HiraganaData.small.push({ character: item.character, romanji: item.romanji });
    });
  }

  try {
    localStorage.setItem("include-dakuten", dakutenEnabled ? "1" : "0");
    localStorage.setItem("include-handakuten", handakutenEnabled ? "1" : "0");
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let progressTracker = StorageManager.loadProgress();
  if (!progressTracker) progressTracker = new ProgressTracker();

  const characterSelector = new CharacterSelector(progressTracker);
  const uiController = new UIController(progressTracker, characterSelector);
  window.uiController = uiController;

  const dakChk = document.getElementById("include-dakuten");
  const hanChk = document.getElementById("include-handakuten");

  const dakInit = localStorage.getItem("include-dakuten") === "1";
  const hanInit = localStorage.getItem("include-handakuten") === "1";

  if (dakChk) dakChk.checked = dakInit;
  if (hanChk) hanChk.checked = hanInit;

  applyToggles(dakInit, hanInit);

  function onToggleChange() {
    const dak = dakChk ? dakChk.checked : false;
    const han = hanChk ? hanChk.checked : false;
    applyToggles(dak, han);
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
});
