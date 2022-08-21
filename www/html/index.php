<?php
// phpinfo();
require(dirname(__FILE__) . "/dbconnect.php");
$stmt = $pdo->prepare("SELECT * FROM big_questions");
// (5) SQL実行
$res = $stmt->execute();

// (6) 該当するデータを取得
$data = $stmt->fetch();
var_dump($data);

// (7) データベースの接続解除
$pdo = null;
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./normalize.css">
    <link rel="stylesheet" href="style.css">
    <title>quizy頑張るよ!</title>
</head>

<body>
    <h1 class="title">ガチで東京の人しか解けない！#東京の難読地名クイズ</h1>
    <script type="text/javascript" src="app.js"></script>
</body>

</html>