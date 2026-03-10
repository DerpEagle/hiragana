#!/bin/bash
# Generate MP3 audio for all sentences using Edge TTS (ja-JP-NanamiNeural)

VOICE="ja-JP-NanamiNeural"
OUTDIR="audio"

sentences=(
  "これはほんです"
  "それはペンです"
  "わたしはがくせいです"
  "あなたはせんせいです"
  "かれはにほんじんです"
  "かのじょはいしゃです"
  "これはねこです"
  "あれはやまです"
  "ここはがっこうです"
  "きょうはげつようびです"
  "みずをのみます"
  "ごはんをたべます"
  "ほんをよみます"
  "おんがくをききます"
  "テレビをみます"
  "がっこうにいきます"
  "うちにかえります"
  "ここにすわります"
  "でんしゃでいきます"
  "にほんごではなします"
  "わたしはにほんごをべんきょうします"
  "わたしはまいにちコーヒーをのみます"
  "かれはしんぶんをよみます"
  "わたしはあさごはんをたべます"
  "かのじょはえいごをはなします"
  "ともだちはとうきょうにすんでいます"
  "わたしはまいにちにほんごをれんしゅうします"
  "せんせいはがっこうでおしえます"
  "わたしはでんしゃでしごとにいきます"
  "こどもたちはこうえんであそびます"
  "このほんはおもしろいです"
  "きょうはあついです"
  "にほんごはむずかしいです"
  "このりょうりはおいしいです"
  "さくらはきれいです"
  "わたしはさかなをたべません"
  "かれはにほんごをはなしません"
  "きょうはさむくないです"
  "このえいがはおもしろくないです"
  "あのレストランはしずかではありません"
  "きのうえいがをみました"
  "あさごはんをたべました"
  "にほんにいきました"
  "ともだちにあいました"
  "きのうべんきょうしませんでした"
  "あめがふっています"
  "いまテレビをみています"
  "かれはもうかえりました"
  "わたしはまだたべていません"
  "にほんごをはなすことができます"
)

total=${#sentences[@]}
count=0

for s in "${sentences[@]}"; do
  count=$((count + 1))
  outfile="$OUTDIR/$s.mp3"
  if [ -f "$outfile" ]; then
    echo "[$count/$total] SKIP (exists): $s"
    continue
  fi
  echo "[$count/$total] Generating: $s"
  python3 -m edge_tts --voice "$VOICE" --text "$s" --write-media "$outfile" 2>/dev/null
  if [ $? -ne 0 ]; then
    echo "  ERROR: Failed to generate $s"
  fi
done

echo "Done! Generated audio for $total sentences."
