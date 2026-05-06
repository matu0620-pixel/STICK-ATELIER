# STICK ATELIER

スティック型ハンドクリームに特化した、ブランドモデリング Web ツール。
ペルソナ入力から市場トレンド分析・ブランド設計・デザインカスタマイズ・事業性検証・マーケティング戦略・レビュー予測まで一気通貫で行えるシングルページアプリです。

> 🎨 **DEMO MODE** — 本リポジトリはダミーデータで動作するデモ版です。AI APIキー無しで全機能を試せます。

---

## ✨ 機能

### 入力
- ペルソナ設定:年齢層・性別・ライフスタイル・シーズン・価格帯・ブランド方向性
- 任意の追加要件入力

### 出力
1. **市場トレンド分析** — 人気商品 TOP 5・成功要因・トレンドキーワード・成功ヒント
2. **ブランド単案生成** — コンセプト/タグライン/ストーリー一括生成
3. **A/B 2案比較** — 異なる方向性で2案同時生成
4. **デザイン** — カラーパレット・素材・フォルム・タイポグラフィ・ディテール+ 容器モックアップSVG
5. **デザインカスタマイズ** — 商品名・3色のカラーピッカー・モチーフ7種をリアルタイム編集
6. **香り設計** — トップ/ミドル/ベースの3層構造ピラミッド+情景描写+ムード
7. **EC販売戦略** — SEO最適化商品名・キャッチコピー・価格戦略・推奨プラットフォーム・キーワード
8. **事業性検証**
   - 競合ポジショニングマップSVG
   - 5スライダーで操作可能な収益シミュレーション
   - 12ヶ月の累計損益チャート
9. **レビュー予測** — 平均★・分布・好評3件/懸念2件・改善アクション4件
10. **マーケティング戦略** — LP構成7セクション+FAQ・Instagram/TikTokテンプレ・広告ヘッドライン3案・インフルエンサー3層+ペルソナ3タイプ

### サンプル
プリセットの2サンプルブランド(SAMPLE A「森のしずく」/ SAMPLE B「KOKAGE 06」)で全機能の出力結果を即時確認できます。

---

## 🛠 技術スタック

- [Vite 5](https://vitejs.dev/) — ビルド + 開発サーバ
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) — アイコン
- 全モックアップ・チャート・ロゴはインライン SVG 自前実装(外部画像なし)

---

## 🚀 セットアップ

```bash
# 1. リポジトリをクローン
git clone https://github.com/YOUR_USERNAME/stick-atelier.git
cd stick-atelier

# 2. 依存関係をインストール
npm install

# 3. 開発サーバを起動
npm run dev
# → http://localhost:5173/ を開く

# 4. 本番ビルド
npm run build
# → dist/ に出力される

# 5. ビルド結果のローカルプレビュー
npm run preview
```

Node.js 18 以上を推奨します。

---

## 📁 ディレクトリ構成

```
stick-atelier/
├── public/
│   └── favicon.svg              # STICK ATELIER 簡易ロゴ
├── src/
│   ├── components/
│   │   ├── Logo.jsx             # SVGエディトリアルワードマーク
│   │   ├── ContainerMockup.jsx  # スティック容器モックアップSVG
│   │   ├── PositioningMap.jsx   # 競合ポジショニングマップ
│   │   ├── RevenueSimulator.jsx # 5スライダー収益シミュレーター
│   │   ├── TrendSection.jsx     # 市場トレンド分析セクション
│   │   ├── ResultTabs1.jsx      # デザイン/香り/EC タブ
│   │   ├── ResultTabs2.jsx      # 事業性/マーケ タブ
│   │   └── shared.jsx           # 共通UI部品(Pill, SectionLabel, など)
│   ├── data/
│   │   ├── samples.js           # サンプルブランドA/Bの全データ
│   │   ├── dummies.js           # ダミー結果生成関数
│   │   └── options.js           # フォーム選択肢・初期値
│   ├── App.jsx                  # メインコンポーネント
│   ├── main.jsx                 # React エントリポイント
│   └── index.css                # Tailwind + グローバルスタイル
├── .github/workflows/
│   └── deploy.yml               # GitHub Pages 自動デプロイ
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

---

## 🌐 GitHub Pages へのデプロイ

リポジトリには GitHub Actions ワークフロー (`.github/workflows/deploy.yml`) が含まれており、`main` ブランチへの push で自動的にビルド+ Pages デプロイされます。

### 初回セットアップ手順

1. GitHub にリポジトリを作成し、push する
2. リポジトリの **Settings → Pages** を開く
3. "Build and deployment" の **Source** を **GitHub Actions** に設定
4. `main` ブランチに push すると自動デプロイが走り、`https://YOUR_USERNAME.github.io/stick-atelier/` で公開される

