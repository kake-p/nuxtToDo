### プロジェクト概要

## GitHub使用ルール
GitHubFlowで開発する。
開発する機能ごとにfeatureブランチを作成する。（開発機能に合わせた命名をする。）
自分が開発中のブランチを必ず以下に記載する。
[kazuki: "style"branch]
[tsuji: " "branch]

# 注意
1.masterブランチは常にリリース可能な状態にしておく。
2.featureブランチは必ずmasterブランチから作成する。
3.ローカルブランチの内容を定期的にリモートにPushする。
4.プルリクエストを使ってコードレビューを行うことで品質を担保する

## 使用技術一覧
<img src="https://img.shields.io/badge/-Vue.js-4FC08D.svg?logo=vue.js&style=plastic">
<img src="https://img.shields.io/badge/-Nuxt.js-00DC82.svg?logo=nuxt.js&style=plastic">
<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fimg.shields.io%2Fbadge%2F-TypeScript-000000.svg%3Fstyle%3Dfor-the-badge%26logo%3Dtypescript%26logoColor%3D61DAFB?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=b967daeeb573b1ec59a6d50d8864bd0a">
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
