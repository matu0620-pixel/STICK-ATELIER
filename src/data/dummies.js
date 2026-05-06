// Dummy data used by all generation functions in DEMO_MODE.
// Replace with real API calls in production (see src/api.js stubs).

export const dummyVariants = {
  natural: {
    concept: { name: '風のしらべ / Wind Whisper', shortName: '風のしらべ', tagline: '毎日に、やさしい風を。', story: '都会の喧騒の中でも、ふと感じる風のように。手のひらに広がる、軽やかで清らかな時間を届けます。' },
    design: {
      colorPalette: [
        { name: 'セージグリーン', hex: '#7A9070', role: 'メインキャップ・ロゴ' },
        { name: 'ミルキーアイボリー', hex: '#F5EFE0', role: 'ボディ' },
        { name: 'ブロンズ', hex: '#A88456', role: 'ロゴ・アクセント' },
      ],
      material: 'なめらかな手触りのバイオマス素材を採用。地球と肌、両方にやさしい設計。',
      shape: '楕円形のスリムボディ。手のひらに自然と馴染む、有機的なフォルム。',
      typography: '柔らかな明朝体ロゴ。風を表現する微細な書体ディテール。',
      details: 'キャップに風紋を象った浅いエンボス。控えめで上品な存在感。',
      motif: 'leaf',
    },
    fragrance: {
      name: '芒種の野道',
      topNotes: ['シトラス', 'ティーリーフ', 'バジル'],
      middleNotes: ['ジャスミン', 'カモミール'],
      baseNotes: ['シダー', 'アンバーグリス'],
      imageColors: ['#B8C9A8', '#7A9070', '#E8DFD3', '#9BB088'],
      scenery: '初夏の田園、青い稲穂が風になびく。土と草花の匂いが混ざり合い、頬を撫でる風が心地よい。深く息を吸えば、自然のリズムが体に戻る。',
      mood: '爽やか, 清涼感, 朝の光',
      similar: 'ロクシタンのシトラス系・MARKS&WEB寄りの、ナチュラルでフレッシュなグリーン。',
    },
    strategy: {
      platforms: [
        { name: 'Amazon(自社ブランドストア)', reason: '20-30代女性のリーチが最大、サブスク導入で安定収益化が可能。' },
        { name: 'LIPS Shopping', reason: 'クリーンビューティ感度の高いZ世代女性への直接アプローチに最適。' },
      ],
      pricing: '税込1,980円。3本セット5,400円(10%OFF)を主力導線に。',
      productName: 'スティックハンドクリーム 風のしらべ ナチュラル ボタニカル オフィス 携帯',
      catchCopy: '指先から、ひと吹きの風。',
      keywords: ['ハンドクリーム ナチュラル', 'スティック 携帯', 'オフィス 香り', 'ボタニカル コスメ', 'ギフト 女性'],
      launch: 'ローンチ初週はLIPS人気投稿者20名へのギフティング。Instagram Reelsで「朝のルーティン」連動企画。',
      reviewStrategy: '購入特典でブランドキャラクターのスマホ壁紙配布、レビュー投稿で次回送料無料クーポン付与。',
    },
  },
  minimal: {
    concept: { name: 'TSUKI 02', shortName: 'TSUKI', tagline: '夜にとける、ひと刷毛。', story: '一日の終わり、自分のためだけの時間に寄り添う。第2の月、ささやくような余韻のスティックハンドクリーム。' },
    design: {
      colorPalette: [
        { name: 'ミッドナイトネイビー', hex: '#1F2A3A', role: 'ボディ' },
        { name: 'ムーンシルバー', hex: '#B5B8B8', role: 'キャップ' },
        { name: 'ゴールドフォイル', hex: '#C8A14A', role: 'ロゴ・ナンバリング' },
      ],
      material: 'マットなアルマイト加工アルミ。ひんやりとした重みが手仕事の道具のような佇まい。',
      shape: '直径15mmの細身円柱。月のような幾何学的シンプルさを基調に設計。',
      typography: 'モノラインの英字+数字。月相をイメージしたミニマルな構成。',
      details: '側面に月の満ち欠けを表す7段階ドット。コレクション性を演出。',
      motif: 'circle',
    },
    fragrance: {
      name: '月時雨',
      topNotes: ['ピンクペッパー', 'ベルガモット', 'カルダモン'],
      middleNotes: ['アイリス', 'インセンス'],
      baseNotes: ['アンバー', 'パチュリ'],
      imageColors: ['#1F2A3A', '#3A4860', '#6B7A8B', '#252F40'],
      scenery: '満月の夜、湖面に映る光。風が止まり、空気だけが満ちている。深く呼吸するたび、世界が静かに広がってゆく。',
      mood: 'ミステリアス, 大人, 静謐',
      similar: 'ディプティック フィロシコス・ジョーマローン ウッドセージシリーズの夜のラグジュアリー解釈。',
    },
    strategy: {
      platforms: [
        { name: '伊勢丹オンラインストア+店頭', reason: 'ラグジュアリー志向の30-40代男女への信頼感ある導入。' },
        { name: '自社EC(Shopify Plus)', reason: 'ブランドストーリーの世界観表現とCRMでLTV最大化。' },
      ],
      pricing: '税込3,200円。月相シリーズ全7本セット19,800円のコレクター展開。',
      productName: 'TSUKI 02 月時雨 スティックハンドクリーム ユニセックス 大人 ギフト 香り',
      catchCopy: '月のような、控えめな主張。',
      keywords: ['ハンドクリーム ユニセックス', 'メンズ 香り', '高級 ハンドクリーム', 'D2C コスメ', '夜 リラックス'],
      launch: '満月の夜にローンチ。インスタライブでの開封儀式+ZINE風カードを限定配布。',
      reviewStrategy: 'コレクション完成者には限定No.00(新月)を贈呈、シリーズ買い動機を作る。',
    },
  },
  girly: {
    concept: { name: 'Sucre Pétale', shortName: 'Sucre', tagline: '指先に咲く、ときめき。', story: 'ふんわりと甘い、花びらのようなハンドクリーム。ガーリーな日常を彩る、自分だけの小さな宝物に。' },
    design: {
      colorPalette: [
        { name: 'ペタルピンク', hex: '#E8B7C0', role: 'メインキャップ・ロゴ' },
        { name: 'シュガークリーム', hex: '#FBF5EE', role: 'ボディ' },
        { name: 'ローズゴールド', hex: '#C49080', role: 'ロゴ・装飾' },
      ],
      material: '半透明の柔らかなプラスチックで、中身がほんのり透けるロマンチック設計。',
      shape: 'ハートシェイプを潜ませた角丸ボトル。手にしたときに気づく、小さな仕掛け。',
      typography: 'スクリプト系の流麗なロゴ。フランス語と日本語のレイヤー構成。',
      details: 'キャップに花びらレリーフ、リボンチャーム同梱。ギフト需要にも対応。',
      motif: 'flower',
    },
    fragrance: {
      name: 'ピオニーヴェール',
      topNotes: ['ライチ', 'ピンクペッパー', 'マンダリン'],
      middleNotes: ['ピオニー', 'ローズ'],
      baseNotes: ['バニラ', 'ホワイトムスク'],
      imageColors: ['#F5C5D0', '#E8B7C0', '#FCE4EC', '#D89AAA'],
      scenery: '春の庭、満開の芍薬の花の中で深呼吸する。淡いピンクの花びらが風に揺れ、甘い空気が頬をくすぐる。永遠に続いてほしい、優しい瞬間。',
      mood: 'スイート, ロマンチック, ふんわり',
      similar: 'ジルスチュアート・JOMALONEのピオニーシリーズの甘くフェミニンな方向性。',
    },
    strategy: {
      platforms: [
        { name: 'Qoo10 メガ割', reason: 'Z世代女性のコスメ購買が集中するイベント時期に最大露出。' },
        { name: 'POP UP STORE(渋谷・心斎橋)', reason: 'ガーリー系は実物の質感とパッケージ写真映えが鍵で、店頭体験が購入動機に直結。' },
      ],
      pricing: '税込1,650円。ホリデー限定リボンBOX 2本セット3,080円が主力。',
      productName: 'Sucre Pétale ピオニーヴェール スティックハンドクリーム ピンク ギフト 学生',
      catchCopy: '可愛いを、毎日のポーチに。',
      keywords: ['ハンドクリーム 可愛い', 'ピンク コスメ', '学生 コスメ', 'ギフト 友達', '香り フローラル'],
      launch: 'TikTokでの#ピンクポーチ中身チャレンジ仕掛け。インフルエンサー20名同時投稿でバズ狙い。',
      reviewStrategy: '友達紹介でお互いに10%OFF、購入時にミニ缶バッジをランダム同梱でSNS拡散誘発。',
    },
  },
};

