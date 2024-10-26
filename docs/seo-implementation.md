# SEO実装ガイド

## 実装箇所

### 1. ルートレイアウト（`src/app/layout.tsx`）
```typescript
// デフォルトのメタデータ設定
export const metadata: Metadata = {
  title: {
    default: "サイトのデフォルトタイトル",
    template: "%s | サイト名"
  },
  description: "サイトの説明",
  keywords: ["キーワード1", "キーワード2"],
  openGraph: {
    title: "OGタイトル",
    description: "OG説明",
    images: "/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 2. 各ページコンポーネント
```typescript
// 例: src/app/about/page.tsx
export const metadata: Metadata = {
  title: "会社概要",
  description: "会社概要のページ固有の説明",
  openGraph: {
    title: "会社概要 | サイト名",
    description: "会社概要のOG説明",
  }
};
```

### 3. サイトマップ生成（`src/app/sitemap.ts`）
```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
    },
    // 他のページも同様に
  ];
}
```

### 4. robots.txt（`src/app/robots.ts`）
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  };
}
```

## 実装すべき要素

### メタデータ
- `title`: ページタイトル
- `description`: ページの説明
- `keywords`: 検索キーワード
- `robots`: クローラーの制御
- `canonical`: 正規URL
- `alternates`: 代替言語URL

### OGP（Open Graph Protocol）
- `og:title`: シェア時のタイトル
- `og:description`: シェア時の説明
- `og:image`: シェア時の画像
- `og:url`: シェア時のURL
- `og:type`: コンテンツタイプ

### その他
- `twitter:card`: Twitter表示形式
- `twitter:site`: Twitterアカウント
- JSON-LDによる構造化データ

## 実装手順

1. **ベースの設定**
   - `layout.tsx`でサイト共通のメタデータを設定

2. **ページごとの設定**
   - 各`page.tsx`で個別のメタデータを設定
   - 動的なメタデータが必要な場合は`generateMetadata`関数を使用

3. **サイトマップの生成**
   - 静的ページの場合は`sitemap.ts`で定義
   - 動的ページの場合はデータに基づいて生成

4. **robots.txtの設定**
   - クローラーのアクセス制御
   - サイトマップの場所指定

## パフォーマンス最適化

- 画像の最適化（`next/image`の使用）
- レスポンシブデザイン
- Core Web Vitalsの改善
  - LCP（Largest Contentful Paint）
  - FID（First Input Delay）
  - CLS（Cumulative Layout Shift）

## 注意点

1. **動的OGP画像**
   - 必要に応じて`/api/og`エンドポイントで動的生成

2. **国際化対応**
   - 言語別のメタデータ設定
   - `hreflang`タグの適切な設定

3. **構造化データ**
   - 適切なJSON-LDの実装
   - Google Search Consoleでの検証

4. **パフォーマンス**
   - メタデータの動的生成による遅延を最小限に

---
注: 各設定値は実際のプロジェクト要件に応じて適切に変更してください。 