# チケット #005: 講座詳細・動画視聴ページの実装

## 概要
講座の詳細情報とカリキュラムを表示し、YouTube動画を視聴できるページを実装する。

## 目的
- 講座内容の詳細表示
- カリキュラム形式での動画一覧
- YouTube動画のシームレスな再生体験

## タスクリスト

- [x] ページコンポーネントの作成
  - [x] `app/courses/[id]/page.tsx`の実装
  - [x] 動的ルーティングの設定
  - [ ] メタデータの動的生成

- [x] UIコンポーネントの実装
  - [x] `CourseHeader`コンポーネントの作成
  - [x] `VideoPlayer`コンポーネントの作成
  - [x] `Curriculum`コンポーネントの作成
  - [x] `VideoList`コンポーネントの作成
  - [x] `ProgressBar`コンポーネントの作成（UIのみ）

- [x] 機能実装
  - [x] 講座データの取得（ID基準）
  - [x] 動画の選択と切り替え
  - [x] カリキュラムのアコーディオン表示
  - [x] 完了チェックボックス（UIのみ）
  - [x] 動的な動画生成（30-50本）
  - [x] 進捗の自動更新（デモ用）

- [x] レイアウト実装
  - [x] 2カラムレイアウト（動画プレーヤー + カリキュラム）
  - [x] モバイル対応（1カラム）
  - [x] スティッキーカリキュラム
  - [x] 次の動画の提案
  - [x] 講座詳細セクション

## デザイン仕様
- ページ構成：
  - 講座ヘッダー（タイトル、概要、講師情報）
  - 動画プレーヤーエリア（左側/上部）
  - カリキュラムリスト（右側/下部）
  - 進捗バー（全体の学習進捗をビジュアル表示）

## 技術仕様
- YouTube iframe APIの使用
- サーバーコンポーネントでデータフェッチ
- クライアントコンポーネントで動画切り替え

## 完了条件
- 講座詳細が正しく表示される
- YouTube動画が再生できる
- カリキュラムから動画を選択できる
- レスポンシブデザインが機能する

## 備考
- 動画の自動再生は実装しない
- 実際の進捗トラッキングは実装しない（UIのみ）