### サブパスでの公開について

`vite.config.js` で `base: './'` を指定済みのため、リポジトリ名のサブパスでも正しく動作します。

---

## 🔄 本番 API への切り替え方法

現在は全ての生成機能が `setTimeout` ベースのダミーで動作しています(`src/App.jsx` 内の `simulateAPI` 関数)。

本番運用時は、各 `generate*` 関数の中身を実 API 呼び出しに差し替えるだけで済みます:

```js
// 例: トレンド分析を Anthropic Claude API に置き換える
const generateTrendAnalysis = async () => {
  setTrendLoading(true);
  setTrendData(null);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': YOUR_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 4096,
      messages: [{ role: 'user', content: 'トレンド分析プロンプト...' }],
    }),
  });
  const data = await response.json();
  setTrendData(JSON.parse(data.content[0].text));
  setTrendLoading(false);
};
```

各機能で推奨される AI モデルの組み合わせ例:

| 機能 | 推奨 AI |
| --- | --- |
| 市場トレンド分析 | Perplexity Sonar API + Claude Sonnet |
| コンセプト/コピー生成 | Claude Opus |
| 構造化分析(事業性・レビュー予測) | Claude Sonnet または Haiku |
| ビジュアルモックアップ画像生成 | Flux Pro / Midjourney / Adobe Firefly |
| 数値計算(収益シミュレーション) | 純 JavaScript(現状のまま) |

---

## 🎨 ブランドアイデンティティ

- **配色** — ディープブルー (#2C4A6E) × ゴールド (#C4A878) × クリーム (#F1EFE5)
- **書体** — 本文: Meiryo UI / 見出し(ロゴ): セリフ + サンセリフ混在のエディトリアル構成
- **トーン** — Kinfolk・Cereal Magazine 系の編集的世界観

---

## 📱 レスポンシブデザイン

画面サイズに応じて自動的にレイアウトが最適化されます:

| 画面幅 | レイアウト | 内部グリッド |
| --- | --- | --- |
| < 768px (スマホ) | 全幅・1カラム | 1カラム |
| ≥ 768px (タブレット) | max-w-3xl 中央寄せ | 主要セクション 2カラム化 |
| ≥ 1024px (PC) | max-w-5xl 中央寄せ | 事業性タブで競合マップと収益シミュ並列、3カラム化 |

主な自動切り替え箇所:

- **サンプルカード** - 1 → 2カラム
- **ペルソナ入力フォーム** - 1 → 2カラム
- **トレンド人気商品 TOP 5** - 1 → 2カラム
- **共通する成功要因** - 1 → 2カラム
- **デザインタブの素材/フォルム/タイポ/ディテール** - 1 → 2カラム
- **香りピラミッド (Top/Mid/Base)** - 縦 → 3カラム横並び
- **事業性タブの競合マップ + 収益シミュレーター** - 縦 → 横並び (lg+)
- **レビュー(好評3件/懸念2件/改善アクション)** - 1 → 2-3カラム
- **マーケティングLP構成 7セクション** - 1 → 2カラム
- **Instagram + TikTok テンプレ** - 縦 → 横並び
- **広告ヘッドライン3案・ビジュアルコンセプト3案** - 1 → 3カラム
- **インフルエンサー階層3層・ペルソナ3タイプ** - 1 → 3カラム

スマホ向け最適化:

- viewport-fit=cover でノッチ付き iPhone 対応
- iOS フォーム拡大防止(input フォントサイズ 16px 固定)
- safe-area-inset でホームインジケーター回避
- min-h-dvh でアドレスバー伸縮への対応
- タップ反応高速化(touch-action: manipulation)
- iPhone SE 320px でも収まる5タブ設計

---

## 📄 ライセンス

MIT License — 詳細は LICENSE ファイルを参照(必要に応じて追加してください)。

---

## 🤝 Contributing

PR・Issue 大歓迎です。新機能の提案、UI改善、ダミーデータのバリエーション追加などお気軽にどうぞ。
