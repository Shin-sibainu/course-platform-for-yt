# チケット #003: モックデータの作成

## 概要
講座プラットフォームで使用するモックデータを作成する。

## 目的
- 開発中に使用する現実的なサンプルデータの準備
- データ構造の検証
- UIテストのためのデータセット

## タスクリスト

- [x] 型定義の作成
  - [x] `Course`インターフェースの定義
  - [x] `Section`インターフェースの定義
  - [x] `Video`インターフェースの定義
  - [x] `Category`インターフェースの定義

- [x] モックデータの作成
  - [x] カテゴリデータ（Next.js、Claude Code、React、TypeScript）
  - [x] 講座データ（各カテゴリ2-3講座）
  - [x] セクションデータ（各講座5-10セクション）
  - [x] 動画データ（各講座30-50動画）

- [x] データアクセス関数の作成
  - [x] `getCourses()`関数
  - [x] `getCourseById()`関数
  - [x] `getCoursesByCategory()`関数
  - [x] `getCategories()`関数
  - [x] `getCategoryById()`関数
  - [x] `generateFullCourseVideos()`関数

- [x] YouTube動画IDの収集
  - [x] 実際のYouTube動画IDを使用（またはダミーID）
  - [x] サムネイル画像URLの設定

## 技術仕様
- TypeScriptで型安全なデータ構造
- JSONファイルまたはTypeScriptファイルでデータ管理
- 実際のYouTube APIは使用しない（埋め込みのみ）

## 完了条件
- すべての型定義が完成している
- 各カテゴリに最低2つの講座がある
- 各講座に30本以上の動画データがある
- データアクセス関数が正常に動作する

## 備考
- 動画の再生時間は適当な値でOK（例：5:30、12:45など）
- 講座の説明文はLorem Ipsumまたは適当な日本語でOK