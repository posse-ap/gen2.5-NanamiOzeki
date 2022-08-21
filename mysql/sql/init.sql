-- なんて名前のテーブルを作るか、どういう項目の列を作りたいか（東京、広島とかのidとnameの列を作りたいかなど）をかく

DROP SCHEMA IF EXISTS quizy;
CREATE SCHEMA quizy;
USE quizy;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions
(
  id           INT(10),
  name     VARCHAR(40)
);

INSERT INTO big_questions (id, name) VALUES (1, "東京の難読地名クイズ"),(2, "広島県の難読地名クイズ");