export const pickResultVariant = (brandDirection) => {
  if (['ナチュラル', 'クリーンビューティ系'].includes(brandDirection)) return dummyVariants.natural;
  if (['ミニマル', 'モード', 'ラグジュアリー', 'レトロ・ノスタルジック'].includes(brandDirection)) return dummyVariants.minimal;
  if (['ガーリー'].includes(brandDirection)) return dummyVariants.girly;
  return dummyVariants.natural;
};

export const dummyTrend = {
  marketSummary: '2024-2025年の日本のハンドクリーム市場は、コロナ禍以降の手肌ケア需要を背景に拡大。特にスティック型・携帯性・SNS映えが共通する成功要因として顕著。',
  trendingProducts: [
    { rank: 1, name: 'ハンドクリームスティック ホワイトリリー', brand: 'SHIRO', price: '2,200円', popularReason: 'リップ感覚で携帯できる手軽さ+SHIROブランドへの信頼で20-30代女性のスタンダードに。' },
    { rank: 2, name: 'ハンドクリーム シア', brand: 'ロクシタン', price: '2,860円', popularReason: 'ギフト定番・濃厚な保湿と上質な香りで世代を超えた支持を獲得。' },
    { rank: 3, name: 'ヴァセリンスティックハンドクリーム', brand: 'ヴァセリン', price: '880円', popularReason: 'プチプラ+ドラッグストア流通で大量普及。10-20代の手軽な入門用。' },
    { rank: 4, name: 'クルレ ハンドミルク', brand: 'CLURE', price: '1,540円', popularReason: '@cosmeランキング上位常連。ベタつかない使用感と可愛らしいパッケージで支持。' },
    { rank: 5, name: 'ジルスチュアート ハンドクリーム', brand: 'JILL STUART', price: '2,200円', popularReason: 'ガーリーなパッケージとフローラル香で、コスメ感度の高い若年女性に強い。' },
  ],
  successFactors: [
    { icon: 'fragrance', title: '香りの世界観構築', detail: '単なる「いい香り」ではなく、シーン・情景を想起させる物語性のある香り設計が必須。', weight: 92 },
    { icon: 'portability', title: '携帯性・スティック型の利便性', detail: 'リップ感覚でポーチに入る形状で、外出先での使用シーンを開拓。', weight: 87 },
    { icon: 'social', title: 'SNS投稿に耐えるパッケージ', detail: '手元写真・俯瞰写真で映える色・テクスチャ・ロゴ設計が口コミ拡散に直結。', weight: 85 },
    { icon: 'ingredient', title: 'クリーン処方の訴求', detail: 'パラベン・アルコールフリーなど、敏感肌対応訴求で安心感を提供。', weight: 73 },
  ],
  trendKeywords: ['スティック型', 'クリーンビューティ', 'ボタニカル', 'ジェンダーレス', 'リフィル対応', 'ホリデー限定'],
  successHints: [
    { title: '香りの情景描写を全媒体に展開', detail: 'ECだけでなくSNS・店頭POP・ノベルティに至るまで、香りの物語を一貫して語ることでブランド世界観を強化する。' },
    { title: '使用シーンを限定して訴求', detail: '「オフィス」「移動中」「就寝前」など特定シーンに絞ることで、ターゲットの自分ごと化を促進。' },
    { title: 'ギフト需要の取り込み', detail: '母の日・誕生日・退職祝いなど、年間6-8回のギフトイベントに合わせた限定パッケージを用意。' },
    { title: 'インフルエンサーの段階配置', detail: 'ナノ層で母数を作り、マイクロ層で信頼を、ミドル層で認知拡大を担当する3層構造。' },
    { title: 'リフィル/サブスクの導入', detail: '初回購入後のリピート設計を最初から組み込み、CRMでLTV最大化。サステナブル文脈とも相性◎。' },
  ],
};

