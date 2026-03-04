/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  speak.js — Glenn A.
 *  Japanese pronunciation using pre-recorded audio files.
 *  Falls back to kana-by-kana concatenation for words without a direct file.
 */

// split a hiragana/katakana string into playable kana units
function splitKana(text) {
  const small = "ゃゅょャュョ";
  const units = [];
  for (let i = 0; i < text.length; i++) {
    if (i + 1 < text.length && small.includes(text[i + 1])) {
      units.push(text[i] + text[i + 1]);
      i++;
    } else {
      units.push(text[i]);
    }
  }
  return units;
}

// play kana units one after another
function playSequential(units, index) {
  if (index >= units.length) { _done(); return; }
  const ch = units[index];
  // っ/ッ = geminate consonant, short pause then continue
  if (ch === "っ" || ch === "ッ") {
    setTimeout(() => playSequential(units, index + 1), 70);
    return;
  }
  const a = new Audio("audio/" + encodeURIComponent(ch) + ".mp3");
  a.playbackRate = 3;
  a.addEventListener("ended", () => playSequential(units, index + 1));
  a.play().catch(() => playSequential(units, index + 1));
}

// block concurrent playback
let _speaking = false;

function _done() { _speaking = false; }

// try direct file first, then kana-by-kana concatenation
function speakJapanese(text) {
  if (!text || _speaking) return;
  _speaking = true;
  const audio = new Audio("audio/" + encodeURIComponent(text) + ".mp3");
  audio.addEventListener("ended", _done);
  audio.addEventListener("error", _done);
  audio.play().catch(() => {
    const units = splitKana(text);
    if (units.length > 0) playSequential(units, 0);
    else _done();
  });
}
