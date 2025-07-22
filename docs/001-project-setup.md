# チケット #001: プロジェクトセットアップ

## 概要
Next.js 14（App Router）を使用したVibeCoding動画講座プラットフォームの初期セットアップを行う。

## 目的
- 開発環境の構築
- 必要なパッケージのインストール
- 基本的なプロジェクト構造の作成

## タスクリスト

- [ ] Next.jsプロジェクトの作成
  - [ ] `create-next-app`の実行
  - [ ] TypeScript、Tailwind CSS、App Routerの設定
  - [ ] ESLintの設定

- [ ] プロジェクト構造の整理
  - [ ] `src/components`ディレクトリの作成
  - [ ] `src/lib`ディレクトリの作成
  - [ ] `src/types`ディレクトリの作成
  - [ ] `src/data`ディレクトリの作成
  - [ ] `src/hooks`ディレクトリの作成

- [ ] 基本設定ファイルの調整
  - [ ] `tsconfig.json`のパスエイリアス設定
  - [ ] `tailwind.config.ts`のカスタマイズ
  - [ ] `next.config.ts`の設定

- [ ] 開発用パッケージのインストール
  - [ ] `clsx`と`tailwind-merge`のインストール
  - [ ] 型定義ファイルの追加

## 技術仕様
- Next.js 14.x
- TypeScript 5.x
- Tailwind CSS 3.x
- React 18.x

## 完了条件
- `npm run dev`でプロジェクトが正常に起動する
- TypeScriptのコンパイルエラーがない
- 基本的なフォルダ構造が整っている

## 備考
- Node.js 18以上が必要
- npmまたはyarnを使用（npmを推奨）