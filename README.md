## 1. はじめに
本ディレクトリはすみだストリートジャズフェスティバルのwebサイトソースコードを格納するディレクトリです．

## 2. commitメッセージの書き方
以下のフォーマットとします。

1行目：変更内容の要約（タイトル、概要）\
2行目 ：空行\
3行目以降：変更した理由（内容、詳細）

※1行目は課題Noがある場合のみ、refs #[課題No]を記載する．

### 例
:bug:削除フラグが更新されない不具合の修正

[detail] 更新SQLの対象カラムに削除フラグが含まれていなかったため追加しました。

### コミット種別
* fix(bug)：バグ修正
* add(sparkles)：新規（ファイル）機能追加
* update(hammer)：機能修正（バグではない）
* remove(wastebasket)：削除（ファイル）

### Prefixのアイコン
以下のアイコン名を::で囲うと使用できます．

* tada：:tada: 初めてのコミット（Initial Commit）
* sparkles：:sparkles: 新機能追加（Add）
* bug：:bug: バグ修正（Fix）
* hammer：:hammer: 機能修正(Update)
* wastebasket：:wastebasket: スクリプト削除（Remove）
* construction：:construction: 作業途中、WIP(Work In Progress)
* recycle：:recycle: リファクタリング、コード整理(Refactoring)
* art：:art: デザインUI/UX変更(Accessibility)
* horse：:horse: パフォーマンス向上に関する修正(Performance)
* rotating_light：:rotating_light: テストコード追加(Tests)