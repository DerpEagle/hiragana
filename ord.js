/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  ord.js — Word trainer logic
 *  Glenn's Japanese Trainer
 */

const WordDictionary = {
  // 2-char
  あい: { romanji: "ai", translation: "love (kjærlighet)" },
  いえ: { romanji: "ie", translation: "house (hus)" },
  いぬ: { romanji: "inu", translation: "dog (hund)" },
  うみ: { romanji: "umi", translation: "sea (hav)" },
  みず: { romanji: "mizu", translation: "water (vann)" },
  やま: { romanji: "yama", translation: "mountain (fjell)" },
  ゆき: { romanji: "yuki", translation: "snow (snø)" },
  そら: { romanji: "sora", translation: "sky (himmel)" },
  くち: { romanji: "kuchi", translation: "mouth (munn)" },
  はな: { romanji: "hana", translation: "flower / nose (blomst / nese)" },

  // 3-char
  うえ: { romanji: "ue", translation: "above (over / oppe)" },
  おと: { romanji: "oto", translation: "sound (lyd)" },
  かお: { romanji: "kao", translation: "face (ansikt)" },
  きた: { romanji: "kita", translation: "north (nord)" },
  こえ: { romanji: "koe", translation: "voice (stemme)" },
  さけ: { romanji: "sake", translation: "alcohol / salmon (alkohol / laks)" },
  した: { romanji: "shita", translation: "below (under / nedenfor)" },
  すし: { romanji: "sushi", translation: "sushi" },
  たこ: { romanji: "tako", translation: "octopus / kite (blekksprut / drage)" },
  ちち: { romanji: "chichi", translation: "father (far)" },
  つき: { romanji: "tsuki", translation: "moon (måne)" },
  てら: { romanji: "tera", translation: "temple (tempel)" },
  とり: { romanji: "tori", translation: "bird (fugl)" },
  なつ: { romanji: "natsu", translation: "summer (sommer)" },
  にく: { romanji: "niku", translation: "meat (kjøtt)" },
  ねこ: { romanji: "neko", translation: "cat (katt)" },
  のみ: { romanji: "nomi", translation: "flea / only (loppe / kun)" },
  ひと: { romanji: "hito", translation: "person" },
  ふね: { romanji: "fune", translation: "ship / boat (skip / båt)" },
  へや: { romanji: "heya", translation: "room (rom)" },
  ほし: { romanji: "hoshi", translation: "star (stjerne)" },
  まち: { romanji: "machi", translation: "town (by / tettsted)" },
  むし: { romanji: "mushi", translation: "insect (insekt)" },
  めし: { romanji: "meshi", translation: "meal / rice (måltid / ris)" },
  もり: { romanji: "mori", translation: "forest (skog)" },
  わに: { romanji: "wani", translation: "crocodile (krokodille)" },

  // 4-char
  ありがとう: { romanji: "arigatou", translation: "thank you (takk)" },
  おはよう: { romanji: "ohayou", translation: "good morning (god morgen)" },
  こんばんは: { romanji: "konbanwa", translation: "good evening (god kveld)" },
  さようなら: { romanji: "sayounara", translation: "goodbye (hadet)" },
  たんじょうび: { romanji: "tanjoubi", translation: "birthday (bursdag)" },
  しんぶん: { romanji: "shinbun", translation: "newspaper (avis)" },
  でんしゃ: { romanji: "densha", translation: "train (tog)" },
  じてんしゃ: { romanji: "jitensha", translation: "bicycle (sykkel)" },
  きっさてん: { romanji: "kissaten", translation: "café (kafé)" },
  びょういん: { romanji: "byouin", translation: "hospital (sykehus)" },

  // more 4-5-char
  れいぞうこ: { romanji: "reizouko", translation: "refrigerator (kjøleskap)" },
  でんわ: { romanji: "denwa", translation: "telephone (telefon)" },
  こうえん: { romanji: "kouen", translation: "park" },
  しょくどう: {
    romanji: "shokudou",
    translation: "cafeteria (kantine / spisested)",
  },
  きょうしつ: { romanji: "kyoushitsu", translation: "classroom (klasserom)" },
  せんせい: { romanji: "sensei", translation: "teacher (lærer)" },
  がっこう: { romanji: "gakkou", translation: "school (skole)" },
  かいしゃ: { romanji: "kaisha", translation: "company (selskap / firma)" },
  しょうがつ: { romanji: "shougatsu", translation: "New Year (nyttår)" },

  // misc common words
  おんがく: { romanji: "ongaku", translation: "music (musikk)" },
  えいが: { romanji: "eiga", translation: "film / movie (film)" },
  ほん: { romanji: "hon", translation: "book (bok)" },
  くるま: { romanji: "kuruma", translation: "car (bil)" },
  れんしゅう: { romanji: "renshuu", translation: "practice (øvelse)" },
  しごと: { romanji: "shigoto", translation: "work (jobb)" },
  りょこう: { romanji: "ryokou", translation: "travel (reise)" },
  せかい: { romanji: "sekai", translation: "world (verden)" },
  かぞく: { romanji: "kazoku", translation: "family (familie)" },

  // food
  ごはん: { romanji: "gohan", translation: "rice / meal (ris / måltid)" },
  おちゃ: { romanji: "ocha", translation: "tea (te)" },
  こうちゃ: { romanji: "koucha", translation: "black tea (sort te)" },
  くだもの: { romanji: "kudamono", translation: "fruit (frukt)" },
  やさい: { romanji: "yasai", translation: "vegetables (grønnsaker)" },
  にほんしょく: {
    romanji: "nihonshoku",
    translation: "Japanese food (japansk mat)",
  },

  // body
  あし: { romanji: "ashi", translation: "foot / leg (fot / ben)" },
  て: { romanji: "te", translation: "hand (hånd)" },
  め: { romanji: "me", translation: "eye (øye)" },
  みみ: { romanji: "mimi", translation: "ear (øre)" },
  あたま: { romanji: "atama", translation: "head (hode)" },

  // nature / time
  はれ: {
    romanji: "hare",
    translation: "clear weather / sunny (klarvær / sol)",
  },
  あめ: { romanji: "ame", translation: "rain (regn)" },
  きせつ: { romanji: "kisetsu", translation: "season (årstid)" },
  ひ: { romanji: "hi", translation: "day / fire (dag / ild)" },

  // feelings / people
  かなしい: { romanji: "kanashii", translation: "sad (trist)" },
  うれしい: { romanji: "ureshii", translation: "happy (glad)" },
  ともだち: { romanji: "tomodachi", translation: "friend (venn)" },
  かんじ: { romanji: "kanji", translation: "kanji (characters)" },

  // places
  くうこう: { romanji: "kuukou", translation: "airport (flyplass)" },
  えき: { romanji: "eki", translation: "station (stasjon)" },
  みせ: { romanji: "mise", translation: "shop / store (butikk)" },

  // extra vocabulary
  おかね: { romanji: "okane", translation: "money (penger)" },
  てんき: { romanji: "tenki", translation: "weather (vær)" },
  しゅくだい: { romanji: "shukudai", translation: "homework (lekser)" },
  けいたい: { romanji: "keitai", translation: "mobile phone (mobil)" },
  れきし: { romanji: "rekishi", translation: "history (historie)" },
  びじゅつ: { romanji: "bijutsu", translation: "art (kunst)" },
  げんき: {
    romanji: "genki",
    translation: "healthy / energetic (frisk / energisk)",
  },

  // extras
  しお: { romanji: "shio", translation: "salt / tide (salt / tidevann)" },
  さくら: { romanji: "sakura", translation: "cherry blossom (kirsebærblomst)" },
  にほん: { romanji: "nihon", translation: "Japan" },
  とうきょう: { romanji: "toukyou", translation: "Tokyo" },
  おんせん: { romanji: "onsen", translation: "hot spring (varmt bad)" },
  すいぞくかん: { romanji: "suizokukan", translation: "aquarium (akvarium)" },

  // greetings & expressions
  すみません: { romanji: "sumimasen", translation: "excuse me / sorry (unnskyld)" },
  ごめんなさい: { romanji: "gomennasai", translation: "I'm sorry (beklager)" },
  おねがいします: { romanji: "onegaishimasu", translation: "please (vær så snill)" },
  おやすみなさい: { romanji: "oyasuminasai", translation: "good night (god natt)" },
  いただきます: { romanji: "itadakimasu", translation: "bon appétit (velbekomme)" },
  ごちそうさま: { romanji: "gochisousama", translation: "thanks for the meal (takk for maten)" },
  おめでとう: { romanji: "omedetou", translation: "congratulations (gratulerer)" },
  はじめまして: { romanji: "hajimemashite", translation: "nice to meet you (hyggelig å treffe deg)" },
  いってきます: { romanji: "ittekimasu", translation: "I'm leaving (jeg går nå)" },
  ただいま: { romanji: "tadaima", translation: "I'm home (jeg er hjemme)" },
  おかえり: { romanji: "okaeri", translation: "welcome home (velkommen hjem)" },
  だいじょうぶ: { romanji: "daijoubu", translation: "it's okay (det er greit)" },
  おつかれさま: { romanji: "otsukaresama", translation: "good work (godt jobbet)" },
  こんにちは: { romanji: "konnichiwa", translation: "hello (hei)" },

  // family
  はは: { romanji: "haha", translation: "mother, humble (mor)" },
  あね: { romanji: "ane", translation: "older sister (eldre søster)" },
  おねえさん: { romanji: "oneesan", translation: "older sister, polite (eldre søster)" },
  いもうと: { romanji: "imouto", translation: "younger sister (yngre søster)" },
  おばあさん: { romanji: "obaasan", translation: "grandmother (bestemor)" },
  おじいさん: { romanji: "ojiisan", translation: "grandfather (bestefar)" },
  おくさん: { romanji: "okusan", translation: "wife (kone)" },
  あかちゃん: { romanji: "akachan", translation: "baby (baby / spedbarn)" },
  きょうだい: { romanji: "kyoudai", translation: "siblings (søsken)" },

  // food & drink
  たまご: { romanji: "tamago", translation: "egg" },
  さかな: { romanji: "sakana", translation: "fish (fisk)" },
  とうふ: { romanji: "toufu", translation: "tofu" },
  しょうゆ: { romanji: "shouyu", translation: "soy sauce (soyasaus)" },
  わさび: { romanji: "wasabi", translation: "wasabi" },
  うどん: { romanji: "udon", translation: "udon noodles (udon-nudler)" },
  そば: { romanji: "soba", translation: "buckwheat noodles (bokhvetenudler)" },
  みそしる: { romanji: "misoshiru", translation: "miso soup (misosuppe)" },
  てんぷら: { romanji: "tenpura", translation: "tempura" },
  おすし: { romanji: "osushi", translation: "sushi (polite)" },
  さしみ: { romanji: "sashimi", translation: "sashimi" },
  おかし: { romanji: "okashi", translation: "sweets / snacks (godteri)" },
  ぎゅうにゅう: { romanji: "gyuunyuu", translation: "milk (melk)" },
  さとう: { romanji: "satou", translation: "sugar (sukker)" },
  こしょう: { romanji: "koshou", translation: "pepper" },
  にんじん: { romanji: "ninjin", translation: "carrot (gulrot)" },
  たまねぎ: { romanji: "tamanegi", translation: "onion (løk)" },
  じゃがいも: { romanji: "jagaimo", translation: "potato (potet)" },
  とうもろこし: { romanji: "toumorokoshi", translation: "corn (mais)" },
  きゅうり: { romanji: "kyuuri", translation: "cucumber (agurk)" },
  ぶどう: { romanji: "budou", translation: "grape (drue)" },
  すいか: { romanji: "suika", translation: "watermelon (vannmelon)" },
  おにく: { romanji: "oniku", translation: "meat, polite (kjøtt)" },
  とりにく: { romanji: "toriniku", translation: "chicken meat (kyllingkjøtt)" },
  ぶたにく: { romanji: "butaniku", translation: "pork (svinekjøtt)" },
  ぎゅうにく: { romanji: "gyuuniku", translation: "beef (storfekjøtt)" },

  // body
  かた: { romanji: "kata", translation: "shoulder (skulder)" },
  むね: { romanji: "mune", translation: "chest (bryst)" },
  おなか: { romanji: "onaka", translation: "stomach / belly (mage)" },
  せなか: { romanji: "senaka", translation: "back (rygg)" },
  ひざ: { romanji: "hiza", translation: "knee (kne)" },
  かみ: { romanji: "kami", translation: "hair / paper (hår / papir)" },
  は: { romanji: "ha", translation: "leaf / tooth (blad / tann)" },

  // clothes
  ふく: { romanji: "fuku", translation: "clothes (klær)" },
  くつ: { romanji: "kutsu", translation: "shoes (sko)" },
  くつした: { romanji: "kutsushita", translation: "socks (sokker)" },
  ぼうし: { romanji: "boushi", translation: "hat (lue / hatt)" },
  かばん: { romanji: "kaban", translation: "bag (veske)" },
  かさ: { romanji: "kasa", translation: "umbrella (paraply)" },
  とけい: { romanji: "tokei", translation: "watch / clock (klokke)" },
  さいふ: { romanji: "saifu", translation: "wallet (lommebok)" },

  // home & furniture
  まど: { romanji: "mado", translation: "window (vindu)" },
  いす: { romanji: "isu", translation: "chair (stol)" },
  つくえ: { romanji: "tsukue", translation: "desk (pult / skrivebord)" },
  でんき: { romanji: "denki", translation: "electricity / light (elektrisitet / strøm / lys)" },
  かぎ: { romanji: "kagi", translation: "key (nøkkel)" },
  もの: { romanji: "mono", translation: "thing (ting)" },
  にもつ: { romanji: "nimotsu", translation: "luggage (bagasje)" },
  ごみ: { romanji: "gomi", translation: "trash (søppel)" },
  せっけん: { romanji: "sekken", translation: "soap (såpe)" },
  はぶらし: { romanji: "haburashi", translation: "toothbrush (tannbørste)" },
  はみがきこ: { romanji: "hamigakiko", translation: "toothpaste (tannkrem)" },
  ろうそく: { romanji: "rousoku", translation: "candle (stearinlys)" },
  ライター: { romanji: "raitaa", translation: "lighter (lighter)" },
  マッチ: { romanji: "macchi", translation: "match (fyrstikk)" },
  のり: { romanji: "nori", translation: "glue / seaweed sheet (lim / nori)" },
  ふうとう: { romanji: "fuutou", translation: "envelope (konvolutt)" },
  きって: { romanji: "kitte", translation: "stamp (frimerke)" },
  はしご: { romanji: "hashigo", translation: "ladder (stige)" },
  なわ: { romanji: "nawa", translation: "rope (tau)" },
  くさり: { romanji: "kusari", translation: "chain (kjetting / kjede)" },
  ほうき: { romanji: "houki", translation: "broom (kost)" },
  バケツ: { romanji: "baketsu", translation: "bucket (bøtte)" },
  ぞうきん: { romanji: "zoukin", translation: "cleaning rag (klut)" },
  おふろ: { romanji: "ofuro", translation: "bath (bad)" },
  だいどころ: { romanji: "daidokoro", translation: "kitchen (kjøkken)" },
  げんかん: { romanji: "genkan", translation: "entrance (inngang)" },

  // transport & places
  みち: { romanji: "michi", translation: "road / way (vei)" },
  はし: { romanji: "hashi", translation: "bridge / chopsticks (bro / spisepinner)" },
  きっぷ: { romanji: "kippu", translation: "ticket (billett)" },
  ちず: { romanji: "chizu", translation: "map (kart)" },
  じんじゃ: { romanji: "jinja", translation: "shrine (helligdom)" },
  おてら: { romanji: "otera", translation: "temple (tempel)" },
  こうばん: { romanji: "kouban", translation: "police box (politistasjon)" },
  ゆうびんきょく: { romanji: "yuubinkyoku", translation: "post office (postkontor)" },
  ぎんこう: { romanji: "ginkou", translation: "bank" },
  やくしょ: { romanji: "yakusho", translation: "city hall (rådhus)" },
  たいしかん: { romanji: "taishikan", translation: "embassy (ambassade)" },

  // nature & weather
  かぜ: { romanji: "kaze", translation: "wind (vind)" },
  くもり: { romanji: "kumori", translation: "cloudy (overskyet)" },
  たいふう: { romanji: "taifuu", translation: "typhoon (tyfon)" },
  じしん: { romanji: "jishin", translation: "earthquake (jordskjelv)" },
  はる: { romanji: "haru", translation: "spring (vår)" },
  あき: { romanji: "aki", translation: "autumn (høst)" },
  つち: { romanji: "tsuchi", translation: "soil / earth (jord)" },
  はやし: { romanji: "hayashi", translation: "grove / woods (lund)" },
  しま: { romanji: "shima", translation: "island (øy)" },
  たき: { romanji: "taki", translation: "waterfall (foss)" },

  // animals
  さる: { romanji: "saru", translation: "monkey (ape)" },
  うま: { romanji: "uma", translation: "horse (hest)" },
  ぶた: { romanji: "buta", translation: "pig (gris)" },
  とら: { romanji: "tora", translation: "tiger" },
  くま: { romanji: "kuma", translation: "bear (bjørn)" },
  しろくま: { romanji: "shirokuma", translation: "polar bear (isbjørn)" },
  おおかみ: { romanji: "ookami", translation: "wolf (ulv)" },
  きつね: { romanji: "kitsune", translation: "fox (rev)" },
  しか: { romanji: "shika", translation: "deer (hjort)" },
  トナカイ: { romanji: "tonakai", translation: "reindeer (reinsdyr)" },
  ひょう: { romanji: "hyou", translation: "leopard (leopard)" },
  ゴリラ: { romanji: "gorira", translation: "gorilla" },
  カバ: { romanji: "kaba", translation: "hippo (flodhest)" },
  サイ: { romanji: "sai", translation: "rhino (neshorn)" },
  ねずみ: { romanji: "nezumi", translation: "mouse / rat (mus)" },
  かめ: { romanji: "kame", translation: "turtle / tortoise (skilpadde)" },
  たぬき: { romanji: "tanuki", translation: "raccoon dog (vaskebjørn)" },
  へび: { romanji: "hebi", translation: "snake (slange)" },
  いるか: { romanji: "iruka", translation: "dolphin (delfin)" },
  ぞう: { romanji: "zou", translation: "elephant (elefant)" },
  きんぎょ: { romanji: "kingyo", translation: "goldfish (gullfisk)" },
  ちょう: { romanji: "chou", translation: "butterfly (sommerfugl)" },

  // time
  きょう: { romanji: "kyou", translation: "today (i dag)" },
  あした: { romanji: "ashita", translation: "tomorrow (i morgen)" },
  きのう: { romanji: "kinou", translation: "yesterday (i går)" },
  あさ: { romanji: "asa", translation: "morning (morgen)" },
  ひる: { romanji: "hiru", translation: "noon / daytime (midt på dagen)" },
  ばん: { romanji: "ban", translation: "evening (kveld)" },
  いま: { romanji: "ima", translation: "now (nå)" },
  あと: { romanji: "ato", translation: "later / after (senere / etter)" },
  まえ: { romanji: "mae", translation: "before / in front (før / foran)" },
  まいあさ: { romanji: "maiasa", translation: "every morning (hver morgen)" },
  まいばん: { romanji: "maiban", translation: "every evening (hver kveld)" },
  らいねん: { romanji: "rainen", translation: "next year (neste år)" },
  きょねん: { romanji: "kyonen", translation: "last year (i fjor)" },
  しゅうまつ: { romanji: "shuumatsu", translation: "weekend (helg)" },

  // adjectives
  おおきい: { romanji: "ookii", translation: "big (stor)" },
  ちいさい: { romanji: "chiisai", translation: "small (liten)" },
  あたらしい: { romanji: "atarashii", translation: "new (ny)" },
  ふるい: { romanji: "furui", translation: "old, things (gammel)" },
  たかい: { romanji: "takai", translation: "expensive / tall (dyr / høy)" },
  やすい: { romanji: "yasui", translation: "cheap (billig)" },
  ながい: { romanji: "nagai", translation: "long (lang)" },
  みじかい: { romanji: "mijikai", translation: "short (kort)" },
  あつい: { romanji: "atsui", translation: "hot (varm)" },
  さむい: { romanji: "samui", translation: "cold (kald)" },
  おいしい: { romanji: "oishii", translation: "delicious (deilig / godt)" },
  まずい: { romanji: "mazui", translation: "bad tasting (vondt / ekkelt)" },
  つよい: { romanji: "tsuyoi", translation: "strong (sterk)" },
  よわい: { romanji: "yowai", translation: "weak (svak)" },
  はやい: { romanji: "hayai", translation: "fast / early (rask / tidlig)" },
  おそい: { romanji: "osoi", translation: "slow / late (treg / sen)" },
  あかるい: { romanji: "akarui", translation: "bright (lys)" },
  くらい: { romanji: "kurai", translation: "dark (mørk)" },
  むずかしい: { romanji: "muzukashii", translation: "difficult (vanskelig)" },
  やさしい: { romanji: "yasashii", translation: "kind / easy (snill / enkel)" },
  たのしい: { romanji: "tanoshii", translation: "fun (morsomt / gøy)" },
  おもしろい: { romanji: "omoshiroi", translation: "interesting (interessant)" },
  つまらない: { romanji: "tsumaranai", translation: "boring (kjedelig)" },
  すごい: { romanji: "sugoi", translation: "amazing (utrolig)" },
  かわいい: { romanji: "kawaii", translation: "cute (søt)" },
  きれい: { romanji: "kirei", translation: "beautiful / clean (vakker / ren)" },
  こわい: { romanji: "kowai", translation: "scary (skummelt)" },
  いそがしい: { romanji: "isogashii", translation: "busy (opptatt)" },
  ひまな: { romanji: "himana", translation: "free / not busy (ledig)" },

  // verbs (dictionary form)
  たべる: { romanji: "taberu", translation: "to eat (å spise)" },
  のむ: { romanji: "nomu", translation: "to drink (å drikke)" },
  みる: { romanji: "miru", translation: "to see / watch (å se)" },
  きく: { romanji: "kiku", translation: "to listen / ask / chrysanthemum (å lytte / spørre / krysantemum)" },
  よむ: { romanji: "yomu", translation: "to read (å lese)" },
  かく: { romanji: "kaku", translation: "to write / angle (å skrive / vinkel)" },
  はなす: { romanji: "hanasu", translation: "to speak (å snakke)" },
  いく: { romanji: "iku", translation: "to go (å gå / dra)" },
  くる: { romanji: "kuru", translation: "to come (å komme)" },
  かえる: { romanji: "kaeru", translation: "frog / to return (frosk / å vende tilbake)" },
  ねる: { romanji: "neru", translation: "to sleep (å sove)" },
  おきる: { romanji: "okiru", translation: "to wake up (å våkne)" },
  あそぶ: { romanji: "asobu", translation: "to play (å leke)" },
  つくる: { romanji: "tsukuru", translation: "to make (å lage)" },
  かう: { romanji: "kau", translation: "to buy (å kjøpe)" },
  うる: { romanji: "uru", translation: "to sell (å selge)" },
  おしえる: { romanji: "oshieru", translation: "to teach (å lære bort)" },
  ならう: { romanji: "narau", translation: "to learn (å lære)" },
  あるく: { romanji: "aruku", translation: "to walk (å gå)" },
  はしる: { romanji: "hashiru", translation: "to run (å løpe)" },
  およぐ: { romanji: "oyogu", translation: "to swim (å svømme)" },
  うたう: { romanji: "utau", translation: "to sing (å synge)" },
  おどる: { romanji: "odoru", translation: "to dance (å danse)" },
  まつ: { romanji: "matsu", translation: "to wait / pine tree (å vente / furu)" },
  わかる: { romanji: "wakaru", translation: "to understand (å forstå)" },
  しる: { romanji: "shiru", translation: "to know (å vite)" },
  おもう: { romanji: "omou", translation: "to think (å tenke)" },
  あげる: { romanji: "ageru", translation: "to give / deep-fry (å gi / fritere)" },
  もらう: { romanji: "morau", translation: "to receive (å motta)" },
  あう: { romanji: "au", translation: "to meet (å møte)" },
  つかう: { romanji: "tsukau", translation: "to use (å bruke)" },
  はたらく: { romanji: "hataraku", translation: "to work (å jobbe)" },
  やすむ: { romanji: "yasumu", translation: "to rest (å hvile)" },
  あける: { romanji: "akeru", translation: "to open (å åpne)" },
  しめる: { romanji: "shimeru", translation: "to close (å lukke)" },
  きる: { romanji: "kiru", translation: "to wear / cut (å ha på / klippe)" },

  // useful nouns
  なまえ: { romanji: "namae", translation: "name (navn)" },
  ことし: { romanji: "kotoshi", translation: "this year (i år)" },
  にほんじん: { romanji: "nihonjin", translation: "Japanese person (japaner)" },
  がいこくじん: { romanji: "gaikokujin", translation: "foreigner (utlending)" },
  りゅうがくせい: { romanji: "ryuugakusei", translation: "exchange student (utvekslingsstudent)" },
  せいかつ: { romanji: "seikatsu", translation: "daily life (dagligliv)" },
  しゅみ: { romanji: "shumi", translation: "hobby" },
  あいさつ: { romanji: "aisatsu", translation: "greeting (hilsen)" },
  やくそく: { romanji: "yakusoku", translation: "promise (løfte)" },
  じかん: { romanji: "jikan", translation: "time (tid)" },
  ばしょ: { romanji: "basho", translation: "place (sted)" },
  りゆう: { romanji: "riyuu", translation: "reason (grunn)" },
  きもち: { romanji: "kimochi", translation: "feeling (følelse)" },
  こころ: { romanji: "kokoro", translation: "heart / mind (hjerte / sinn)" },
  ちから: { romanji: "chikara", translation: "power / strength (kraft / styrke)" },
  いのち: { romanji: "inochi", translation: "life (liv)" },
  へいわ: { romanji: "heiwa", translation: "peace (fred)" },
  しぜん: { romanji: "shizen", translation: "nature (natur)" },
  けしき: { romanji: "keshiki", translation: "scenery (utsikt / landskap)" },
  おみやげ: { romanji: "omiyage", translation: "souvenir (gave / suvenir)" },
  おまもり: { romanji: "omamori", translation: "good luck charm (lykkebringer)" },

  // colors
  あか: { romanji: "aka", translation: "red (rød)" },
  しろ: { romanji: "shiro", translation: "white (hvit)" },
  くろ: { romanji: "kuro", translation: "black (svart)" },
  きいろ: { romanji: "kiiro", translation: "yellow (gul)" },
  みどり: { romanji: "midori", translation: "green (grønn)" },
  ちゃいろ: { romanji: "chairo", translation: "brown (brun)" },
  むらさき: { romanji: "murasaki", translation: "purple (lilla)" },
  オレンジいろ: { romanji: "orenjiro", translation: "orange (oransje)" },
  ピンク: { romanji: "pinku", translation: "pink (rosa)" },
  はいいろ: { romanji: "haiiro", translation: "grey (grå)" },
  きんいろ: { romanji: "kin'iro", translation: "gold colour (gull / gyllen)" },
  ぎんいろ: { romanji: "gin'iro", translation: "silver colour (sølv)" },
  みずいろ: { romanji: "mizuiro", translation: "light blue (lyseblå)" },

  // numbers & counters
  ひとつ: { romanji: "hitotsu", translation: "one thing (én ting)" },
  ふたつ: { romanji: "futatsu", translation: "two things (to ting)" },
  みっつ: { romanji: "mittsu", translation: "three things (tre ting)" },
  よっつ: { romanji: "yottsu", translation: "four things (fire ting)" },
  いつつ: { romanji: "itsutsu", translation: "five things (fem ting)" },

  // question words
  なに: { romanji: "nani", translation: "what (hva)" },
  だれ: { romanji: "dare", translation: "who (hvem)" },
  どこ: { romanji: "doko", translation: "where (hvor)" },
  いつ: { romanji: "itsu", translation: "when (når)" },
  なぜ: { romanji: "naze", translation: "why (hvorfor)" },
  いくら: { romanji: "ikura", translation: "how much (hvor mye)" },
  どうやって: { romanji: "douyatte", translation: "how (hvordan)" },

  // extra 2-char
  かわ: { romanji: "kawa", translation: "river / skin / leather (elv / hud / lær)" },
  くも: { romanji: "kumo", translation: "spider / cloud (edderkopp / sky)" },
  なみ: { romanji: "nami", translation: "wave (bølge)" },
  ほね: { romanji: "hone", translation: "bone (bein)" },
  みそ: { romanji: "miso", translation: "miso" },
  もも: { romanji: "momo", translation: "peach (fersken)" },
  かに: { romanji: "kani", translation: "crab (krabbe)" },
  うし: { romanji: "ushi", translation: "cow (ku)" },
  こい: { romanji: "koi", translation: "carp (karpe)" },
  にわ: { romanji: "niwa", translation: "garden (hage)" },
  くさ: { romanji: "kusa", translation: "grass (gress)" },
  ふゆ: { romanji: "fuyu", translation: "winter (vinter)" },
  なか: { romanji: "naka", translation: "middle (midten)" },
  きり: { romanji: "kiri", translation: "fog (tåke)" },
  つる: { romanji: "tsuru", translation: "crane (trane)" },
  さか: { romanji: "saka", translation: "slope / hill (bakke)" },
  ゆび: { romanji: "yubi", translation: "finger" },
  いと: { romanji: "ito", translation: "thread (tråd)" },
  にし: { romanji: "nishi", translation: "west (vest)" },
  らく: { romanji: "raku", translation: "easy (lett)" },
  ゆめ: { romanji: "yume", translation: "dream (drøm)" },
  よる: { romanji: "yoru", translation: "night (natt)" },
  まめ: { romanji: "mame", translation: "bean (bønne)" },
  いわ: { romanji: "iwa", translation: "rock / cliff (klippe)" },
  むら: { romanji: "mura", translation: "village (landsby)" },
  すな: { romanji: "suna", translation: "sand" },
  いけ: { romanji: "ike", translation: "pond (dam)" },
  かべ: { romanji: "kabe", translation: "wall (vegg)" },
  うで: { romanji: "ude", translation: "arm" },
  ひも: { romanji: "himo", translation: "cord / string (snor)" },
  くび: { romanji: "kubi", translation: "neck (hals)" },

  // extra 3-char
  うさぎ: { romanji: "usagi", translation: "rabbit (kanin)" },
  いちご: { romanji: "ichigo", translation: "strawberry (jordbær)" },
  こども: { romanji: "kodomo", translation: "child (barn)" },
  はなし: { romanji: "hanashi", translation: "story (fortelling)" },
  まつり: { romanji: "matsuri", translation: "festival" },
  みかん: { romanji: "mikan", translation: "mandarin / tangerine (mandarin)" },
  ほたる: { romanji: "hotaru", translation: "firefly (ildflue)" },
  まくら: { romanji: "makura", translation: "pillow (pute)" },
  りんご: { romanji: "ringo", translation: "apple (eple)" },
  わかめ: { romanji: "wakame", translation: "seaweed (tang)" },
  くじら: { romanji: "kujira", translation: "whale (hval)" },
  ことば: { romanji: "kotoba", translation: "word / language (ord / språk)" },
  つばさ: { romanji: "tsubasa", translation: "wings (vinger)" },
  とかげ: { romanji: "tokage", translation: "lizard (øgle)" },
  はなび: { romanji: "hanabi", translation: "fireworks (fyrverkeri)" },
  ひかり: { romanji: "hikari", translation: "light (lys)" },
  ふくろ: { romanji: "fukuro", translation: "bag (pose)" },
  めがね: { romanji: "megane", translation: "glasses (briller)" },
  ゆびわ: { romanji: "yubiwa", translation: "ring" },
  むかし: {
    romanji: "mukashi",
    translation: "old times / the past (fortiden)",
  },
  みなみ: { romanji: "minami", translation: "south (sør)" },
  ひるね: { romanji: "hirune", translation: "nap (middagslur)" },
  けむり: { romanji: "kemuri", translation: "smoke (røyk)" },
  かがみ: { romanji: "kagami", translation: "mirror (speil)" },
  しずか: { romanji: "shizuka", translation: "quiet (stille)" },
  さんぽ: { romanji: "sanpo", translation: "walk / stroll (spasertur)" },
  まんが: { romanji: "manga", translation: "manga / comic (tegneserie)" },
  ひつじ: { romanji: "hitsuji", translation: "sheep (sau)" },
  なかま: { romanji: "nakama", translation: "companion (kamerat)" },
  あおい: { romanji: "aoi", translation: "blue (blå)" },
  わかい: { romanji: "wakai", translation: "young (ung)" },
  いちば: { romanji: "ichiba", translation: "market (marked)" },
  うなぎ: { romanji: "unagi", translation: "eel (ål)" },

  // extra 4-char
  おにぎり: { romanji: "onigiri", translation: "rice ball (risball)" },
  のりもの: {
    romanji: "norimono",
    translation: "vehicle / transport (transportmiddel)",
  },
  にわとり: { romanji: "niwatori", translation: "chicken (kylling)" },
  てぶくろ: { romanji: "tebukuro", translation: "gloves (hansker)" },
  もんだい: { romanji: "mondai", translation: "problem" },
  ひこうき: { romanji: "hikouki", translation: "airplane (fly)" },
  たいよう: { romanji: "taiyou", translation: "sun (sol)" },
  かいもの: { romanji: "kaimono", translation: "shopping" },
  えんぴつ: { romanji: "enpitsu", translation: "pencil (blyant)" },
  どうぶつ: { romanji: "doubutsu", translation: "animal (dyr)" },
  たてもの: { romanji: "tatemono", translation: "building (bygning)" },
  まいにち: { romanji: "mainichi", translation: "every day (hver dag)" },
  ちかてつ: { romanji: "chikatetsu", translation: "subway (T-bane)" },
  べんとう: { romanji: "bentou", translation: "lunch box (matpakke)" },
  やきそば: { romanji: "yakisoba", translation: "yakisoba" },
  にほんご: { romanji: "nihongo", translation: "Japanese language (japansk)" },
  おもちゃ: { romanji: "omocha", translation: "toy (leketøy)" },
  おとうと: { romanji: "otouto", translation: "younger brother (yngre bror)" },
  はんたい: { romanji: "hantai", translation: "opposite (motsatt)" },
  こうこう: { romanji: "koukou", translation: "high school (videregående)" },
  おまつり: { romanji: "omatsuri", translation: "festival" },

  // extra 5-char
  ぬいぐるみ: { romanji: "nuigurumi", translation: "stuffed animal (kosedyr)" },
  べんきょう: { romanji: "benkyou", translation: "study (studere)" },
  としょかん: { romanji: "toshokan", translation: "library (bibliotek)" },
  じどうしゃ: { romanji: "jidousha", translation: "car (bil)" },
  にんぎょう: { romanji: "ningyou", translation: "doll (dukke)" },
  おかあさん: { romanji: "okaasan", translation: "mother (mor)" },
  おとうさん: { romanji: "otousan", translation: "father (far)" },
  おにいさん: { romanji: "oniisan", translation: "older brother (eldre bror)" },
  あさごはん: { romanji: "asagohan", translation: "breakfast (frokost)" },
  ひるごはん: { romanji: "hirugohan", translation: "lunch (lunsj)" },
  よるごはん: { romanji: "yorugohan", translation: "dinner (middag)" },
  ちゅうごく: { romanji: "chuugoku", translation: "China (Kina)" },

  // 6-char
  しんかんせん: {
    romanji: "shinkansen",
    translation: "bullet train (hurtigtog)",
  },
  うんどうかい: { romanji: "undoukai", translation: "sports day (idrettsdag)" },
  はくぶつかん: { romanji: "hakubutsukan", translation: "museum" },
  むかしばなし: {
    romanji: "mukashibanashi",
    translation: "folk tale / fairy tale (eventyr)",
  },
  こうこうせい: {
    romanji: "koukousei",
    translation: "high school student (videregående-elev)",
  },

  // 7-char
  しょうがっこう: {
    romanji: "shougakkou",
    translation: "elementary school (barneskole)",
  },
  ちゅうがっこう: {
    romanji: "chuugakkou",
    translation: "middle school (ungdomsskole)",
  },
  にほんりょうり: {
    romanji: "nihonryouri",
    translation: "Japanese cuisine (japansk mat)",
  },
  どうぞよろしく: {
    romanji: "douzoyoroshiku",
    translation: "nice to meet you (hyggelig å møte deg)",
  },

  // 8-char
  こうこうがっこう: {
    romanji: "koukougakkou",
    translation: "high school (videregående skole)",
  },
  どうもありがとう: {
    romanji: "doumoarigatou",
    translation: "thank you very much (tusen takk)",
  },

  // 9-char
  おはようございます: {
    romanji: "ohayougozaimasu",
    translation: "good morning, formal (god morgen (høflig))",
  },

  // more food & drink
  もち: { romanji: "mochi", translation: "rice cake (riskake)" },
  なべ: { romanji: "nabe", translation: "pot / hot pot (gryte)" },
  やきとり: { romanji: "yakitori", translation: "grilled chicken (grillet kylling)" },
  おこのみやき: { romanji: "okonomiyaki", translation: "savory pancake (japansk pannekake)" },
  たこやき: { romanji: "takoyaki", translation: "octopus balls (blekksprutboller)" },
  おでん: { romanji: "oden", translation: "oden stew (oden-gryte)" },
  ぎょうざ: { romanji: "gyouza", translation: "dumplings" },
  どんぶり: { romanji: "donburi", translation: "rice bowl (risbolle)" },
  こめ: { romanji: "kome", translation: "rice, uncooked (ris)" },
  むぎ: { romanji: "mugi", translation: "wheat (hvete)" },
  なし: { romanji: "nashi", translation: "pear (pære)" },
  かき: { romanji: "kaki", translation: "persimmon (kaki)" },

  // more animals
  ありくい: { romanji: "arikui", translation: "anteater (maursluker)" },
  こうもり: { romanji: "koumori", translation: "bat (flaggermus)" },
  ふくろう: { romanji: "fukurou", translation: "owl (ugle)" },
  つばめ: { romanji: "tsubame", translation: "swallow (svale)" },
  すずめ: { romanji: "suzume", translation: "sparrow (spurv)" },
  からす: { romanji: "karasu", translation: "crow (kråke)" },
  はと: { romanji: "hato", translation: "pigeon (due)" },
  たか: { romanji: "taka", translation: "hawk (hauk)" },
  わし: { romanji: "washi", translation: "eagle (ørn)" },
  あひる: { romanji: "ahiru", translation: "duck (and)" },
  かもめ: { romanji: "kamome", translation: "seagull (måke)" },
  やぎ: { romanji: "yagi", translation: "goat (geit)" },
  りす: { romanji: "risu", translation: "squirrel (ekorn)" },
  もぐら: { romanji: "mogura", translation: "mole (moldvarp)" },
  かたつむり: { romanji: "katatsumuri", translation: "snail (snegle)" },
  てんとうむし: { romanji: "tentoumushi", translation: "ladybug (marihøne)" },
  かぶとむし: { romanji: "kabutomushi", translation: "beetle (bille)" },
  せみ: { romanji: "semi", translation: "cicada (sikade)" },
  とんぼ: { romanji: "tonbo", translation: "dragonfly (øyenstikker)" },

  // more body
  ひじ: { romanji: "hiji", translation: "elbow (albue)" },
  のど: { romanji: "nodo", translation: "throat (hals / svelg)" },
  くちびる: { romanji: "kuchibiru", translation: "lips (lepper)" },
  ほほ: { romanji: "hoho", translation: "cheek (kinn)" },
  ひたい: { romanji: "hitai", translation: "forehead (panne)" },
  あご: { romanji: "ago", translation: "chin (hake)" },
  つめ: { romanji: "tsume", translation: "nail / claw (negl)" },
  かかと: { romanji: "kakato", translation: "heel (hæl)" },

  // home & daily life
  そうじ: { romanji: "souji", translation: "cleaning (rengjøring)" },
  せんたく: { romanji: "sentaku", translation: "laundry (klesvask)" },
  りょうり: { romanji: "ryouri", translation: "cooking (matlaging)" },
  かいだん: { romanji: "kaidan", translation: "stairs (trapp)" },
  やね: { romanji: "yane", translation: "roof (tak)" },
  ゆか: { romanji: "yuka", translation: "floor (gulv)" },
  てんじょう: { romanji: "tenjou", translation: "ceiling (tak innvendig)" },
  おしいれ: { romanji: "oshiire", translation: "closet (skap)" },
  たな: { romanji: "tana", translation: "shelf (hylle)" },
  たたみ: { romanji: "tatami", translation: "tatami mat (tatamimatte)" },
  ふとん: { romanji: "futon", translation: "futon (futon)" },
  はさみ: { romanji: "hasami", translation: "scissors (saks)" },

  // more transport & directions
  ひがし: { romanji: "higashi", translation: "east (øst)" },
  みぎ: { romanji: "migi", translation: "right (høyre)" },
  ひだり: { romanji: "hidari", translation: "left (venstre)" },
  まっすぐ: { romanji: "massugu", translation: "straight ahead (rett frem)" },
  こうさてん: { romanji: "kousaten", translation: "intersection (veikryss)" },
  しんごう: { romanji: "shingou", translation: "traffic light (trafikklys)" },
  ちゅうしゃじょう: { romanji: "chuushajou", translation: "parking lot (parkering)" },
  がそりんすたんど: { romanji: "gasorinsutando", translation: "gas station (bensinstasjon)" },
  アスファルト: { romanji: "asufaruto", translation: "asphalt (asfalt)" },
  ほどう: { romanji: "hodou", translation: "sidewalk (fortau)" },
  しゃどう: { romanji: "shadou", translation: "roadway (kjørebane)" },
  おうだんほどう: { romanji: "oudanhodou", translation: "crosswalk (fotgjengerovergang)" },
  とんねる: { romanji: "tonneru", translation: "tunnel" },
  こうそくどうろ: { romanji: "kousokudouro", translation: "highway (motorvei)" },
  いっぽうつうこう: { romanji: "ippoutsuukou", translation: "one-way traffic (enveiskjøring)" },
  ガードレール: { romanji: "gaadoreeru", translation: "guardrail (autovern)" },
  マンホール: { romanji: "manhooru", translation: "manhole (kum)" },
  ひょうしき: { romanji: "hyoushiki", translation: "road sign (trafikkskilt)" },

  // school & work
  きょうかしょ: { romanji: "kyoukasho", translation: "textbook (lærebok)" },
  しけん: { romanji: "shiken", translation: "exam (eksamen)" },
  しゅうしょく: { romanji: "shuushoku", translation: "getting a job (å få jobb)" },
  かいぎ: { romanji: "kaigi", translation: "meeting (møte)" },
  しゃちょう: { romanji: "shachou", translation: "company president (direktør)" },
  ぶちょう: { romanji: "buchou", translation: "department head (avdelingsleder)" },
  どうりょう: { romanji: "douryou", translation: "colleague (kollega)" },
  きゅうりょう: { romanji: "kyuuryou", translation: "salary (lønn)" },
  ざんぎょう: { romanji: "zangyou", translation: "overtime (overtid)" },
  にっき: { romanji: "nikki", translation: "diary (dagbok)" },
  じしょ: { romanji: "jisho", translation: "dictionary (ordbok)" },
  ざっし: { romanji: "zasshi", translation: "magazine (magasin / tidsskrift)" },
  ずかん: { romanji: "zukan", translation: "encyclopedia / picture book (leksikon / oppslagsverk)" },
  まんがほん: { romanji: "mangahon", translation: "comic book (tegneseriebok)" },
  えほん: { romanji: "ehon", translation: "picture book (bildebok)" },
  えんそく: { romanji: "ensoku", translation: "excursion (utflukt)" },
  うんどう: { romanji: "undou", translation: "exercise (trening)" },

  // more feelings & personality
  おこる: { romanji: "okoru", translation: "to get angry (å bli sint)" },
  なく: { romanji: "naku", translation: "to cry (å gråte)" },
  わらう: { romanji: "warau", translation: "to laugh (å le)" },
  さびしい: { romanji: "sabishii", translation: "lonely (ensom)" },
  はずかしい: { romanji: "hazukashii", translation: "embarrassing (flaut)" },
  うらやましい: { romanji: "urayamashii", translation: "envious (misunnelig)" },
  なつかしい: { romanji: "natsukashii", translation: "nostalgic (nostalgisk)" },
  くやしい: { romanji: "kuyashii", translation: "frustrating (frustrerende)" },

  // more verbs
  あらう: { romanji: "arau", translation: "to wash (å vaske)" },
  みがく: { romanji: "migaku", translation: "to brush / polish (å pusse)" },
  ぬぐ: { romanji: "nugu", translation: "to take off, clothes (å ta av)" },
  すわる: { romanji: "suwaru", translation: "to sit (å sitte)" },
  たつ: { romanji: "tatsu", translation: "to stand (å stå)" },
  のぼる: { romanji: "noboru", translation: "to climb (å klatre)" },
  おりる: { romanji: "oriru", translation: "to get off (å gå av)" },
  わたる: { romanji: "wataru", translation: "to cross (å krysse)" },
  とぶ: { romanji: "tobu", translation: "to fly / jump (å fly / hoppe)" },
  ひく: { romanji: "hiku", translation: "to pull / play / subtract (å dra / spille / trekke fra)" },
  おす: { romanji: "osu", translation: "to push (å dytte)" },
  もつ: { romanji: "motsu", translation: "to hold (å holde)" },
  おく: { romanji: "oku", translation: "to put / place (å legge)" },
  なおす: { romanji: "naosu", translation: "to fix / heal (å fikse / helbrede)" },
  こわす: { romanji: "kowasu", translation: "to break (å ødelegge)" },
  なげる: { romanji: "nageru", translation: "to throw (å kaste)" },
  とる: { romanji: "toru", translation: "to take (å ta)" },
  えらぶ: { romanji: "erabu", translation: "to choose (å velge)" },
  さがす: { romanji: "sagasu", translation: "to search (å lete)" },
  みつける: { romanji: "mitsukeru", translation: "to find (å finne)" },
  きめる: { romanji: "kimeru", translation: "to decide (å bestemme)" },
  はじめる: { romanji: "hajimeru", translation: "to begin (å begynne)" },
  おわる: { romanji: "owaru", translation: "to end (å avslutte)" },
  つづける: { romanji: "tsudukeru", translation: "to continue (å fortsette)" },
  やめる: { romanji: "yameru", translation: "to quit (å slutte)" },
  いそぐ: { romanji: "isogu", translation: "to hurry (å skynde seg)" },
  おくれる: { romanji: "okureru", translation: "to be late (å være sen)" },
  まちがえる: { romanji: "machigaeru", translation: "to make a mistake (å ta feil)" },
  てつだう: { romanji: "tetsudau", translation: "to help (å hjelpe)" },
  たすける: { romanji: "tasukeru", translation: "to rescue (å redde)" },
  しんじる: { romanji: "shinjiru", translation: "to believe (å tro)" },
  ねがう: { romanji: "negau", translation: "to wish (å ønske)" },
  いのる: { romanji: "inoru", translation: "to pray (å be)" },
  よろこぶ: { romanji: "yorokobu", translation: "to rejoice (å glede seg)" },
  おどろく: { romanji: "odoroku", translation: "to be surprised (å bli overrasket)" },
  つかれる: { romanji: "tsukareru", translation: "to get tired (å bli sliten)" },
  なれる: { romanji: "nareru", translation: "to get used to (å venne seg til)" },
  かわる: { romanji: "kawaru", translation: "to change (å endre seg)" },
  まもる: { romanji: "mamoru", translation: "to protect (å beskytte)" },
  すてる: { romanji: "suteru", translation: "to throw away (å kaste)" },
  ひろう: { romanji: "hirou", translation: "to pick up (å plukke opp)" },
  よぶ: { romanji: "yobu", translation: "to call (å kalle / rope)" },
  こたえる: { romanji: "kotaeru", translation: "to answer (å svare)" },
  たのむ: { romanji: "tanomu", translation: "to request (å be om)" },
  かりる: { romanji: "kariru", translation: "to borrow (å låne)" },
  かす: { romanji: "kasu", translation: "to lend (å låne ut)" },
  はらう: { romanji: "harau", translation: "to pay (å betale)" },
  おぼえる: { romanji: "oboeru", translation: "to memorize (å huske)" },
  わすれる: { romanji: "wasureru", translation: "to forget (å glemme)" },
  きこえる: { romanji: "kikoeru", translation: "to be audible (å høres)" },
  みえる: { romanji: "mieru", translation: "to be visible (å synes)" },

  // more adjectives
  あまい: { romanji: "amai", translation: "sweet (søt)" },
  にがい: { romanji: "nigai", translation: "bitter" },
  すっぱい: { romanji: "suppai", translation: "sour (sur)" },
  からい: { romanji: "karai", translation: "spicy (sterk)" },
  しょっぱい: { romanji: "shoppai", translation: "salty (salt)" },
  かたい: { romanji: "katai", translation: "hard (hard)" },
  やわらかい: { romanji: "yawarakai", translation: "soft (myk)" },
  あたたかい: { romanji: "atatakai", translation: "warm (varm)" },
  すずしい: { romanji: "suzushii", translation: "cool (sval)" },
  せまい: { romanji: "semai", translation: "narrow (trang)" },
  ひろい: { romanji: "hiroi", translation: "spacious / wide (bred / romslig)" },
  ふかい: { romanji: "fukai", translation: "deep (dyp)" },
  あさい: { romanji: "asai", translation: "shallow (grunn)" },
  おもい: { romanji: "omoi", translation: "heavy (tung)" },
  かるい: { romanji: "karui", translation: "light, weight (lett)" },
  うるさい: { romanji: "urusai", translation: "noisy (bråkete)" },
  しずかな: { romanji: "shizukana", translation: "quiet (stille)" },
  きたない: { romanji: "kitanai", translation: "dirty (skitten)" },
  きけんな: { romanji: "kikenna", translation: "dangerous (farlig)" },
  あんぜんな: { romanji: "anzenna", translation: "safe (trygg)" },
  べんりな: { romanji: "benrina", translation: "convenient (praktisk)" },
  ふべんな: { romanji: "fubenna", translation: "inconvenient (upraktisk)" },
  しんせつな: { romanji: "shinsetsuna", translation: "kind (vennlig)" },
  まじめな: { romanji: "majimena", translation: "serious (seriøs)" },
  げんきな: { romanji: "genkina", translation: "healthy / lively (frisk / livlig)" },
  ひつような: { romanji: "hitsuyouna", translation: "necessary (nødvendig)" },
  とくべつな: { romanji: "tokubetsuna", translation: "special (spesiell)" },
  ゆうめいな: { romanji: "yuumeina", translation: "famous (berømt)" },
  たいせつな: { romanji: "taisetsuna", translation: "important (viktig)" },
  ざんねんな: { romanji: "zannenna", translation: "regrettable (synd)" },

  // more useful nouns
  くすり: { romanji: "kusuri", translation: "medicine (medisin)" },
  びょうき: { romanji: "byouki", translation: "illness (sykdom)" },
  ねつ: { romanji: "netsu", translation: "heat / fever (varme / feber)" },
  せき: { romanji: "seki", translation: "cough (hoste)" },
  けが: { romanji: "kega", translation: "injury (skade)" },
  いたみ: { romanji: "itami", translation: "pain (smerte)" },
  しあわせ: { romanji: "shiawase", translation: "happiness (lykke)" },
  ゆうき: { romanji: "yuuki", translation: "courage (mot)" },
  のぞみ: { romanji: "nozomi", translation: "hope / wish (håp)" },
  しんぱい: { romanji: "shinpai", translation: "worry (bekymring)" },
  あんしん: { romanji: "anshin", translation: "relief (lettelse)" },
  じゆう: { romanji: "jiyuu", translation: "freedom (frihet)" },
  どりょく: { romanji: "doryoku", translation: "effort (innsats)" },
  せいこう: { romanji: "seikou", translation: "success (suksess)" },
  しっぱい: { romanji: "shippai", translation: "failure (feil / nederlag)" },
  けいけん: { romanji: "keiken", translation: "experience (erfaring)" },
  おもいで: { romanji: "omoide", translation: "memory / keepsake (minne)" },
  みらい: { romanji: "mirai", translation: "future (fremtid)" },
  かこ: { romanji: "kako", translation: "past (fortid)" },
  でんとう: { romanji: "dentou", translation: "tradition (tradisjon)" },
  ぶんか: { romanji: "bunka", translation: "culture (kultur)" },
  しゃかい: { romanji: "shakai", translation: "society (samfunn)" },
  せいじ: { romanji: "seiji", translation: "politics (politikk)" },
  けいざい: { romanji: "keizai", translation: "economy (økonomi)" },
  かんきょう: { romanji: "kankyou", translation: "environment (miljø)" },
  きかい: { romanji: "kikai", translation: "machine / opportunity (maskin / mulighet)" },
  わだい: { romanji: "wadai", translation: "topic (tema)" },
  にゅうす: { romanji: "nyuusu", translation: "news (nyheter)" },
  きじ: { romanji: "kiji", translation: "article (artikkel)" },
  し: { romanji: "shi", translation: "poem (dikt)" },
  え: { romanji: "e", translation: "picture / drawing (bilde / tegning)" },
  しゃしん: { romanji: "shashin", translation: "photograph (fotografi)" },
  えはがき: { romanji: "ehagaki", translation: "postcard (postkort)" },
  てがみ: { romanji: "tegami", translation: "letter (brev)" },
  にっぽん: { romanji: "nippon", translation: "Japan (formal)" },
  おおさか: { romanji: "oosaka", translation: "Osaka" },
  きょうと: { romanji: "kyouto", translation: "Kyoto" },
  ほっかいどう: { romanji: "hokkaidou", translation: "Hokkaido" },
  おきなわ: { romanji: "okinawa", translation: "Okinawa" },
  ふじさん: { romanji: "fujisan", translation: "Mount Fuji (Fuji-fjellet)" },

  // 10-char
  ありがとうございます: {
    romanji: "arigatougozaimasu",
    translation: "thank you very much, formal (tusen takk (høflig))",
  },

  // 11-char
  よろしくおねがいします: {
    romanji: "yoroshikuonegaishimasu",
    translation: "nice to meet you, formal (hyggelig å møte deg (høflig))",
  },

  // 13-char
  どうもありがとうございます: {
    romanji: "doumoarigatougozaimasu",
    translation: "thank you so much, very formal (tusen hjertelig takk)",
  },

  // === MASSIVE EXPANSION ===

  // animals — farm & domestic
  おんどり: { romanji: "ondori", translation: "rooster (hane)" },
  めんどり: { romanji: "mendori", translation: "hen (høne)" },
  ひよこ: { romanji: "hiyoko", translation: "chick (kylling)" },
  ろば: { romanji: "roba", translation: "donkey (esel)" },
  ひつじかい: { romanji: "hitsujikai", translation: "shepherd (gjeter)" },
  ふか: { romanji: "fuka", translation: "hatching (klekking)" },
  ふかする: { romanji: "fuka suru", translation: "to incubate / hatch (å inkubere / klekke)" },
  ふかき: { romanji: "fukaki", translation: "incubator (rugemaskin)" },
  す: { romanji: "su", translation: "vinegar / nest (eddik / reir)" },
  しいく: { romanji: "shiiku", translation: "breeding / rearing (oppdrett / avl)" },
  ぼくじょう: { romanji: "bokujou", translation: "farm / ranch (gård / bondegård)" },
  かちく: { romanji: "kachiku", translation: "livestock (husdyr)" },
  えさ: { romanji: "esa", translation: "animal feed (fôr)" },

  // animals — ocean & water
  くらげ: { romanji: "kurage", translation: "jellyfish (manet)" },
  ひとで: { romanji: "hitode", translation: "starfish (sjøstjerne)" },
  うに: { romanji: "uni", translation: "sea urchin (sjøpiggsvin)" },
  えび: { romanji: "ebi", translation: "shrimp (reke)" },
  たい: { romanji: "tai", translation: "sea bream (havbrasme)" },
  さめ: { romanji: "same", translation: "shark (hai)" },
  いか: { romanji: "ika", translation: "squid (blekksprut)" },
  かい: { romanji: "kai", translation: "shellfish (skjell)" },
  あざらし: { romanji: "azarashi", translation: "seal (sel)" },
  らっこ: { romanji: "rakko", translation: "sea otter (havoter)" },
  さんご: { romanji: "sango", translation: "coral (korall)" },
  かいそう: { romanji: "kaisou", translation: "seaweed (sjøgress)" },
  シャチ: { romanji: "shachi", translation: "orca / killer whale (spekkhogger)" },
  せいうち: { romanji: "seiuchi", translation: "walrus (hvalross)" },
  ペンギン: { romanji: "pengin", translation: "penguin" },
  まんた: { romanji: "manta", translation: "manta ray (mantarokke)" },
  たつのおとしご: { romanji: "tatsu no otoshigo", translation: "seahorse (sjøhest)" },
  うつぼ: { romanji: "utsubo", translation: "moray eel (murene)" },
  ふぐ: { romanji: "fugu", translation: "pufferfish (kulefisk)" },

  // animals — insects & small
  あり: { romanji: "ari", translation: "ant (maur)" },
  はち: { romanji: "hachi", translation: "bee / wasp (bie / veps)" },
  か: { romanji: "ka", translation: "mosquito (mygg)" },
  こおろぎ: { romanji: "koorogi", translation: "cricket (gresshoppe)" },
  みみず: { romanji: "mimizu", translation: "earthworm (meitemark)" },
  だんごむし: { romanji: "dangomushi", translation: "pill bug (skrukketroll)" },

  // plants & nature
  き: { romanji: "ki", translation: "tree / wood (tre)" },
  たね: { romanji: "tane", translation: "seed (frø)" },
  ね: { romanji: "ne", translation: "root (rot)" },
  えだ: { romanji: "eda", translation: "branch (gren)" },
  みき: { romanji: "miki", translation: "trunk (stamme)" },
  こけ: { romanji: "koke", translation: "moss (mose)" },
  しだ: { romanji: "shida", translation: "fern (bregne)" },
  たけ: { romanji: "take", translation: "bamboo (bambus)" },
  すぎ: { romanji: "sugi", translation: "cedar (seder)" },
  つた: { romanji: "tsuta", translation: "ivy (eføy)" },
  きのこ: { romanji: "kinoko", translation: "mushroom (sopp)" },
  しょくぶつ: { romanji: "shokubutsu", translation: "plant (plante)" },
  はっぱ: { romanji: "happa", translation: "leaf (blad)" },
  もみじ: { romanji: "momiji", translation: "maple / autumn leaves (lønn / høstblader)" },
  さぼてん: { romanji: "saboten", translation: "cactus (kaktus)" },
  ひまわり: { romanji: "himawari", translation: "sunflower (solsikke)" },
  ばら: { romanji: "bara", translation: "rose" },
  ゆり: { romanji: "yuri", translation: "lily (lilje)" },
  つばき: { romanji: "tsubaki", translation: "camellia (kamélia)" },
  うめ: { romanji: "ume", translation: "plum (plomme)" },

  // body — internal & detailed
  のう: { romanji: "nou", translation: "brain (hjerne)" },
  しんぞう: { romanji: "shinzou", translation: "heart, organ (hjerte)" },
  はい: { romanji: "hai", translation: "lungs / yes (lunger / ja)" },
  い: { romanji: "i", translation: "stomach (mage)" },
  かんぞう: { romanji: "kanzou", translation: "liver (lever)" },
  じんぞう: { romanji: "jinzou", translation: "kidney (nyre)" },
  きんにく: { romanji: "kinniku", translation: "muscle (muskel)" },
  ち: { romanji: "chi", translation: "blood (blod)" },
  つば: { romanji: "tsuba", translation: "saliva (spytt)" },
  なみだ: { romanji: "namida", translation: "tear (tåre)" },
  あせ: { romanji: "ase", translation: "sweat (svette)" },
  こきゅう: { romanji: "kokyuu", translation: "breathing (pust)" },
  みゃく: { romanji: "myaku", translation: "pulse (puls)" },

  // earth & geology
  いし: { romanji: "ishi", translation: "stone (stein)" },
  どろ: { romanji: "doro", translation: "mud (gjørme)" },
  さばく: { romanji: "sabaku", translation: "desert (ørken)" },
  かざん: { romanji: "kazan", translation: "volcano (vulkan)" },
  どうくつ: { romanji: "doukutsu", translation: "cave (hule)" },
  たに: { romanji: "tani", translation: "valley (dal)" },
  がけ: { romanji: "gake", translation: "cliff (klippe)" },
  みさき: { romanji: "misaki", translation: "cape / headland (nes / odde)" },
  かいがん: { romanji: "kaigan", translation: "coast (kyst)" },
  ひょうが: { romanji: "hyouga", translation: "glacier (isbre)" },
  すなはま: { romanji: "sunahama", translation: "sandy beach (sandstrand)" },
  みずうみ: { romanji: "mizuumi", translation: "lake (innsjø)" },
  おがわ: { romanji: "ogawa", translation: "stream (bekk)" },
  いずみ: { romanji: "izumi", translation: "spring, water (kilde)" },
  ちそう: { romanji: "chisou", translation: "geological layer (geologisk lag)" },
  こうぶつ: { romanji: "koubutsu", translation: "mineral" },
  かせき: { romanji: "kaseki", translation: "fossil" },
  じばん: { romanji: "jiban", translation: "ground / foundation (grunn)" },

  // ocean & underwater
  しんかい: { romanji: "shinkai", translation: "deep sea (dyphavet)" },
  かいてい: { romanji: "kaitei", translation: "seabed (havbunn)" },
  うずしお: { romanji: "uzushio", translation: "whirlpool (malstrøm)" },
  かいりゅう: { romanji: "kairyuu", translation: "ocean current (havstrøm)" },

  // atmosphere & weather
  たいき: { romanji: "taiki", translation: "atmosphere (atmosfære)" },
  くうき: { romanji: "kuuki", translation: "air (luft)" },
  さんそ: { romanji: "sanso", translation: "oxygen (oksygen)" },
  にさんかたんそ: { romanji: "nisankatanso", translation: "carbon dioxide (karbondioksid)" },
  おぞん: { romanji: "ozon", translation: "ozone (ozon)" },
  きあつ: { romanji: "kiatsu", translation: "air pressure (lufttrykk)" },
  しつど: { romanji: "shitsudo", translation: "humidity (luftfuktighet)" },
  きおん: { romanji: "kion", translation: "temperature (temperatur)" },
  かみなり: { romanji: "kaminari", translation: "thunder (torden)" },
  いなずま: { romanji: "inazuma", translation: "lightning (lyn)" },
  にじ: { romanji: "niji", translation: "rainbow (regnbue)" },
  つゆ: { romanji: "tsuyu", translation: "rainy season / dew (regntid / dugg)" },
  あられ: { romanji: "arare", translation: "hail (hagl)" },
  ふぶき: { romanji: "fubuki", translation: "blizzard (snøstorm)" },
  たつまき: { romanji: "tatsumaki", translation: "tornado" },
  つなみ: { romanji: "tsunami", translation: "tsunami" },
  こうずい: { romanji: "kouzui", translation: "flood (flom)" },
  かんばつ: { romanji: "kanbatsu", translation: "drought (tørke)" },

  // space & astronomy
  うちゅう: { romanji: "uchuu", translation: "space / universe (verdensrommet)" },
  ちきゅう: { romanji: "chikyuu", translation: "Earth (jorda)" },
  わくせい: { romanji: "wakusei", translation: "planet" },
  えいせい: { romanji: "eisei", translation: "satellite (satellitt)" },
  いんせき: { romanji: "inseki", translation: "meteorite (meteoritt)" },
  すいせい: { romanji: "suisei", translation: "comet (komet)" },
  ぎんが: { romanji: "ginga", translation: "galaxy (galakse)" },
  せいうん: { romanji: "seiun", translation: "nebula (stjernetåke)" },
  ちょうしんせい: { romanji: "choushinsei", translation: "supernova" },
  うちゅうひこうし: { romanji: "uchuuhikoushi", translation: "astronaut (astronaut)" },
  じゅうりょく: { romanji: "juuryoku", translation: "gravity (tyngdekraft)" },
  きどう: { romanji: "kidou", translation: "orbit (bane)" },
  こうねん: { romanji: "kounen", translation: "light-year (lysår)" },
  しんくう: { romanji: "shinkuu", translation: "vacuum (vakuum)" },

  // microscopic world
  さいぼう: { romanji: "saibou", translation: "cell (celle)" },
  いでんし: { romanji: "idenshi", translation: "gene (gen)" },
  ばいきん: { romanji: "baikin", translation: "germ / bacteria (bakterie)" },
  びせいぶつ: { romanji: "biseibutsu", translation: "microorganism (mikroorganisme)" },
  ぶんし: { romanji: "bunshi", translation: "molecule (molekyl)" },
  げんし: { romanji: "genshi", translation: "atom" },
  でんし: { romanji: "denshi", translation: "electron (elektron)" },
  ようし: { romanji: "youshi", translation: "proton" },
  ちゅうせいし: { romanji: "chuuseishi", translation: "neutron (nøytron)" },
  かくし: { romanji: "kakushi", translation: "nucleus (kjerne)" },
  たんぱくしつ: { romanji: "tanpakushitsu", translation: "protein" },
  こうそ: { romanji: "kouso", translation: "enzyme (enzym)" },
  さいきん: { romanji: "saikin", translation: "bacteria / recently (bakterie / nylig)" },

  // math
  たす: { romanji: "tasu", translation: "to add / plus (å legge til / pluss)" },
  かける: { romanji: "kakeru", translation: "to multiply / hang (å gange / henge)" },
  わる: { romanji: "waru", translation: "to divide (å dele)" },
  たしざん: { romanji: "tashizan", translation: "addition (addisjon)" },
  ひきざん: { romanji: "hikizan", translation: "subtraction (subtraksjon)" },
  かけざん: { romanji: "kakezan", translation: "multiplication (multiplikasjon)" },
  わりざん: { romanji: "warizan", translation: "division (divisjon)" },
  へいほうこん: { romanji: "heihoukon", translation: "square root (kvadratrot)" },
  さんかく: { romanji: "sankaku", translation: "triangle (trekant)" },
  しかく: { romanji: "shikaku", translation: "square / rectangle (firkant)" },
  えん: { romanji: "en", translation: "circle / yen (sirkel / yen)" },
  きかがく: { romanji: "kikagaku", translation: "geometry (geometri)" },
  すうがく: { romanji: "suugaku", translation: "mathematics (matematikk)" },
  すうじ: { romanji: "suuji", translation: "number (tall)" },
  けいさん: { romanji: "keisan", translation: "calculation (beregning)" },
  しき: { romanji: "shiki", translation: "formula / equation (formel / ligning)" },
  ぐらふ: { romanji: "gurafu", translation: "graph (graf)" },
  かんすう: { romanji: "kansuu", translation: "function, math (funksjon)" },
  へんすう: { romanji: "hensuu", translation: "variable (variabel)" },
  ていすう: { romanji: "teisuu", translation: "constant (konstant)" },
  わりあい: { romanji: "wariai", translation: "ratio / percentage (forhold / prosent)" },
  ぶんすう: { romanji: "bunsuu", translation: "fraction (brøk)" },
  しょうすう: { romanji: "shousuu", translation: "decimal (desimaltall)" },
  むげん: { romanji: "mugen", translation: "infinity (uendelig)" },
  ぐうすう: { romanji: "guusuu", translation: "even number (partall)" },
  きすう: { romanji: "kisuu", translation: "odd number (oddetall)" },
  めんせき: { romanji: "menseki", translation: "area (areal)" },
  たいせき: { romanji: "taiseki", translation: "volume (volum)" },
  ちょっけい: { romanji: "chokkei", translation: "diameter" },
  はんけい: { romanji: "hankei", translation: "radius" },
  えんしゅう: { romanji: "enshuu", translation: "circumference (omkrets)" },

  // science — general
  かがく: { romanji: "kagaku", translation: "science / chemistry (vitenskap / kjemi)" },
  ぶつりがく: { romanji: "butsurigaku", translation: "physics (fysikk)" },
  せいぶつがく: { romanji: "seibutsugaku", translation: "biology (biologi)" },
  かがくしゃ: { romanji: "kagakusha", translation: "scientist (vitenskapsmann)" },
  じっけん: { romanji: "jikken", translation: "experiment (eksperiment)" },
  かせつ: { romanji: "kasetsu", translation: "hypothesis (hypotese)" },
  りろん: { romanji: "riron", translation: "theory (teori)" },
  とうけい: { romanji: "toukei", translation: "statistics (statistikk)" },
  ほうほう: { romanji: "houhou", translation: "method (metode)" },
  だとうせい: { romanji: "datousei", translation: "validity (validitet)" },
  そうかんかんけい: { romanji: "soukankankei", translation: "correlation (korrelasjon)" },
  しりょうひはん: { romanji: "shiryouhihan", translation: "source criticism (kildekritikk)" },
  こうさつ: { romanji: "kousatsu", translation: "analysis / consideration (analyse)" },
  けつろん: { romanji: "ketsuron", translation: "conclusion (konklusjon)" },
  しょうめい: { romanji: "shoumei", translation: "proof (bevis)" },
  かんさつ: { romanji: "kansatsu", translation: "observation (observasjon)" },
  けんきゅう: { romanji: "kenkyuu", translation: "research (forskning)" },
  はっけん: { romanji: "hakken", translation: "discovery (oppdagelse)" },
  はつめい: { romanji: "hatsumei", translation: "invention (oppfinnelse)" },

  // science — physics
  まさつ: { romanji: "masatsu", translation: "friction (friksjon)" },
  おんど: { romanji: "ondo", translation: "temperature (temperatur)" },
  じりょく: { romanji: "jiryoku", translation: "magnetism (magnetisme)" },
  じしゃく: { romanji: "jishaku", translation: "magnet" },
  はどう: { romanji: "hadou", translation: "wave, physics (bølge)" },
  しゅうはすう: { romanji: "shuuhasuu", translation: "frequency (frekvens)" },
  はんしゃ: { romanji: "hansha", translation: "reflection (refleksjon)" },
  くっせつ: { romanji: "kussetsu", translation: "refraction (brytning)" },
  そくど: { romanji: "sokudo", translation: "speed (hastighet)" },
  かそくど: { romanji: "kasokudo", translation: "acceleration (akselerasjon)" },
  しつりょう: { romanji: "shitsuryou", translation: "mass (masse)" },
  あつりょく: { romanji: "atsuryoku", translation: "pressure (trykk)" },
  みつど: { romanji: "mitsudo", translation: "density (tetthet)" },

  // science — chemistry
  げんそ: { romanji: "genso", translation: "element (grunnstoff)" },
  すいそ: { romanji: "suiso", translation: "hydrogen" },
  ちっそ: { romanji: "chisso", translation: "nitrogen (nitrogen)" },
  てつ: { romanji: "tetsu", translation: "iron (jern)" },
  きん: { romanji: "kin", translation: "gold (gull)" },
  ぎん: { romanji: "gin", translation: "silver (sølv)" },
  どう: { romanji: "dou", translation: "copper (kobber)" },
  さん: { romanji: "san", translation: "acid (syre)" },
  えんき: { romanji: "enki", translation: "base, chemistry (base)" },
  かごうぶつ: { romanji: "kagoubutsu", translation: "compound (forbindelse)" },
  こんごうぶつ: { romanji: "kongoubutsu", translation: "mixture (blanding)" },
  はんのう: { romanji: "hannou", translation: "reaction (reaksjon)" },
  ようえき: { romanji: "youeki", translation: "solution (løsning)" },
  のうど: { romanji: "noudo", translation: "concentration (konsentrasjon)" },

  // people & life stages
  おとな: { romanji: "otona", translation: "adult (voksen)" },
  あかんぼう: { romanji: "akanbou", translation: "baby (spedbarn)" },
  ようじ: { romanji: "youji", translation: "toddler (småbarn)" },
  しょうねん: { romanji: "shounen", translation: "boy (gutt)" },
  しょうじょ: { romanji: "shoujo", translation: "girl (jente)" },
  わかもの: { romanji: "wakamono", translation: "young person (ungdom)" },
  ろうじん: { romanji: "roujin", translation: "elderly person (eldre)" },
  おっと: { romanji: "otto", translation: "husband (ektemann)" },
  つま: { romanji: "tsuma", translation: "wife (kone)" },
  りんじん: { romanji: "rinjin", translation: "neighbor (nabo)" },
  しみん: { romanji: "shimin", translation: "citizen (borger)" },

  // emotions & states
  いかり: { romanji: "ikari", translation: "anger (sinne)" },
  おそれ: { romanji: "osore", translation: "fear (frykt)" },
  よろこび: { romanji: "yorokobi", translation: "joy (glede)" },
  かなしみ: { romanji: "kanashimi", translation: "sadness (sorg)" },
  おどろき: { romanji: "odoroki", translation: "surprise (overraskelse)" },
  たいくつ: { romanji: "taikutsu", translation: "boredom (kjedsomhet)" },
  こうふん: { romanji: "koufun", translation: "excitement (spenning)" },
  びんぼう: { romanji: "binbou", translation: "poverty / poor (fattigdom / fattig)" },
  ゆたか: { romanji: "yutaka", translation: "rich / abundant (rik / rikelig)" },
  どくしん: { romanji: "dokushin", translation: "single / unmarried (singel / ugift)" },

  // cooking & food prep
  やく: { romanji: "yaku", translation: "to grill / bake (å grille / steke)" },
  にる: { romanji: "niru", translation: "to boil / simmer (å koke)" },
  むす: { romanji: "musu", translation: "to steam (å dampe)" },
  いためる: { romanji: "itameru", translation: "to stir-fry (å woke)" },
  まぜる: { romanji: "mazeru", translation: "to mix (å blande)" },
  こねる: { romanji: "koneru", translation: "to knead (å kna)" },
  あぶら: { romanji: "abura", translation: "oil (olje)" },
  こむぎこ: { romanji: "komugiko", translation: "flour (mel)" },
  ようしょく: { romanji: "youshoku", translation: "Western food (vestlig mat)" },
  わしょく: { romanji: "washoku", translation: "Japanese food (japansk mat)" },
  いちにちさんしょく: { romanji: "ichinichisanshoku", translation: "three meals a day (tre måltider om dagen)" },

  // more food
  だいこん: { romanji: "daikon", translation: "radish (reddik)" },
  ごぼう: { romanji: "gobou", translation: "burdock (burdock-rot)" },
  ねぎ: { romanji: "negi", translation: "green onion (vårløk)" },
  にんにく: { romanji: "ninniku", translation: "garlic (hvitløk)" },
  しょうが: { romanji: "shouga", translation: "ginger (ingefær)" },
  とうがらし: { romanji: "tougarashi", translation: "chili pepper (chilipepper)" },
  こんぶ: { romanji: "konbu", translation: "kelp (tang)" },
  かつお: { romanji: "katsuo", translation: "bonito (skipjack-tunfisk)" },
  だし: { romanji: "dashi", translation: "broth / stock (kraft)" },
  みりん: { romanji: "mirin", translation: "mirin (søt risvin)" },
  あん: { romanji: "an", translation: "red bean paste (bønnepasta)" },
  もやし: { romanji: "moyashi", translation: "bean sprouts (bønnespirer)" },
  ひじき: { romanji: "hijiki", translation: "hijiki seaweed (hijiki-tang)" },

  // housing & rooms
  うち: { romanji: "uchi", translation: "home / inside (hjem / inni)" },
  にかい: { romanji: "nikai", translation: "second floor (andre etasje)" },
  おくじょう: { romanji: "okujou", translation: "rooftop (tak / takterrasse)" },
  ちかしつ: { romanji: "chikashitsu", translation: "basement (kjeller)" },
  しんしつ: { romanji: "shinshitsu", translation: "bedroom (soverom)" },
  きゃくま: { romanji: "kyakuma", translation: "guest room (gjesterom)" },
  よくしつ: { romanji: "yokushitsu", translation: "bathroom (baderom)" },

  // tools & objects
  かなづち: { romanji: "kanazuchi", translation: "hammer" },
  くぎ: { romanji: "kugi", translation: "nail (spiker)" },
  のこぎり: { romanji: "nokogiri", translation: "saw (sag)" },
  ちりとり: { romanji: "chiritori", translation: "dustpan (feiebrett)" },
  ほうちょう: { romanji: "houchou", translation: "kitchen knife (kjøkkenkniv)" },
  まないた: { romanji: "manaita", translation: "cutting board (fjøl)" },
  さら: { romanji: "sara", translation: "plate (tallerken)" },
  ちゃわん: { romanji: "chawan", translation: "rice bowl / teacup (risbolle / tekopp)" },
  おわん: { romanji: "owan", translation: "soup bowl (suppebolle)" },
  きゅうす: { romanji: "kyuusu", translation: "teapot (tekanne)" },

  // transport & vehicles
  せんすいかん: { romanji: "sensuikan", translation: "submarine (ubåt)" },
  きかんしゃ: { romanji: "kikansha", translation: "locomotive (lokomotiv)" },
  きゅうきゅうしゃ: { romanji: "kyuukyuusha", translation: "ambulance (ambulanse)" },
  しょうぼうしゃ: { romanji: "shoubousha", translation: "fire truck (brannbil)" },

  // professions
  いしゃ: { romanji: "isha", translation: "doctor (lege)" },
  かんごし: { romanji: "kangoshi", translation: "nurse (sykepleier)" },
  べんごし: { romanji: "bengoshi", translation: "lawyer (advokat)" },
  けいさつかん: { romanji: "keisatsukan", translation: "police officer (politibetjent)" },
  しょうぼうし: { romanji: "shouboushi", translation: "firefighter (brannmann)" },
  のうか: { romanji: "nouka", translation: "farmer (bonde)" },
  りょうし: { romanji: "ryoushi", translation: "fisherman (fisker)" },
  だいく: { romanji: "daiku", translation: "carpenter (snekker)" },
  うんてんしゅ: { romanji: "untenshu", translation: "driver (sjåfør)" },
  きょうし: { romanji: "kyoushi", translation: "teacher (lærer)" },
  けんちくか: { romanji: "kenchikuka", translation: "architect (arkitekt)" },
  かしゅ: { romanji: "kashu", translation: "singer (sanger)" },
  はいゆう: { romanji: "haiyuu", translation: "actor (skuespiller)" },
  がか: { romanji: "gaka", translation: "painter / artist (maler / kunstner)" },
  さっか: { romanji: "sakka", translation: "writer / author (forfatter)" },

  // more verbs
  そだつ: { romanji: "sodatsu", translation: "to grow (å vokse)" },
  そだてる: { romanji: "sodateru", translation: "to raise / nurture (å oppdra)" },
  ためす: { romanji: "tamesu", translation: "to try / test (å prøve)" },
  さわる: { romanji: "sawaru", translation: "to touch (å ta på)" },
  におう: { romanji: "niou", translation: "to smell (å lukte)" },
  あじわう: { romanji: "ajiwau", translation: "to taste (å smake)" },
  かんじる: { romanji: "kanjiru", translation: "to feel (å føle)" },
  うごく: { romanji: "ugoku", translation: "to move (å bevege seg)" },
  とまる: { romanji: "tomaru", translation: "to stop (å stoppe)" },
  まがる: { romanji: "magaru", translation: "to turn (å svinge)" },
  もどる: { romanji: "modoru", translation: "to return (å vende tilbake)" },
  おちる: { romanji: "ochiru", translation: "to fall (å falle)" },
  あがる: { romanji: "agaru", translation: "to rise / go up (å stige)" },
  さがる: { romanji: "sagaru", translation: "to go down (å synke)" },
  まわる: { romanji: "mawaru", translation: "to rotate / spin (å rotere)" },
  ころがる: { romanji: "korogaru", translation: "to roll (å rulle)" },
  ゆれる: { romanji: "yureru", translation: "to shake / sway (å riste)" },
  こおる: { romanji: "kooru", translation: "to freeze (å fryse)" },
  とける: { romanji: "tokeru", translation: "to melt / dissolve (å smelte)" },
  もえる: { romanji: "moeru", translation: "to burn (å brenne)" },
  かわく: { romanji: "kawaku", translation: "to dry (å tørke)" },
  ぬれる: { romanji: "nureru", translation: "to get wet (å bli våt)" },
  さく: { romanji: "saku", translation: "to bloom (å blomstre)" },
  しおれる: { romanji: "shioreru", translation: "to wilt (å visne)" },
  うえる: { romanji: "ueru", translation: "to plant (å plante)" },
  そる: { romanji: "soru", translation: "to shave (å barbere)" },
  ぬる: { romanji: "nuru", translation: "to paint / apply (å male / smøre)" },
  ほる: { romanji: "horu", translation: "to dig (å grave)" },
  はこぶ: { romanji: "hakobu", translation: "to carry (å bære)" },
  おくる: { romanji: "okuru", translation: "to send (å sende)" },
  とどける: { romanji: "todokeru", translation: "to deliver (å levere)" },
  うけとる: { romanji: "uketoru", translation: "to receive (å motta)" },
  かたづける: { romanji: "katadukeru", translation: "to tidy up (å rydde)" },
  なくす: { romanji: "nakusu", translation: "to lose something (å miste)" },
  みつかる: { romanji: "mitsukaru", translation: "to be found (å bli funnet)" },
  ことわる: { romanji: "kotowaru", translation: "to refuse (å avslå)" },
  あやまる: { romanji: "ayamaru", translation: "to apologize (å be om unnskyldning)" },
  ゆるす: { romanji: "yurusu", translation: "to forgive (å tilgi)" },
  たたかう: { romanji: "tatakau", translation: "to fight (å kjempe)" },
  まける: { romanji: "makeru", translation: "to lose, game (å tape)" },
  かつ: { romanji: "katsu", translation: "to win (å vinne)" },
  きそう: { romanji: "kisou", translation: "to compete (å konkurrere)" },

  // more adjectives
  ふとい: { romanji: "futoi", translation: "thick / fat (tykk / feit)" },
  ほそい: { romanji: "hosoi", translation: "thin / slim (tynn / slank)" },
  まるい: { romanji: "marui", translation: "round (rund)" },
  するどい: { romanji: "surudoi", translation: "sharp (skarp)" },
  にぶい: { romanji: "nibui", translation: "dull / blunt (sløv)" },
  あかい: { romanji: "akai", translation: "red (rød)" },
  しろい: { romanji: "shiroi", translation: "white (hvit)" },
  くろい: { romanji: "kuroi", translation: "black (svart)" },
  うつくしい: { romanji: "utsukushii", translation: "beautiful (vakker)" },
  みにくい: { romanji: "minikui", translation: "ugly (stygg)" },
  すばらしい: { romanji: "subarashii", translation: "wonderful (fantastisk)" },
  ただしい: { romanji: "tadashii", translation: "correct (riktig)" },
  まちがい: { romanji: "machigai", translation: "mistake (feil)" },
  かんたんな: { romanji: "kantanna", translation: "simple / easy (enkel)" },
  ふくざつな: { romanji: "fukuzatsuna", translation: "complicated (komplisert)" },

  // society & government
  せんきょ: { romanji: "senkyo", translation: "election (valg)" },
  ほうりつ: { romanji: "houritsu", translation: "law (lov)" },
  けんぽう: { romanji: "kenpou", translation: "constitution (grunnlov)" },
  ぜいきん: { romanji: "zeikin", translation: "tax (skatt)" },
  けんり: { romanji: "kenri", translation: "right, legal (rettighet)" },
  ぎむ: { romanji: "gimu", translation: "duty / obligation (plikt)" },
  みんしゅしゅぎ: { romanji: "minshushugi", translation: "democracy (demokrati)" },
  さいばんしょ: { romanji: "saibansho", translation: "court (domstol)" },
  けいむしょ: { romanji: "keimusho", translation: "prison (fengsel)" },
  ぐんたい: { romanji: "guntai", translation: "military (militær)" },
  せんそう: { romanji: "sensou", translation: "war (krig)" },

  // religion & philosophy
  かみさま: { romanji: "kamisama", translation: "God (Gud)" },
  しゅうきょう: { romanji: "shuukyou", translation: "religion" },
  ぶっきょう: { romanji: "bukkyou", translation: "Buddhism (buddhisme)" },
  しんとう: { romanji: "shintou", translation: "Shinto (shintoisme)" },
  いのり: { romanji: "inori", translation: "prayer (bønn)" },
  たましい: { romanji: "tamashii", translation: "soul (sjel)" },
  てつがく: { romanji: "tetsugaku", translation: "philosophy (filosofi)" },

  // music & art
  おんぷ: { romanji: "onpu", translation: "musical note (note)" },
  がっき: { romanji: "gakki", translation: "musical instrument (instrument)" },
  ふえ: { romanji: "fue", translation: "flute (fløyte)" },
  たいこ: { romanji: "taiko", translation: "drum (tromme)" },
  えのぐ: { romanji: "enogu", translation: "paint (maling)" },
  ふで: { romanji: "fude", translation: "brush / pen (pensel / malekost)" },
  えふで: { romanji: "efude", translation: "paintbrush (malekost / malerpensel)" },
  キャンバス: { romanji: "kyanbasu", translation: "canvas (lerret)" },
  パレット: { romanji: "paretto", translation: "palette (palett)" },
  すいさいが: { romanji: "suisaiga", translation: "watercolour (akvarell)" },
  ゆが: { romanji: "yuga", translation: "oil painting (oljemaleri)" },
  すみ: { romanji: "sumi", translation: "ink (blekk / tusj)" },
  デッサン: { romanji: "dessan", translation: "sketch / drawing (skisse / tegning)" },
  スケッチ: { romanji: "sukecchi", translation: "sketch (skisse)" },
  イーゼル: { romanji: "iizeru", translation: "easel (staffeli)" },
  がふ: { romanji: "gafu", translation: "art book / sketchbook (skissebok)" },
  ちょうこく: { romanji: "choukoku", translation: "sculpture (skulptur)" },
  とうげい: { romanji: "tougei", translation: "pottery (keramikk)" },
  しょどう: { romanji: "shodou", translation: "calligraphy (kalligrafi)" },
  いけばな: { romanji: "ikebana", translation: "flower arrangement (ikebana)" },
  さどう: { romanji: "sadou", translation: "tea ceremony (teseremoni)" },

  // sports
  やきゅう: { romanji: "yakyuu", translation: "baseball" },
  じゅうどう: { romanji: "juudou", translation: "judo" },
  けんどう: { romanji: "kendou", translation: "kendo" },
  からて: { romanji: "karate", translation: "karate" },
  すもう: { romanji: "sumou", translation: "sumo" },
  きゅうどう: { romanji: "kyuudou", translation: "Japanese archery (bueskytning)" },
  しあい: { romanji: "shiai", translation: "match / game (kamp)" },
  たいかい: { romanji: "taikai", translation: "tournament (turnering)" },
  ゆうしょう: { romanji: "yuushou", translation: "victory / championship (seier)" },

  // technology & computing
  こんぴゅーたー: { romanji: "konpyuutaa", translation: "computer (datamaskin)" },
  でんち: { romanji: "denchi", translation: "battery (batteri)" },
  でんぱ: { romanji: "denpa", translation: "radio wave (radiobølge)" },
  かいろ: { romanji: "kairo", translation: "circuit (krets)" },
  じんこうちのう: { romanji: "jinkouchinou", translation: "artificial intelligence (kunstig intelligens)" },

  // education
  だいがく: { romanji: "daigaku", translation: "university (universitet)" },
  きょういく: { romanji: "kyouiku", translation: "education (utdanning)" },
  そつぎょう: { romanji: "sotsugyou", translation: "graduation (uteksaminering)" },
  にゅうがく: { romanji: "nyuugaku", translation: "enrollment (innskriving)" },
  がくせい: { romanji: "gakusei", translation: "student (elev)" },
  きょうじゅ: { romanji: "kyouju", translation: "professor" },
  こうぎ: { romanji: "kougi", translation: "lecture (forelesning)" },
  ろんぶん: { romanji: "ronbun", translation: "thesis / paper (avhandling)" },
  しょうがくきん: { romanji: "shougakukin", translation: "scholarship (stipend)" },

  // economics & business
  かぶしき: { romanji: "kabushiki", translation: "stock (aksje)" },
  ぼうえき: { romanji: "boueki", translation: "trade (handel)" },
  ゆしゅつ: { romanji: "yushutsu", translation: "export (eksport)" },
  ゆにゅう: { romanji: "yunyuu", translation: "import" },
  りえき: { romanji: "rieki", translation: "profit (profitt)" },
  そんしつ: { romanji: "sonshitsu", translation: "loss (tap)" },
  よさん: { romanji: "yosan", translation: "budget (budsjett)" },
  ほけん: { romanji: "hoken", translation: "insurance (forsikring)" },
  ねだん: { romanji: "nedan", translation: "price (pris)" },
  かち: { romanji: "kachi", translation: "value (verdi)" },

  // communication & media
  ほうそう: { romanji: "housou", translation: "broadcast (kringkasting)" },
  こうこく: { romanji: "koukoku", translation: "advertisement (reklame)" },
  じょうほう: { romanji: "jouhou", translation: "information (informasjon)" },

  // materials
  ぬの: { romanji: "nuno", translation: "cloth (stoff)" },

  // environment
  おせん: { romanji: "osen", translation: "pollution (forurensning)" },
  しげん: { romanji: "shigen", translation: "resource (ressurs)" },
  さいがい: { romanji: "saigai", translation: "disaster (katastrofe)" },
  たいさく: { romanji: "taisaku", translation: "countermeasure (mottiltak)" },
  おんだんか: { romanji: "ondanka", translation: "global warming (oppvarming)" },
  たいようこう: { romanji: "taiyoukou", translation: "solar energy (solenergi)" },
  ふうりょく: { romanji: "fuuryoku", translation: "wind power (vindkraft)" },
  げんしりょく: { romanji: "genshiryoku", translation: "nuclear power (atomkraft)" },
};

