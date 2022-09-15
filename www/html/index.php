<?php
// phpinfo();
require(dirname(__FILE__) . "/dbconnect.php");
$id = filter_input(INPUT_GET, 'id');
function big_questions($db, $id)
{
    $stmt = $db->prepare("SELECT * FROM big_questions WHERE id=?");

    // 一個め（はてなになっている位置を指定）,何を定義しているか
    $stmt->bindValue(1, $id);
    // (5) SQL実行
    $stmt->execute();

    // (6) 該当するデータを取得
    global $data;
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    print_r($data["name"]);

    $stmt = $db->prepare("SELECT * FROM big_questions WHERE id=?");
}
big_questions($db, $id);
print_r($data);

function questions($db, $id)
{
    $stmt = $db->prepare("SELECT * FROM questions WHERE big_question_id=?");

    // 一個め（はてなになっている位置を指定）,何を定義しているか
    $stmt->bindValue(1, $id);
    // (5) SQL実行
    $stmt->execute();

    // (6) 該当するデータを取得
    global $questions_data;
    $questions_data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r('<pre>');
    print_r($questions_data);
    print_r('</pre>');
}

questions($db, $id);

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
    <?php for ($i=0; $i < count($questions_data); $i++) { ?>
    <div class="wrapper" id="wrapper">
        <div class="content">
            <h2 class="question">.この地名はなんて読む？</h2>
            <div class="img">
                <img src="<?php echo "./imgs/" . $questions_data[$i]['image'] ?>" alt="">
            </div>
            <ul class="selections">
                <li class="selection" id="selection"></li>
                <li class="selection" id="selection"></li>
                <li class="selection" id="selection"></li>
            </ul>
        </div>
        <div class="correctBox" id="correctBox">
            <b class="correctTitle" id="correctTitle">正解！</b>
            <b class="uncorrectTitle" id="uncorrectTitle">不正解！</b>
            <p>正解は「」です！</p>
        </div>
    </div>
    <?php } ?>
</body>

</html>