# ①課題番号-プロダクト名

タイトル：あれ？昨日何食べたっけ？

記憶力が衰えると、「昨日（に限らず、ちょっと前に）何食べたか思い出せない・・・」となります。
このアプリを使うと、「ごはんの写真を見て、いつ食べたか思い出す」というクイズができます。
そのクイズに答えることで、記憶力の衰えを克服することができます。

## ②課題内容（どんな作品か）

- 保存機能
  - 毎日ご飯の写真を撮って、アップロードする
  - 写真のデータと一緒に、それをアップロードした日付も自動的に保存される
- クイズ機能
  - 写真が表示されて、日付が３つ表示されるので、正解と思う日付を選択する
  - 選択すると、正解不正解が表示される

## ③DEMO

https://hryktkuch.github.io/03_localStorage_14/

## ④作ったアプリケーション用のIDまたはPasswordがある場合

なし

## ⑤工夫した点・こだわった点

- 写真と日付をあわせて保存するようにした
- 間違いの選択肢も含めて、自動で生成されるようにした

## ⑥難しかった点・次回トライしたいこと(又は機能)

- アップロードした写真をbase64に変換するところ、それをデコードして表示するところは、なんかよくわかってないけど動いてはいる
- 選択肢のエラー処理がイマイチ（今のままだと、5月32日などの選択肢が出てしまう）
- 見た目はなんもできてない

## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- localStorageに入れたデータ自体の形式を変更すると、動作確認のために全部書き直さないといけなくなる。localStorageを直接読み書きする方法はないのかしら。