const KatakanaWordDictionary = {
  // 2-char
  パン: { romanji: "pan", translation: "bread (brød)" },
  バス: { romanji: "basu", translation: "bus (buss)" },
  ペン: { romanji: "pen", translation: "pen" },
  ガム: { romanji: "gamu", translation: "chewing gum (tyggegummi)" },
  ドア: { romanji: "doa", translation: "door (dør)" },
  メモ: { romanji: "memo", translation: "memo / note (notat)" },
  ヨガ: { romanji: "yoga", translation: "yoga" },
  ビル: { romanji: "biru", translation: "building (bygning)" },
  ガス: { romanji: "gasu", translation: "gas" },
  ベッド: { romanji: "beddo", translation: "bed (seng)" },

  // 3-char
  バナナ: { romanji: "banana", translation: "banana" },
  トイレ: { romanji: "toire", translation: "toilet / bathroom (toalett)" },
  バター: { romanji: "bataa", translation: "butter (smør)" },
  トマト: { romanji: "tomato", translation: "tomato (tomat)" },
  レモン: { romanji: "remon", translation: "lemon (sitron)" },
  パスタ: { romanji: "pasuta", translation: "pasta" },
  ピアノ: { romanji: "piano", translation: "piano" },
  テニス: { romanji: "tenisu", translation: "tennis" },
  アイス: { romanji: "aisu", translation: "ice cream (iskrem)" },
  ホテル: { romanji: "hoteru", translation: "hotel" },
  チーズ: { romanji: "chiizu", translation: "cheese (ost)" },
  ギター: { romanji: "gitaa", translation: "guitar (gitar)" },
  スキー: { romanji: "sukii", translation: "skiing (ski)" },
  ラジオ: { romanji: "rajio", translation: "radio" },
  コーラ: { romanji: "koora", translation: "cola" },
  テレビ: { romanji: "terebi", translation: "television (tv)" },
  ロシア: { romanji: "roshia", translation: "Russia (Russland)" },
  カナダ: { romanji: "kanada", translation: "Canada" },
  ドイツ: { romanji: "doitsu", translation: "Germany (Tyskland)" },
  バレー: {
    romanji: "baree",
    translation: "volleyball / ballet (volleyball / ballett)",
  },

  // 4-char
  コーヒー: { romanji: "koohii", translation: "coffee (kaffe)" },
  パソコン: { romanji: "pasokon", translation: "PC (datamaskin)" },
  アパート: { romanji: "apaato", translation: "apartment (leilighet)" },
  スポーツ: { romanji: "supootsu", translation: "sports (sport)" },
  アルバム: { romanji: "arubamu", translation: "album" },
  ジュース: { romanji: "juusu", translation: "juice" },
  テーブル: { romanji: "teeburu", translation: "table (bord)" },
  コンビニ: {
    romanji: "konbini",
    translation: "convenience store (nærbutikk)",
  },
  ラーメン: { romanji: "raamen", translation: "ramen" },
  フランス: { romanji: "furansu", translation: "France (Frankrike)" },
  イタリア: { romanji: "itaria", translation: "Italy (Italia)" },
  アメリカ: { romanji: "amerika", translation: "America (Amerika)" },
  ブラジル: { romanji: "burajiru", translation: "Brazil (Brasil)" },
  メキシコ: { romanji: "mekishiko", translation: "Mexico" },
  ビタミン: { romanji: "bitamin", translation: "vitamin" },
  タクシー: { romanji: "takushii", translation: "taxi" },
  デパート: { romanji: "depaato", translation: "department store (varehus)" },

  // 5-char
  レストラン: { romanji: "resutoran", translation: "restaurant" },
  コンサート: { romanji: "konsaato", translation: "concert (konsert)" },
  バスケット: { romanji: "basuketto", translation: "basketball" },
  ヨーロッパ: { romanji: "yooroppa", translation: "Europe (Europa)" },
  ノルウェー: { romanji: "noruwee", translation: "Norway (Norge)" },

  // 6-char
  チョコレート: { romanji: "chokoreeto", translation: "chocolate (sjokolade)" },
  ハンバーガー: { romanji: "hanbaagaa", translation: "hamburger" },
  エレベーター: { romanji: "erebeetaa", translation: "elevator (heis)" },
  ショッピング: { romanji: "shoppingu", translation: "shopping" },
  サンドイッチ: { romanji: "sandoitchi", translation: "sandwich" },
  アクセサリー: { romanji: "akusesarii", translation: "accessory (tilbehør)" },
  ボランティア: { romanji: "borantia", translation: "volunteer (frivillig)" },

  // 7-char
  インターネット: { romanji: "intaanetto", translation: "internet" },
  コンピューター: {
    romanji: "konpyuutaa",
    translation: "computer (datamaskin)",
  },
  アイスクリーム: { romanji: "aisukuriimu", translation: "ice cream (iskrem)" },
  スマートフォン: {
    romanji: "sumaatofon",
    translation: "smartphone (smarttelefon)",
  },
  エスカレーター: {
    romanji: "esukareetaa",
    translation: "escalator (rulltrapp)",
  },

  // 8-char
  クリスマスツリー: {
    romanji: "kurisumasutsurii",
    translation: "Christmas tree (juletre)",
  },
  バースデーケーキ: {
    romanji: "baasudeekeeki",
    translation: "birthday cake (bursdagskake)",
  },

  // 9-char
  スーパーマーケット: { romanji: "suupaamaaketto", translation: "supermarket" },
  インターナショナル: {
    romanji: "intaanashonaru",
    translation: "international (internasjonal)",
  },

  // more 2-char
  ゴミ: { romanji: "gomi", translation: "trash (søppel)" },
  ジム: { romanji: "jimu", translation: "gym" },
  ダム: { romanji: "damu", translation: "dam (demning)" },
  ゼロ: { romanji: "zero", translation: "zero (null)" },
  カフェ: { romanji: "kafe", translation: "café (kafé)" },

  // more 3-char
  サラダ: { romanji: "sarada", translation: "salad" },
  ケーキ: { romanji: "keeki", translation: "cake (kake)" },
  ビール: { romanji: "biiru", translation: "beer (øl)" },
  ワイン: { romanji: "wain", translation: "wine (vin)" },
  カレー: { romanji: "karee", translation: "curry" },
  ナイフ: { romanji: "naifu", translation: "knife (kniv)" },
  フォーク: { romanji: "fooku", translation: "fork (gaffel)" },
  スプーン: { romanji: "supuun", translation: "spoon (skje)" },
  コップ: { romanji: "koppu", translation: "glass / cup (glass)" },
  サッカー: { romanji: "sakkaa", translation: "soccer (fotball)" },
  プール: { romanji: "puuru", translation: "pool (basseng)" },
  ゲーム: { romanji: "geemu", translation: "game (spill)" },
  アプリ: { romanji: "apuri", translation: "app" },
  メール: { romanji: "meeru", translation: "email (e-post)" },
  データ: { romanji: "deeta", translation: "data" },
  サイト: { romanji: "saito", translation: "website (nettside)" },
  ニュース: { romanji: "nyuusu", translation: "news (nyheter)" },
  ドラマ: { romanji: "dorama", translation: "TV drama (TV-serie)" },
  アニメ: { romanji: "anime", translation: "anime" },
  マンガ: { romanji: "manga", translation: "manga (tegneserie)" },
  タオル: { romanji: "taoru", translation: "towel (håndkle)" },
  シャワー: { romanji: "shawaa", translation: "shower (dusj)" },
  マスク: { romanji: "masuku", translation: "mask (munnbind)" },
  ソファー: { romanji: "sofaa", translation: "sofa" },
  カーテン: { romanji: "kaaten", translation: "curtain (gardin)" },
  エアコン: { romanji: "eakon", translation: "air conditioning (klimaanlegg)" },
  リモコン: { romanji: "rimokon", translation: "remote control (fjernkontroll)" },
  マンション: { romanji: "manshon", translation: "apartment building (leilighetsbygg)" },

  // more 3-char
  シャツ: { romanji: "shatsu", translation: "shirt (skjorte)" },
  スーツ: { romanji: "suutsu", translation: "suit (dress)" },
  コート: { romanji: "kooto", translation: "coat (frakk)" },
  スカート: { romanji: "sukaato", translation: "skirt (skjørt)" },
  ズボン: { romanji: "zubon", translation: "pants (bukse)" },
  ブーツ: { romanji: "buutsu", translation: "boots (støvler)" },
  ネクタイ: { romanji: "nekutai", translation: "necktie (slips)" },
  セーター: { romanji: "seetaa", translation: "sweater (genser)" },
  ジーンズ: { romanji: "jiinzu", translation: "jeans" },

  // health
  ストレス: { romanji: "sutoresu", translation: "stress" },
  アレルギー: { romanji: "arerugii", translation: "allergy (allergi)" },
  ウイルス: { romanji: "uirusu", translation: "virus" },
  ワクチン: { romanji: "wakuchin", translation: "vaccine (vaksine)" },
  カロリー: { romanji: "karorii", translation: "calorie (kalori)" },
  ダイエット: { romanji: "daietto", translation: "diet (diett)" },
  トレーニング: { romanji: "toreeningu", translation: "training (trening)" },

  // technology
  カメラ: { romanji: "kamera", translation: "camera (kamera)" },
  プリンター: { romanji: "purintaa", translation: "printer (skriver)" },
  キーボード: { romanji: "kiiboodo", translation: "keyboard (tastatur)" },
  マウス: { romanji: "mausu", translation: "mouse (mus)" },
  モニター: { romanji: "monitaa", translation: "monitor (skjerm)" },
  バッテリー: { romanji: "batterii", translation: "battery (batteri)" },
  ソフトウェア: { romanji: "sofutowea", translation: "software (programvare)" },
  パスワード: { romanji: "pasuwaado", translation: "password (passord)" },
  ダウンロード: { romanji: "daunroodo", translation: "download (nedlasting)" },
  ブログ: { romanji: "burogu", translation: "blog" },
  チャンネル: { romanji: "channeru", translation: "channel (kanal)" },
  プログラム: { romanji: "puroguramu", translation: "program" },

  // more food
  ステーキ: { romanji: "suteeki", translation: "steak (biff)" },
  ピザ: { romanji: "piza", translation: "pizza" },
  グラタン: { romanji: "guratan", translation: "gratin (grateng)" },
  ソーセージ: { romanji: "sooseeji", translation: "sausage (pølse)" },
  ヨーグルト: { romanji: "yooguruto", translation: "yogurt (yoghurt)" },
  ドーナツ: { romanji: "doonatsu", translation: "donut (smultring)" },
  クッキー: { romanji: "kukkii", translation: "cookie (kjeks)" },
  プリン: { romanji: "purin", translation: "pudding" },
  パフェ: { romanji: "pafe", translation: "parfait" },
  ミルク: { romanji: "miruku", translation: "milk (melk)" },
  ソース: { romanji: "soosu", translation: "sauce (saus)" },
  マヨネーズ: { romanji: "mayoneezu", translation: "mayonnaise (majones)" },
  ケチャップ: { romanji: "kechappu", translation: "ketchup" },
  マスタード: { romanji: "masutaado", translation: "mustard (sennep)" },
  からし: { romanji: "karashi", translation: "Japanese mustard (sennep)" },
  ドレッシング: { romanji: "doresshingu", translation: "dressing" },
  ポン酢: { romanji: "ponzu", translation: "ponzu (sitrusdressing)" },
  オレンジ: { romanji: "orenji", translation: "orange (appelsin)" },
  メロン: { romanji: "meron", translation: "melon" },
  マンゴー: { romanji: "mangoo", translation: "mango" },
  ココナッツ: { romanji: "kokonattsu", translation: "coconut (kokosnøtt)" },
  パイナップル: { romanji: "painappuru", translation: "pineapple (ananas)" },

  // places & travel
  トンネル: { romanji: "tonneru", translation: "tunnel" },
  ガソリン: { romanji: "gasorin", translation: "gasoline (bensin)" },
  レンタカー: { romanji: "rentakaa", translation: "rental car (leiebil)" },
  パスポート: { romanji: "pasupooto", translation: "passport (pass)" },
  チケット: { romanji: "chiketto", translation: "ticket (billett)" },
  ガイド: { romanji: "gaido", translation: "guide" },
  ツアー: { romanji: "tsuaa", translation: "tour (tur)" },
  キャンプ: { romanji: "kyanpu", translation: "camp / camping" },
  ハイキング: { romanji: "haikingu", translation: "hiking (turgåing)" },
  サーフィン: { romanji: "saafin", translation: "surfing" },
  スノーボード: { romanji: "sunooboodo", translation: "snowboard" },
  マラソン: { romanji: "marason", translation: "marathon" },
  オリンピック: { romanji: "orinpikku", translation: "Olympics (olympiade)" },

  // countries
  イギリス: { romanji: "igirisu", translation: "England / UK (England)" },
  スペイン: { romanji: "supein", translation: "Spain (Spania)" },
  オーストラリア: { romanji: "oosutoraria", translation: "Australia" },
  インド: { romanji: "indo", translation: "India" },
  エジプト: { romanji: "ejiputo", translation: "Egypt" },
  タイ: { romanji: "tai", translation: "Thailand" },
  ベトナム: { romanji: "betonamu", translation: "Vietnam" },
  シンガポール: { romanji: "shingapooru", translation: "Singapore" },
  スウェーデン: { romanji: "suweeden", translation: "Sweden (Sverige)" },
  フィンランド: { romanji: "finrando", translation: "Finland" },
  デンマーク: { romanji: "denmaaku", translation: "Denmark (Danmark)" },
  アイスランド: { romanji: "aisurando", translation: "Iceland (Island)" },

  // daily items
  ポケット: { romanji: "poketto", translation: "pocket (lomme)" },
  ハンカチ: { romanji: "hankachi", translation: "handkerchief (lommetørkle)" },
  ティッシュ: { romanji: "tisshu", translation: "tissue (papirlommetørkle)" },
  シャンプー: { romanji: "shanpuu", translation: "shampoo" },
  リンス: { romanji: "rinsu", translation: "conditioner (balsam)" },
  ブラシ: { romanji: "burashi", translation: "brush (børste)" },
  スリッパ: { romanji: "surippa", translation: "slippers (tøfler)" },
  カレンダー: { romanji: "karendaa", translation: "calendar (kalender)" },
  ノート: { romanji: "nooto", translation: "notebook (notatbok)" },
  ボールペン: { romanji: "boorupen", translation: "ballpoint pen (kulepenn)" },
  クリップ: { romanji: "kurippu", translation: "clip (binders)" },

  // entertainment & hobbies
  ミュージカル: { romanji: "myuujikaru", translation: "musical" },
  ドライブ: { romanji: "doraibu", translation: "drive (biltur)" },
  ジョギング: { romanji: "jogingu", translation: "jogging" },
  ヨット: { romanji: "yotto", translation: "yacht (seilbåt)" },
  ダンス: { romanji: "dansu", translation: "dance" },
  バイオリン: { romanji: "baiorin", translation: "violin (fiolin)" },
  ドラム: { romanji: "doramu", translation: "drum (tromme)" },
  ロック: { romanji: "rokku", translation: "rock music (rock)" },
  ポップス: { romanji: "poppusu", translation: "pop music (popmusikk)" },
  クラシック: { romanji: "kurashikku", translation: "classical music (klassisk musikk)" },

  // work
  オフィス: { romanji: "ofisu", translation: "office (kontor)" },
  ミーティング: { romanji: "miitingu", translation: "meeting (møte)" },
  プロジェクト: { romanji: "purojekuto", translation: "project (prosjekt)" },
  スケジュール: { romanji: "sukejuuru", translation: "schedule (timeplan)" },
  レポート: { romanji: "repooto", translation: "report (rapport)" },
  プレゼン: { romanji: "purezen", translation: "presentation (presentasjon)" },
  コピー: { romanji: "kopii", translation: "copy (kopi)" },
  ファイル: { romanji: "fairu", translation: "file (fil)" },
  ボーナス: { romanji: "boonasu", translation: "bonus" },
  アルバイト: { romanji: "arubaito", translation: "part-time job (deltidsjobb)" },

  // 10-char
  クリスマスプレゼント: {
    romanji: "kurisumasupurezento",
    translation: "Christmas present (julegave)",
  },
  インターネットカフェ: {
    romanji: "intaanettokafe",
    translation: "internet café (internettkafé)",
  },
  コンビニエンスストア: {
    romanji: "konbiniensusuutoa",
    translation: "convenience store (nærbutikk)",
  },
  ファミリーレストラン: {
    romanji: "famiriiresutoran",
    translation: "family restaurant (familierestaurant)",
  },
  エンターテインメント: {
    romanji: "entaateinmento",
    translation: "entertainment (underholdning)",
  },
  ショッピングセンター: {
    romanji: "shoppingusentaa",
    translation: "shopping center (kjøpesenter)",
  },
  コンピューターゲーム: {
    romanji: "konpyuutaageemu",
    translation: "computer game (dataspill)",
  },
  ハロウィンパーティー: {
    romanji: "harowinpaatii",
    translation: "Halloween party (halloweenfest)",
  },

  // 11-char
  ウィンドウショッピング: {
    romanji: "windoushoppingu",
    translation: "window shopping",
  },
  ソフトウェアエンジニア: {
    romanji: "sofutoweaenjinia",
    translation: "software engineer (programvareingeniør)",
  },

  // 13-char
  インフォメーションセンター: {
    romanji: "infomeeshonsentaa",
    translation: "information center (informasjonssenter)",
  },

  // === MASSIVE KATAKANA EXPANSION ===

  // science & tech loanwords
  エネルギー: { romanji: "enerugii", translation: "energy (energi)" },
  ロボット: { romanji: "robotto", translation: "robot" },
  テクノロジー: { romanji: "tekunorojii", translation: "technology (teknologi)" },
  サイエンス: { romanji: "saiensu", translation: "science (vitenskap)" },
  システム: { romanji: "shisutemu", translation: "system" },
  ネットワーク: { romanji: "nettowaaku", translation: "network (nettverk)" },
  セキュリティ: { romanji: "sekyuriti", translation: "security (sikkerhet)" },
  デジタル: { romanji: "dejitaru", translation: "digital" },
  アナログ: { romanji: "anarogu", translation: "analog" },
  センサー: { romanji: "sensaa", translation: "sensor" },
  レーザー: { romanji: "reezaa", translation: "laser" },
  ドローン: { romanji: "doroon", translation: "drone" },
  アプリケーション: { romanji: "apurikeeshon", translation: "application (applikasjon)" },
  インストール: { romanji: "insutooru", translation: "install (installere)" },
  アップデート: { romanji: "appudeeto", translation: "update (oppdatering)" },
  クラウド: { romanji: "kuraudo", translation: "cloud (sky-tjeneste)" },
  サーバー: { romanji: "saabaa", translation: "server (tjener)" },
  ウェブサイト: { romanji: "webusaito", translation: "website (nettside)" },

  // math loanwords
  プラス: { romanji: "purasu", translation: "plus" },
  マイナス: { romanji: "mainasu", translation: "minus" },
  パーセント: { romanji: "paasento", translation: "percent (prosent)" },
  グラフ: { romanji: "gurafu", translation: "graph (graf)" },
  ベクトル: { romanji: "bekutoru", translation: "vector (vektor)" },
  マトリックス: { romanji: "matorikkusu", translation: "matrix (matrise)" },

  // medical & health
  リハビリ: { romanji: "rihabiri", translation: "rehabilitation (rehabilitering)" },
  カウンセリング: { romanji: "kaunseringu", translation: "counseling (rådgivning)" },
  メンタルヘルス: { romanji: "mentaruherusu", translation: "mental health (psykisk helse)" },
  サプリメント: { romanji: "sapurimento", translation: "supplement (kosttilskudd)" },
  カルテ: { romanji: "karute", translation: "medical chart (pasientjournal)" },
  かんちょう: { romanji: "kanchou", translation: "enema (klyster)" },
  ちゅうしゃ: { romanji: "chuusha", translation: "injection (sprøyte)" },
  しゅじゅつ: { romanji: "shujutsu", translation: "surgery (operasjon)" },
  にゅういん: { romanji: "nyuuin", translation: "hospitalization (innleggelse)" },
  たいいん: { romanji: "taiin", translation: "discharge (utskrivning)" },
  しんさつ: { romanji: "shinsatsu", translation: "examination (undersøkelse)" },
  しょほうせん: { romanji: "shohousen", translation: "prescription (resept)" },
  やっきょく: { romanji: "yakkyoku", translation: "pharmacy (apotek)" },
  ほうたい: { romanji: "houtai", translation: "bandage (bandasje)" },
  ギプス: { romanji: "gipusu", translation: "cast (gips)" },
  くるまいす: { romanji: "kurumaisu", translation: "wheelchair (rullestol)" },
  けんこうしんだん: { romanji: "kenkou shindan", translation: "health checkup (helsesjekk)" },

  // sports loanwords
  バスケットボール: { romanji: "basukettoboru", translation: "basketball" },
  バレーボール: { romanji: "bareebooru", translation: "volleyball" },
  ゴルフ: { romanji: "gorufu", translation: "golf" },
  ボクシング: { romanji: "bokushingu", translation: "boxing (boksing)" },
  スケートボード: { romanji: "sukeetoboodo", translation: "skateboard" },
  コーチ: { romanji: "koochi", translation: "coach (trener)" },
  チーム: { romanji: "chiimu", translation: "team (lag)" },
  スコア: { romanji: "sukoa", translation: "score (poeng)" },
  ルール: { romanji: "ruuru", translation: "rule (regel)" },
  ファウル: { romanji: "fauru", translation: "foul" },
  ペナルティー: { romanji: "penarutii", translation: "penalty (straffe)" },

  // music loanwords
  ライブ: { romanji: "raibu", translation: "live performance (livekonsert)" },
  ヒット: { romanji: "hitto", translation: "hit" },
  ファン: { romanji: "fan", translation: "fan" },
  アーティスト: { romanji: "aatisuto", translation: "artist (artist)" },
  プロデューサー: { romanji: "purodyuusaa", translation: "producer (produsent)" },
  マイク: { romanji: "maiku", translation: "microphone (mikrofon)" },
  アンプ: { romanji: "anpu", translation: "amplifier (forsterker)" },
  スピーカー: { romanji: "supiikaa", translation: "speaker (høyttaler)" },

  // fashion & lifestyle
  ファッション: { romanji: "fasshon", translation: "fashion (mote)" },
  デザイン: { romanji: "dezain", translation: "design" },
  ブランド: { romanji: "burando", translation: "brand (merke)" },
  サングラス: { romanji: "sangurasu", translation: "sunglasses (solbriller)" },
  リュック: { romanji: "ryukku", translation: "backpack (ryggsekk)" },
  スーツケース: { romanji: "suutsukeesu", translation: "suitcase (koffert)" },
  トランク: { romanji: "toranku", translation: "trunk / suitcase (koffert / bagasjerom)" },
  ハンドバッグ: { romanji: "handobaggu", translation: "handbag (håndveske)" },
  ポーチ: { romanji: "poochi", translation: "pouch (veske / pung)" },
  ピアス: { romanji: "piasu", translation: "piercing / earring (øredobb)" },
  ネックレス: { romanji: "nekkuresu", translation: "necklace (halskjede)" },
  リング: { romanji: "ringu", translation: "ring" },

  // food & drink loanwords
  ハンバーグ: { romanji: "hanbaagu", translation: "Hamburg steak (karbonadedeig)" },
  オムライス: { romanji: "omuraisu", translation: "omurice (omelett med ris)" },
  カツレツ: { romanji: "katsuretsu", translation: "cutlet (kotelet)" },
  クロワッサン: { romanji: "kurowassan", translation: "croissant" },
  バゲット: { romanji: "bagetto", translation: "baguette" },
  マフィン: { romanji: "mafin", translation: "muffin" },
  ワッフル: { romanji: "waffuru", translation: "waffle (vaffel)" },
  パンケーキ: { romanji: "pankeeki", translation: "pancake (pannekake)" },
  スムージー: { romanji: "sumuujii", translation: "smoothie" },
  エスプレッソ: { romanji: "esupuresso", translation: "espresso" },
  カプチーノ: { romanji: "kapuchiino", translation: "cappuccino" },
  カクテル: { romanji: "kakuteru", translation: "cocktail" },
  ウイスキー: { romanji: "uisukii", translation: "whiskey" },
  シャンパン: { romanji: "shanpan", translation: "champagne (champagne)" },

  // home & furniture loanwords
  カーペット: { romanji: "kaapetto", translation: "carpet (teppe)" },
  クローゼット: { romanji: "kuroozetto", translation: "closet (skap)" },
  インテリア: { romanji: "interia", translation: "interior (interiør)" },
  バルコニー: { romanji: "barukonii", translation: "balcony (balkong)" },
  ガレージ: { romanji: "gareeji", translation: "garage" },

  // business loanwords
  ビジネス: { romanji: "bijinesu", translation: "business (forretning)" },
  マーケティング: { romanji: "maaketingu", translation: "marketing (markedsføring)" },
  マネージャー: { romanji: "maneejaa", translation: "manager (leder)" },
  リーダー: { romanji: "riidaa", translation: "leader (leder)" },
  プレゼンテーション: { romanji: "purezentashon", translation: "presentation (presentasjon)" },
  コンサルタント: { romanji: "konsarutanto", translation: "consultant (konsulent)" },
  フリーランス: { romanji: "furiiransu", translation: "freelance (frilans)" },
  スタートアップ: { romanji: "sutaatoaapu", translation: "startup (oppstartsbedrift)" },
  イノベーション: { romanji: "inobeeshon", translation: "innovation (innovasjon)" },
  グローバル: { romanji: "gurooubaru", translation: "global" },

  // environment loanwords
  リサイクル: { romanji: "risaikuru", translation: "recycle (resirkulering)" },
  エコロジー: { romanji: "ekorojii", translation: "ecology (økologi)" },
  サステナブル: { romanji: "sasutenaburu", translation: "sustainable (bærekraftig)" },
  カーボン: { romanji: "kaabon", translation: "carbon (karbon)" },
  プラスチック: { romanji: "purasuchikku", translation: "plastic (plast)" },

  // transport loanwords
  フェリー: { romanji: "ferii", translation: "ferry (ferge)" },
  モノレール: { romanji: "monoreeru", translation: "monorail" },
  ヘリコプター: { romanji: "herikoputaa", translation: "helicopter (helikopter)" },
  エンジン: { romanji: "enjin", translation: "engine (motor)" },
  タイヤ: { romanji: "taiya", translation: "tire (dekk)" },
  ブレーキ: { romanji: "bureeki", translation: "brake (brems)" },
  ハンドル: { romanji: "handoru", translation: "steering wheel (ratt)" },
  ナビ: { romanji: "nabi", translation: "navigation (navigasjon)" },

  // countries & places
  ポルトガル: { romanji: "porutogaru", translation: "Portugal" },
  オランダ: { romanji: "oranda", translation: "Netherlands (Nederland)" },
  ベルギー: { romanji: "berugii", translation: "Belgium (Belgia)" },
  スイス: { romanji: "suisu", translation: "Switzerland (Sveits)" },
  オーストリア: { romanji: "oosutoria", translation: "Austria (Østerrike)" },
  ポーランド: { romanji: "poorando", translation: "Poland (Polen)" },
  ギリシャ: { romanji: "girisha", translation: "Greece (Hellas)" },
  トルコ: { romanji: "toruko", translation: "Turkey (Tyrkia)" },
  イラン: { romanji: "iran", translation: "Iran" },
  サウジアラビア: { romanji: "saujiarabia", translation: "Saudi Arabia (Saudi-Arabia)" },
  ニュージーランド: { romanji: "nyuujiirando", translation: "New Zealand" },
  アルゼンチン: { romanji: "aruzenchin", translation: "Argentina" },
  コロンビア: { romanji: "koronbia", translation: "Colombia" },
  ペルー: { romanji: "peruu", translation: "Peru" },
  ケニア: { romanji: "kenia", translation: "Kenya" },
  ナイジェリア: { romanji: "naijeria", translation: "Nigeria" },
  フィリピン: { romanji: "firipin", translation: "Philippines (Filippinene)" },
  マレーシア: { romanji: "mareeshia", translation: "Malaysia" },
  インドネシア: { romanji: "indoneshia", translation: "Indonesia" },
  パキスタン: { romanji: "pakisutan", translation: "Pakistan" },
  ウガンダ: { romanji: "uganda", translation: "Uganda" },
  タンザニア: { romanji: "tanzania", translation: "Tanzania" },
  エチオピア: { romanji: "echiopia", translation: "Ethiopia (Etiopia)" },
  ガーナ: { romanji: "gaana", translation: "Ghana" },
  モロッコ: { romanji: "morokko", translation: "Morocco (Marokko)" },
  カメルーン: { romanji: "kameruun", translation: "Cameroon (Kamerun)" },
  みなみアフリカ: { romanji: "minamiafurika", translation: "South Africa (Sør-Afrika)" },
  セネガル: { romanji: "senegaru", translation: "Senegal" },
  コンゴ: { romanji: "kongo", translation: "Congo" },
  ソマリア: { romanji: "somaria", translation: "Somalia" },
  ジンバブエ: { romanji: "jinbabue", translation: "Zimbabwe" },
  マダガスカル: { romanji: "madagasukaru", translation: "Madagascar" },
  セックス: { romanji: "sekkusu", translation: "sex" },

  // Pacific & small nations
  ツバル: { romanji: "tsubaru", translation: "Tuvalu" },
  フィジー: { romanji: "fijii", translation: "Fiji" },
  サモア: { romanji: "samoa", translation: "Samoa" },
  トンガ: { romanji: "tonga", translation: "Tonga" },
  パラオ: { romanji: "parao", translation: "Palau" },
  ミクロネシア: { romanji: "mikuroneshia", translation: "Micronesia (Mikronesia)" },
  パプアニューギニア: { romanji: "papuanyuuginia", translation: "Papua New Guinea" },
  モルディブ: { romanji: "morudibu", translation: "Maldives (Maldivene)" },
  モナコ: { romanji: "monako", translation: "Monaco" },
  ルクセンブルク: { romanji: "rukusenburuku", translation: "Luxembourg" },

  // personality & manners
  しつれい: { romanji: "shitsurei", translation: "rude / impolite (frekk / uhøflig)" },
  ぶれいな: { romanji: "bureina", translation: "rude / insolent (frekk / respektløs)" },
  なまいきな: { romanji: "namaikina", translation: "cheeky / cocky (frekk / frekkis)" },
  れいぎ: { romanji: "reigi", translation: "manners / etiquette (folkeskikk)" },
  れいぎただしい: { romanji: "reigitadashii", translation: "polite / well-mannered (høflig)" },
  ていねいな: { romanji: "teineina", translation: "polite / careful (høflig / nøye)" },
  いじわるな: { romanji: "ijiwaruna", translation: "mean / spiteful (slem / ondsinnet)" },
  ずうずうしい: { romanji: "zuuzuushii", translation: "shameless / pushy (frekk / pågående)" },
  すなおな: { romanji: "sunaona", translation: "honest / obedient (ærlig / lydig)" },
  けんきょな: { romanji: "kenkyona", translation: "humble / modest (ydmyk)" },
  ごうまんな: { romanji: "goumanna", translation: "arrogant (arrogant)" },

  // storms & natural disasters
  すなあらし: { romanji: "sunaarashi", translation: "sandstorm" },
  あらし: { romanji: "arashi", translation: "storm" },
  ぼうふう: { romanji: "boufuu", translation: "windstorm (vindstorm)" },
  ごうう: { romanji: "gouu", translation: "heavy rain (styrtregn)" },
  らいう: { romanji: "raiu", translation: "thunderstorm (tordenvær)" },
  ひょう: { romanji: "hyou", translation: "hail (hagl)" },
  なだれ: { romanji: "nadare", translation: "avalanche (snøskred)" },
  じすべり: { romanji: "jisuberi", translation: "landslide (jordskred)" },
  かさい: { romanji: "kasai", translation: "fire, disaster (brann)" },
  ふんか: { romanji: "funka", translation: "eruption (vulkanutbrudd)" },

  // more space objects
  しょうわくせい: { romanji: "shouwakusei", translation: "asteroid" },
  いんせきぐん: { romanji: "insekigun", translation: "meteor shower (meteorregn)" },
  ながれぼし: { romanji: "nagareboshi", translation: "shooting star (stjerneskudd)" },
  たいようけい: { romanji: "taiyoukei", translation: "solar system (solsystemet)" },
  すいせい: { romanji: "suisei", translation: "Mercury (Merkur)" },
  きんせい: { romanji: "kinsei", translation: "Venus" },
  かせい: { romanji: "kasei", translation: "Mars" },
  もくせい: { romanji: "mokusei", translation: "Jupiter" },
  どせい: { romanji: "dosei", translation: "Saturn" },
  てんのうせい: { romanji: "tennousei", translation: "Uranus" },
  かいおうせい: { romanji: "kaiousei", translation: "Neptune (Neptun)" },
  めいおうせい: { romanji: "meiousei", translation: "Pluto" },
  うちゅうステーション: { romanji: "uchuusuteeshon", translation: "space station (romstasjon)" },

  // more places
  どうぶつえん: { romanji: "doubutsuen", translation: "zoo (dyrehage)" },
  ゆうえんち: { romanji: "yuuenchi", translation: "amusement park (fornøyelsespark)" },
  しょくぶつえん: { romanji: "shokubutsuen", translation: "botanical garden (botanisk hage)" },

  // moved from WordDictionary
  マンタ: { romanji: "manta", translation: "manta ray (mantarokke)" },
  ハーブ: { romanji: "haabu", translation: "herb (urt)" },
  スパイス: { romanji: "supaisu", translation: "spice (krydder)" },
  ブラックホール: { romanji: "burakkuhooru", translation: "black hole (svart hull)" },
  ロケット: { romanji: "roketto", translation: "rocket (rakett)" },
  ビッグバン: { romanji: "bigguban", translation: "Big Bang" },
  フライパン: { romanji: "furaipan", translation: "frying pan (stekepanne)" },
  パトカー: { romanji: "patokaa", translation: "police car (politibil)" },
  コック: { romanji: "kokku", translation: "cook / chef (kokk)" },
  エンジニア: { romanji: "enjinia", translation: "engineer (ingeniør)" },
  ジャーナリスト: { romanji: "jaanarisuto", translation: "journalist" },
  リズム: { romanji: "rizumu", translation: "rhythm (rytme)" },
  メロディー: { romanji: "merodii", translation: "melody (melodi)" },
  データベース: { romanji: "deetabeesu", translation: "database" },
  アルゴリズム: { romanji: "arugorizumu", translation: "algorithm (algoritme)" },
  ローン: { romanji: "roon", translation: "loan (lån)" },
  ガラス: { romanji: "garasu", translation: "glass" },
  ゴム: { romanji: "gomu", translation: "rubber (gummi)" },
  コンクリート: { romanji: "konkuriito", translation: "concrete (betong)" },
  セメント: { romanji: "semento", translation: "cement" },
};