export const generateDummyBusiness = (data) => ({
  positioning: {
    axes: { x: { label: '価格(円)', min: 500, max: 5000 }, y: { label: '香りの個性度', min: 0, max: 100, lowLabel: '一般的', highLabel: '個性的' } },
    competitors: [
      { name: '無印良品', x: 990, y: 20 },
      { name: 'スチームクリーム', x: 1400, y: 40 },
      { name: 'ジルスチュアート', x: 2200, y: 50 },
      { name: 'SHIRO サボン', x: 1980, y: 65 },
      { name: 'ロクシタン', x: 2860, y: 50 },
      { name: 'イソップ', x: 4400, y: 80 },
    ],
    ours: {
      x: data.concept.name.includes('TSUKI') ? 3200 : data.concept.name.includes('Sucre') ? 1650 : 1980,
      y: data.concept.name.includes('TSUKI') ? 78 : data.concept.name.includes('Sucre') ? 55 : 68,
    },
    insight: '中価格帯〜中高価格帯の競合が密集しているゾーン。形状(スティック型)と独自の世界観(' + data.concept.tagline + ')での差別化が必須。',
    whitespace: '同価格帯で「個性的な香り×携帯性×明確なターゲット設定」のクロス領域に空白あり。',
  },
  revenueBaseline: data.concept.name.includes('TSUKI')
    ? { retailPrice: 3200, costRatio: 28, monthlySalesEstimate: 350, initialLotSize: 2000, marketingRatio: 18, rationale: '高価格帯D2Cはアルミ素材+調香で原価率やや低め、広告よりPR・店頭体験にコスト配分。' }
    : data.concept.name.includes('Sucre')
    ? { retailPrice: 1650, costRatio: 38, monthlySalesEstimate: 1200, initialLotSize: 5000, marketingRatio: 30, rationale: 'プチプラ路線は薄利多売前提、TikTok広告など若年層向け広告比率を高めに設定。' }
    : { retailPrice: 1980, costRatio: 33, monthlySalesEstimate: 900, initialLotSize: 3500, marketingRatio: 24, rationale: 'ナチュラル路線はバイオマス素材で原価率やや高め、Instagram/LIPSなどSNS広告中心の広告ミックス。' },
});

