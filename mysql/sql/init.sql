-- なんて名前のテーブルを作るか、どういう項目の列を作りたいか（東京、広島とかのidとnameの列を作りたいかなど）をかく
DROP SCHEMA IF EXISTS quizy;CREATE SCHEMA quizy;USE quizy;
DROP TABLE IF EXISTS big_questions;
CREATE TABLE big_questions (id INT(10), name VARCHAR(255));
INSERT INTO
    big_questions (id, name)
VALUES
    (1, "東京の難読地名クイズ"),
    (2, "広島県の難読地名クイズ");
DROP TABLE IF EXISTS questions;
CREATE TABLE questions (id INT(10), big_question_id INT(10), image VARCHAR(255));
INSERT INTO
    questions (id, big_question_id, image)
VALUES
    (1, 1, "takanawa.png"),
    (2, 1, "kameido.png"),
    (3, 2, "mukainada.png");
DROP TABLE IF EXISTS choices;
CREATE TABLE choices (id INT(10), question_id INT(10), name VARCHAR(255), valid INT(10));
INSERT INTO
    choices (id, question_id, name, valid)
VALUES
    (1, 1, "たかなわ", 1),
    (2, 1, "たかわ", 0),
    (3, 1, "こうわ", 0),
    (4, 2, "かめと", 0),
    (5, 2, "かめど", 0),
    (6, 2, "かめいど", 1),
    (7, 3, "むこうひら", 0),
    (8, 3, "むきひら", 0),
    (9, 3, "むかいなだ", 1);