// only run word trainer logic on ord.html
if (document.getElementById("char-count")) {

// state
let characterCount = 2;
let scriptMode = "hiragana"; // 'hiragana' | 'katakana' | 'both'
let currentDict = WordDictionary;
let wordQueue = [];
let wordQueueIndex = 0;
let currentWord = null;
let incorrectAttempts = 0;
let charsHidden = false;

// dom refs
const charCountSelect = document.getElementById("char-count");
const charDisplay = document.getElementById("hiragana-character");
const transDisplay = document.getElementById("translation-display");
const answerInput = document.getElementById("answer-input");
const hintDisplay = document.getElementById("hint-display");
const nextBtn = document.getElementById("next-btn");
const showAnswerBtn = document.getElementById("show-answer-btn");
const hideCharsBtn = document.getElementById("hide-chars-btn");
const roundProgress = document.getElementById("round-progress");
const roundTotal = document.getElementById("round-total");
const wordCountDisplay = document.getElementById("word-count");

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
  currentDict = {};
  if (scriptMode === "hiragana" || scriptMode === "both")
    Object.assign(currentDict, WordDictionary);
  if (scriptMode === "katakana" || scriptMode === "both")
    Object.assign(currentDict, KatakanaWordDictionary);

  const matching = Object.keys(currentDict).filter(
    (w) => [...w].length === characterCount,
  );
  wordQueue = [...matching].sort(() => Math.random() - 0.5);
  wordQueueIndex = 0;
  wordCountDisplay.textContent =
    matching.length > 0
      ? `${matching.length} ${t("words-label")}`
      : t("no-words-in-count");
  updateProgress();
}