export const generateDummyReviews = (data) => ({
  ratings: { predictedAverage: 4.2, fiveStarRatio: 48, fourStarRatio: 30, threeStarRatio: 14, twoStarRatio: 6, oneStarRatio: 2 },
  positiveReviews: [
    { stars: 5, title: `${data.concept.shortName}、最高♡`, body: `香りに惹かれて購入。${data.fragrance.name}の世界観が本当に素敵で、毎日塗るのが楽しみになりました。${data.concept.tagline}というコピー通りの体験ができます。`, persona: '28歳・会社員' },
    { stars: 5, title: 'ギフトにも喜ばれました', body: 'パッケージが上品で、友人へのプレゼントに購入したらとても喜ばれました。スティックタイプで持ち運びやすいのも◎。リピートします。', persona: '34歳・販売員' },
    { stars: 4, title: '使い心地が良い', body: 'リップ感覚で塗れるので外出先でも便利。ベタつかず、香りも程よい強さで職場でも気になりません。容量が少し物足りない。', persona: '31歳・事務' },
  ],
  negativeReviews: [
    { stars: 3, title: '思ったより香りが強め', body: '世界観は素敵ですが、想像より香りが強めでした。好みが分かれそう。サンプルがあれば良かったかも。', persona: '40歳・主婦', concern: '香りの強さの個人差' },
    { stars: 3, title: '価格に対して', body: '内容量に対して少し割高に感じます。デザインやコンセプトは気に入っているのですが、リピートを迷う価格帯。', persona: '26歳・接客業', concern: '価格と内容量のバランス' },
  ],
  actionableInsights: [
    { insight: '香りの個人差への対応', action: 'サンプル販売(300-500円)を必須化。LPで「香り強さ★3/5」など客観指標を提示。' },
    { insight: '内容量の納得感', action: '「リップ感覚で1日5-10回 × 約2ヶ月分」と具体的な使用回数で容量を可視化。' },
    { insight: 'ギフト需要の確認', action: 'ギフトラッピングの拡充、母の日・クリスマス向けの限定パッケージ展開。' },
    { insight: '世界観への評価が高い', action: 'コピー「' + data.concept.tagline + '」を全媒体で一貫して使用、ブランド資産として強化。' },
  ],
});

