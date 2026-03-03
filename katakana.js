/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  katakana.js — Katakana data
 *  Glenn's Japanese Trainer
 */

const KatakanaData = {
  vowels: [
    { character: "ア", romanji: ["a"] },
    { character: "イ", romanji: ["i"] },
    { character: "ウ", romanji: ["u"] },
    { character: "エ", romanji: ["e"] },
    { character: "オ", romanji: ["o"] },
  ],
  ka: [
    { character: "カ", romanji: ["ka"] },
    { character: "キ", romanji: ["ki"] },
    { character: "ク", romanji: ["ku"] },
    { character: "ケ", romanji: ["ke"] },
    { character: "コ", romanji: ["ko"] },
  ],
  sa: [
    { character: "サ", romanji: ["sa"] },
    { character: "シ", romanji: ["shi"] },
    { character: "ス", romanji: ["su"] },
    { character: "セ", romanji: ["se"] },
    { character: "ソ", romanji: ["so"] },
  ],
  ta: [
    { character: "タ", romanji: ["ta"] },
    { character: "チ", romanji: ["chi"] },
    { character: "ツ", romanji: ["tsu"] },
    { character: "テ", romanji: ["te"] },
    { character: "ト", romanji: ["to"] },
  ],
  na: [
    { character: "ナ", romanji: ["na"] },
    { character: "ニ", romanji: ["ni"] },
    { character: "ヌ", romanji: ["nu"] },
    { character: "ネ", romanji: ["ne"] },
    { character: "ノ", romanji: ["no"] },
  ],
  ha: [
    { character: "ハ", romanji: ["ha"] },
    { character: "ヒ", romanji: ["hi"] },
    { character: "フ", romanji: ["fu"] },
    { character: "ヘ", romanji: ["he"] },
    { character: "ホ", romanji: ["ho"] },
  ],
  ma: [
    { character: "マ", romanji: ["ma"] },
    { character: "ミ", romanji: ["mi"] },
    { character: "ム", romanji: ["mu"] },
    { character: "メ", romanji: ["me"] },
    { character: "モ", romanji: ["mo"] },
  ],
  ya: [
    { character: "ヤ", romanji: ["ya"] },
    { character: "ユ", romanji: ["yu"] },
    { character: "ヨ", romanji: ["yo"] },
  ],
  ra: [
    { character: "ラ", romanji: ["ra"] },
    { character: "リ", romanji: ["ri"] },
    { character: "ル", romanji: ["ru"] },
    { character: "レ", romanji: ["re"] },
    { character: "ロ", romanji: ["ro"] },
  ],
  wa: [
    { character: "ワ", romanji: ["wa"] },
    { character: "ヲ", romanji: ["wo", "o"] },
  ],
  n: [{ character: "ン", romanji: ["n"] }],
  lookalikes: [
    { character: "シ", romanji: ["shi"] },
    { character: "ツ", romanji: ["tsu"] },
    { character: "ソ", romanji: ["so"] },
    { character: "ン", romanji: ["n"] },
    { character: "ノ", romanji: ["no"] },
    { character: "ウ", romanji: ["u"] },
    { character: "ワ", romanji: ["wa"] },
    { character: "ク", romanji: ["ku"] },
    { character: "タ", romanji: ["ta"] },
    { character: "ケ", romanji: ["ke"] },
    { character: "ア", romanji: ["a"] },
    { character: "マ", romanji: ["ma"] },
    { character: "コ", romanji: ["ko"] },
    { character: "ユ", romanji: ["yu"] },
    { character: "ヌ", romanji: ["nu"] },
    { character: "ス", romanji: ["su"] },
    { character: "テ", romanji: ["te"] },
    { character: "チ", romanji: ["chi"] },
    { character: "ラ", romanji: ["ra"] },
    { character: "フ", romanji: ["fu"] },
    { character: "ネ", romanji: ["ne"] },
    { character: "ホ", romanji: ["ho"] },
  ],
  small: [
    { character: "キャ", romanji: ["kya"] },
    { character: "キュ", romanji: ["kyu"] },
    { character: "キョ", romanji: ["kyo"] },
    { character: "シャ", romanji: ["sha"] },
    { character: "シュ", romanji: ["shu"] },
    { character: "ショ", romanji: ["sho"] },
    { character: "チャ", romanji: ["cha"] },
    { character: "チュ", romanji: ["chu"] },
    { character: "チョ", romanji: ["cho"] },
    { character: "ニャ", romanji: ["nya"] },
    { character: "ニュ", romanji: ["nyu"] },
    { character: "ニョ", romanji: ["nyo"] },
    { character: "ヒャ", romanji: ["hya"] },
    { character: "ヒュ", romanji: ["hyu"] },
    { character: "ヒョ", romanji: ["hyo"] },
    { character: "ミャ", romanji: ["mya"] },
    { character: "ミュ", romanji: ["myu"] },
    { character: "ミョ", romanji: ["myo"] },
    { character: "リャ", romanji: ["rya"] },
    { character: "リュ", romanji: ["ryu"] },
    { character: "リョ", romanji: ["ryo"] },
  ],
};