function nextWord() {
  if (wordQueue.length === 0) {
    charDisplay.textContent = "—";
    transDisplay.textContent = t("no-words-in-count");
    return;
  }

  if (wordQueueIndex >= wordQueue.length) {
    wordQueueIndex = 0;
  }

  // weighted pick: harder words appear more often
  const word = DifficultyTracker.weightedPick(wordQueue, (w) => w);
  const entry = currentDict[word];
  currentWord = {
    word,
    romanji: entry.romanji,
    translation: entry.translation,
  };

  charDisplay.textContent = word;
  transDisplay.textContent = getWordTranslation(entry.translation);
  answerInput.value = "";
  if (!("ontouchstart" in window)) answerInput.focus();
  hintDisplay.classList.add("hidden");
  incorrectAttempts = 0;
  updateProgress();
}

function handleAnswer(input) {
  if (!input.trim() || !currentWord) return;

  const isCorrect =
    input.trim().toLowerCase() === currentWord.romanji.toLowerCase();

  DifficultyTracker.record(currentWord.word, isCorrect);
  if (isCorrect) {
    if (typeof StreakManager !== "undefined") StreakManager.recordActivity();
    MilestoneTracker.recordStart();
    MilestoneTracker.checkStreak();
    MilestoneTracker.checkAnswerCount();
    answerInput.classList.add("flash-correct");
    setTimeout(() => {
      answerInput.classList.remove("flash-correct");
      nextWord();
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
  if (!currentWord) return;
  hintDisplay.textContent = `${t("hint-prefix")} "${currentWord.romanji[0]}"`;
  hintDisplay.classList.remove("hidden");
}

function showAnswer() {
  if (!currentWord) return;
  hintDisplay.textContent = `${t("answer-prefix")} ${currentWord.romanji}`;
  hintDisplay.classList.remove("hidden");
}

function updateProgress() {
  roundProgress.textContent = wordQueueIndex;
  roundTotal.textContent = wordQueue.length;
}

// dictionary overlay
const dictOverlay = document.getElementById("dict-overlay");
const dictList = document.getElementById("dict-list");
const dictSearch = document.getElementById("dict-search");

function renderDictionary(filter, exact) {
  const dict = Object.assign({}, WordDictionary, KatakanaWordDictionary);

  const q = (filter || "").trim().toLowerCase();

  // group by character count
  const groups = {};
  Object.entries(dict).forEach(([word, data]) => {
    if (q) {
      const rom = data.romanji.toLowerCase();
      const trWords = data.translation.toLowerCase().split(/[\s\/(),]+/).filter(Boolean);
      const stemMatch = trWords.some((w) => w.length >= 3 && q.startsWith(w));
      let match;
      if (exact) {
        match = word === q || rom === q || trWords.some((w) => w === q) || stemMatch;
      } else if (q.length <= 2) {
        match = word === q || rom === q || trWords.some((w) => w === q);
      } else {
        match = word.includes(q) || rom.startsWith(q) || trWords.some((w) => w.startsWith(q)) || stemMatch;
      }
      if (!match) return;
    }
    const len = [...word].length;
    if (!groups[len]) groups[len] = [];
    groups[len].push({ word, romanji: data.romanji, translation: data.translation });
  });

  dictList.innerHTML = "";
  const keys = Object.keys(groups).sort((a, b) => a - b);
  if (keys.length === 0 && q) {
    const empty = document.createElement("div");
    empty.className = "dict-group-title";
    empty.textContent = t("dict-no-results");
    dictList.appendChild(empty);
    return;
  }

  keys.forEach((len) => {
    const heading = document.createElement("div");
    heading.className = "dict-group-title";
    heading.textContent = len + " " + t("dict-chars");
    dictList.appendChild(heading);

    groups[len].forEach((entry) => {
      const row = document.createElement("div");
      row.className = "dict-word";
      row.innerHTML =
        '<button class="dict-speak-btn" data-speak="' + entry.word + '" title="Hør uttale"><svg class="speak-icon" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M19 5a9 9 0 010 14"/></svg></button>' +
        '<span class="dict-word-jp">' + entry.word + "</span>" +
        '<span class="dict-word-rom">' + entry.romanji + "</span>" +
        '<span class="dict-word-tr">' + getWordTranslation(entry.translation) + "</span>";
      dictList.appendChild(row);
    });
  });
}

function openDictionary() {
  dictSearch.value = "";
  renderDictionary();
  dictOverlay.classList.remove("hidden");
}

function closeDictionary() {
  dictOverlay.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const unit = t("chars-unit");
  for (let i = 1; i <= 13; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${i} ${unit}`;
    if (i === 2) opt.selected = true;
    charCountSelect.appendChild(opt);
  }

  charCountSelect.addEventListener("change", (e) => {
    characterCount = parseInt(e.target.value);
    buildQueue();
    nextWord();
  });

  document.querySelectorAll(".script-btn[data-script]").forEach((btn) => {
    btn.addEventListener("click", () => {
      scriptMode = btn.dataset.script;
      document
        .querySelectorAll(".script-btn[data-script]")
        .forEach((b) => b.classList.toggle("script-btn--active", b === btn));
      buildQueue();
      nextWord();
    });
  });

  nextBtn.addEventListener("click", nextWord);
  showAnswerBtn.addEventListener("click", showAnswer);
  document.getElementById("speak-btn").addEventListener("click", () => {
    if (currentWord) speakJapanese(currentWord.word);
  });
  hideCharsBtn.addEventListener("click", () => {
    charsHidden = !charsHidden;
    updateHideButton();
  });
  answerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleAnswer(answerInput.value);
    }
  });

  // auto-answer — only submit on exact match
  answerInput.addEventListener("input", () => {
    if (localStorage.getItem("auto-answer") !== "true") return;
    if (!currentWord) return;
    const val = answerInput.value.trim().toLowerCase();
    if (!val) return;
    const answer = currentWord.romanji.toLowerCase();
    if (val.length >= answer.length) {
      if (val === answer) {
        handleAnswer(answerInput.value);
      } else {
        // wrong answer at full length — count as wrong
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

  // dictionary button + search
  document.getElementById("dict-btn").addEventListener("click", openDictionary);
  document.getElementById("dict-close-btn").addEventListener("click", closeDictionary);
  dictSearch.addEventListener("input", () => renderDictionary(dictSearch.value));
  dictSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      renderDictionary(dictSearch.value, true);
    }
  });
  dictOverlay.addEventListener("click", (e) => {
    if (e.target === dictOverlay) closeDictionary();
    const speakBtn = e.target.closest(".dict-speak-btn");
    if (speakBtn && speakBtn.dataset.speak) speakJapanese(speakBtn.dataset.speak);
  });

  buildQueue();
  nextWord();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!dictOverlay.classList.contains("hidden")) {
        closeDictionary();
        return;
      }
      const backLink = document.querySelector(".back-link");
      if (backLink) backLink.click();
    }
  });
});
} // end ord.html guard