export const generateDummyMarketing = (data, formData) => ({
  lp: {
    headline: data.concept.tagline,
    subline: `${data.concept.shortName}—10gで届ける、${data.fragrance.mood.split(/[,、]/)[0]}な世界観。`,
    visualDirection: `${data.design.colorPalette[0].name}を基調にした清潔感のあるトーン。${data.fragrance.name}の世界観を反映した自然光のスタジオ写真と、ターゲットの日常シーンを織り交ぜる構成。`,
    sections: [
      { title: 'ファーストビュー', purpose: '3秒でブランド世界観を伝える', content: `製品の俯瞰写真+「${data.concept.tagline}」+価格表示` },
      { title: '共感ストーリー', purpose: 'ターゲットの悩みに寄り添う', content: '日常の手肌の悩み、香りへのこだわりに対する共感メッセージ' },
      { title: '商品の3つの特徴', purpose: '差別化ポイントを訴求', content: `①スティック型の携帯性 ②${data.fragrance.name}の独自香り設計 ③こだわりの素材` },
      { title: '香りの世界観', purpose: '情緒的な訴求', content: `${data.fragrance.name}の香りピラミッド+情景イラスト` },
      { title: '使用シーン', purpose: '日常への落とし込み', content: '想定ユースケース3シーンの写真とコピー' },
      { title: 'レビュー・お客様の声', purpose: '信頼形成', content: '★4以上のレビュー抜粋とSNS投稿の埋め込み' },
      { title: 'FAQ + 購入導線', purpose: '不安解消とCV', content: '成分・敏感肌・ギフト対応のFAQ→カートCTA' },
    ],
    faq: [
      { q: '敏感肌でも使えますか?', a: 'パッチテスト済みで、敏感肌の方にもお使いいただけます。心配な場合は事前にご確認ください。' },
      { q: 'ギフト包装はできますか?', a: '+220円で小箱包装+メッセージカード対応が可能です。各種ギフト需要に対応。' },
      { q: '香りの持続時間は?', a: '塗布後1〜2時間ほど。職場でも気にならないやさしい強さです。' },
    ],
  },
  social: {
    instagram: {
      feed: `${data.concept.name}\n— ${data.fragrance.name} —\n\n${data.concept.story}\n\n${data.fragrance.topNotes.join(' × ')}が奏でる、新しい香り体験。`,
      reels: `[15秒] 1)シーン引き(3秒) 2)製品クローズアップ(3秒) 3)使用シーン(3秒) 4)香りの情景イメージ(3秒) 5)ロゴ+「${data.concept.tagline}」(3秒)`,
      hashtags: ['#ハンドクリーム', '#スティックタイプ', `#${data.concept.shortName}`, '#コスメ', '#手元美人', '#香り', '#ボタニカル', '#ギフト'],
    },
    tiktok: {
      hook: `「${data.concept.tagline}」のテキストオーバーレイで開始、続けて製品ビジュアル`,
      format: '日常ルーティン系・ASMR系で、トレンド音源に乗せた30秒構成',
      script: '0-3秒: 強フック / 3-15秒: 使用シーンと香りの紹介 / 15-25秒: 商品特徴の解説 / 25-30秒: ロゴ+CTA',
    },
  },
  ad: {
    headlines: [data.concept.tagline, `${data.fragrance.name}が、毎日に寄り添う。`, `${data.concept.shortName}—携帯できる、私だけの香り。`],
    visualConcepts: [
      { name: 'ライフシーン訴求', description: 'ターゲットの日常の中で製品が自然に使われるシーンを切り取り、共感を呼ぶ構成。' },
      { name: '香りの世界観表現', description: `${data.fragrance.scenery.split('。')[0]}、をビジュアル化。` },
      { name: '製品の佇まい', description: '製品単体の美しさを最大限に引き出すスタジオショット。所有欲を喚起する構図で。' },
    ],
  },
  influencer: {
    tiers: [
      { tier: 'ナノ', range: '1k-10k', count: '25名', fee: 'ギフティングのみ(計約2万円)', purpose: 'ローンチ時のUGC量産・初期信頼資産の構築' },
      { tier: 'マイクロ', range: '10k-50k', count: '5名', fee: '1人 5-15万円(計30-75万円)', purpose: 'ターゲット層への信頼ある推奨投稿' },
      { tier: 'ミドル', range: '50k-200k', count: '1-2名', fee: '1人 40-80万円', purpose: 'ローンチ時の認知拡大・話題化' },
    ],
    personaTypes: [
      { type: '美容感度の高い投稿者', description: 'コスメ情報を日常的に発信、フォロワーの信頼が厚い', platforms: ['Instagram', 'X'], example: '@cosmeでベスコス選出歴のあるアカウント' },
      { type: 'ライフスタイル系', description: '丁寧な暮らしや日常を切り取る世界観で支持される', platforms: ['Instagram', 'TikTok'], example: '若手ライフスタイルクリエイター' },
      { type: 'ターゲット適合インフルエンサー', description: `${formData.lifestyle}の生活を発信する想定ターゲット同年代層`, platforms: ['Instagram'], example: 'ターゲットペルソナと近い属性の人気アカウント' },
    ],
    totalBudget: 'ローンチ時 約100-150万円(全層含む)',
    timeline: '発売2週間前: ナノギフティング送付 → 発売初日: マイクロ・ミドル一斉投稿 → 発売後1ヶ月: 第2弾UGCキャンペーン',
  },
});

