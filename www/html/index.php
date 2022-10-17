<?php
// phpinfo();
require(dirname(__FILE__) . "/dbconnect.php");
$id = filter_input(INPUT_GET, 'id');
function big_questions($db, $id)
{
    $stmt = $db->prepare("SELECT * FROM choices WHERE question_id=?");

    // 一個め（はてなになっている位置を指定）,何を定義しているか
    $stmt->bindValue(1, $id);
    // (5) SQL実行
    $stmt->execute();

    // (6) 該当するデータを取得
    global $data;
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    // print_r($data["name"]);
}
// big_questions($db, $id);
// print_r($data);

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
    // print_r('<pre>');
    // print_r($questions_data);
    // print_r('</pre>');
}
questions($db, $id);
// print_r($questions_data);

function choices($db, $id)
{
    $stmt = $db->prepare("SELECT question_id, name FROM choices WHERE big_question_id=?");

    // 一個め（はてなになっている位置を指定）,何を定義しているか
    $stmt->bindValue(1, $id);
    // (5) SQL実行
    $stmt->execute();

    // (6) 該当するデータを取得
    global $choices_data;
    $choices_data = $stmt->fetchAll(PDO::FETCH_COLUMN | PDO::FETCH_GROUP);
    print_r('<pre>');
    print_r($choices_data);
    print_r('</pre>');
}
choices($db, $id);
// print_r($choices_data);

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
    <?php for ($i = $questions_data[0]['id']; $i < count($questions_data) + $questions_data[0]['id']; $i++) { ?>
        <?php $stmt = $db->prepare("SELECT * FROM choices WHERE question_id=?");

        // 一個め（はてなになっている位置を指定）,何を定義しているか
        $stmt->bindValue(1, $i);
        // (5) SQL実行
        $stmt->execute();
        // print_r('<pre>');
        // print_r($questions_data);
        // print_r('</pre>');
        // (6) 該当するデータを取得
        global $data;
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        ?>
        <div class="wrapper" id="wrapper">
            <div class="content">
                <h2 class="question">.この地名はなんて読む？</h2>
                <div class="img">
                    <img src="<?php echo "./imgs/" . $questions_data[$i-$questions_data[0]['id']]['image'] ?>" alt="">
                </div>
                <ul class="selections">
                    <li class="selection"><?php echo $choices_data[$i][0]; ?></li>
                </ul>
                <ul class="selections">
                    <li class="selection"><?php echo $choices_data[$i][1]; ?></li>
                </ul>
                <ul class="selections">
                    <li class="selection"><?php echo $choices_data[$i][2]; ?></li>
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