// set storage keys before DOMContentLoaded fires
StorageManager.STORAGE_KEY = "katakana-trainer-progress";
StorageManager.SETTINGS_KEY = "katakana-trainer-settings";

function getAllCharacters(selectedSubsets) {
  const characters = [];
  selectedSubsets.forEach((subset) => {
    if (KatakanaData[subset]) characters.push(...KatakanaData[subset]);
  });
  return characters;
}

const BASE_KATAKANA_DATA = JSON.parse(JSON.stringify(KatakanaData));

const EXTRA_DAKUTEN = [
  { character: "ガ", romanji: ["ga"], subset: "ka" },
  { character: "ギ", romanji: ["gi"], subset: "ka" },
  { character: "グ", romanji: ["gu"], subset: "ka" },
  { character: "ゲ", romanji: ["ge"], subset: "ka" },
  { character: "ゴ", romanji: ["go"], subset: "ka" },
  { character: "ザ", romanji: ["za"], subset: "sa" },
  { character: "ジ", romanji: ["ji"], subset: "sa" },
  { character: "ズ", romanji: ["zu"], subset: "sa" },
  { character: "ゼ", romanji: ["ze"], subset: "sa" },
  { character: "ゾ", romanji: ["zo"], subset: "sa" },
  { character: "ダ", romanji: ["da"], subset: "ta" },
  { character: "ヂ", romanji: ["ji"], subset: "ta" },
  { character: "ヅ", romanji: ["zu"], subset: "ta" },
  { character: "デ", romanji: ["de"], subset: "ta" },
  { character: "ド", romanji: ["do"], subset: "ta" },
  { character: "バ", romanji: ["ba"], subset: "ha" },
  { character: "ビ", romanji: ["bi"], subset: "ha" },
  { character: "ブ", romanji: ["bu"], subset: "ha" },
  { character: "ベ", romanji: ["be"], subset: "ha" },
  { character: "ボ", romanji: ["bo"], subset: "ha" },
];

const EXTRA_HANDAKUTEN = [
  { character: "パ", romanji: ["pa"], subset: "ha" },
  { character: "ピ", romanji: ["pi"], subset: "ha" },
  { character: "プ", romanji: ["pu"], subset: "ha" },
  { character: "ペ", romanji: ["pe"], subset: "ha" },
  { character: "ポ", romanji: ["po"], subset: "ha" },
];

// yōon combos added to small subset when toggles are on
const EXTRA_DAKUTEN_SMALL = [
  { character: "ギャ", romanji: ["gya"] },
  { character: "ギュ", romanji: ["gyu"] },
  { character: "ギョ", romanji: ["gyo"] },
  { character: "ジャ", romanji: ["ja"] },
  { character: "ジュ", romanji: ["ju"] },
  { character: "ジョ", romanji: ["jo"] },
  { character: "ビャ", romanji: ["bya"] },
  { character: "ビュ", romanji: ["byu"] },
  { character: "ビョ", romanji: ["byo"] },
];

const EXTRA_HANDAKUTEN_SMALL = [
  { character: "ピャ", romanji: ["pya"] },
  { character: "ピュ", romanji: ["pyu"] },
  { character: "ピョ", romanji: ["pyo"] },
];

function applyToggles(dakutenEnabled, handakutenEnabled) {
  Object.keys(BASE_KATAKANA_DATA).forEach((key) => {
    KatakanaData[key] = JSON.parse(JSON.stringify(BASE_KATAKANA_DATA[key]));
  });

  if (dakutenEnabled) {
    EXTRA_DAKUTEN.forEach((item) => {
      if (KatakanaData[item.subset]) {
        KatakanaData[item.subset].push({
          character: item.character,
          romanji: item.romanji,
        });
      }
    });
    EXTRA_DAKUTEN_SMALL.forEach((item) => {
      KatakanaData.small.push({ character: item.character, romanji: item.romanji });
    });
  }

  if (handakutenEnabled) {
    EXTRA_HANDAKUTEN.forEach((item) => {
      if (KatakanaData[item.subset]) {
        KatakanaData[item.subset].push({
          character: item.character,
          romanji: item.romanji,
        });
      }
    });
    EXTRA_HANDAKUTEN_SMALL.forEach((item) => {
      KatakanaData.small.push({ character: item.character, romanji: item.romanji });
    });
  }

  try {
    localStorage.setItem("katakana-include-dakuten", dakutenEnabled ? "1" : "0");
    localStorage.setItem("katakana-include-handakuten", handakutenEnabled ? "1" : "0");
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

  const dakInit = localStorage.getItem("katakana-include-dakuten") === "1";
  const hanInit = localStorage.getItem("katakana-include-handakuten") === "1";

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