export const generateDummyAB = (brandDirection) => {
  const isNatural = ['ナチュラル', 'クリーンビューティ系'].includes(brandDirection);
  return {
    variantA: isNatural
      ? { directionLabel: 'クリーン王道', name: '森のしずく', tagline: 'ポーチに森を、デスクに深呼吸を。', palette: [{ hex: '#5C7A4F', role: 'メイン' }, { hex: '#F4F1E8', role: 'ボディ' }, { hex: '#C4A878', role: 'アクセント' }], fragranceDirection: 'グリーンフローラル系の清潔感ある王道アロマ', differentiator: 'スティック型携帯性 × 国産植物由来エキスで王道のクリーンビューティポジション', pros: ['SHIROやSHIGETAなど競合に乗っかりやすい', 'ギフト需要が安定的に見込める', 'リピート設計しやすい'], cons: ['競合が多くオリジナリティで埋もれるリスク', '価格競争に巻き込まれやすい'] }
      : { directionLabel: 'ミニマル系', name: 'KOKAGE 06', tagline: '手のひらに、静けさを。', palette: [{ hex: '#2C3A2D', role: 'ボディ' }, { hex: '#A8A99E', role: 'キャップ' }, { hex: '#1A1F1B', role: 'ロゴ' }], fragranceDirection: 'ウッディ・スパイシー系のニッチで内省的な香り', differentiator: '番号で続くシリーズ展開とアルミチューブによる「物としての佇まい」', pros: ['コレクション性で高LTV', 'ジェンダーレスでターゲット拡大', 'D2Cで世界観構築しやすい'], cons: ['初動は緩やか、認知拡大に時間が必要', '価格訴求が難しい'] },
    variantB: isNatural
      ? { directionLabel: '個性派ボタニカル', name: '山霧の便り', tagline: '霧の中で、深呼吸する。', palette: [{ hex: '#3D5A4F', role: 'メイン' }, { hex: '#E0DCC8', role: 'ボディ' }, { hex: '#7A6E54', role: 'アクセント' }], fragranceDirection: 'スモーキーグリーン+和ハーブの個性的アロマ', differentiator: '日本の山岳植物に着想を得た独自処方と、文学的なブランド世界観', pros: ['競合との差別化が明確', 'ストーリー性で熱量の高いファン獲得', 'メディア取材を受けやすい'], cons: ['好み分かれて初動が読みづらい', 'ターゲットの絞り込みが必要'] }
      : { directionLabel: 'ラグジュアリー', name: 'NUIT NOIRE 06', tagline: '夜が、肌に宿る。', palette: [{ hex: '#1A1A1A', role: 'ボディ' }, { hex: '#C8A878', role: 'キャップ' }, { hex: '#FFFFFF', role: 'ロゴ' }], fragranceDirection: 'インセンス・ウード系の高級フレグランス調', differentiator: '価格帯を5,500円に上げ、デパート流通対応のラグジュアリーD2C', pros: ['粗利率が高い(45%以上見込)', '富裕層の安定購買', 'ブランド単価が確立できる'], cons: ['初期投資が大きい', 'ターゲットが狭く規模化に時間がかかる'] },
    comparison: '案Aは堅実な王道路線で初動の売上が見込みやすく、ギフト需要も取り込めます。案Bは差別化と話題性で攻める路線で、長期的なブランド価値構築に向きます。リスク許容度と中長期戦略で選択を。',
  };
};
