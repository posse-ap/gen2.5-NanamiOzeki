// document.write('');

'use strict';

let selections = [
  ['たかなわ', 'たかわ', 'こうわ'],
  ['かめいど', 'かめと', 'かめど'],
  ['こうじまち', 'かゆまち', 'おかとまち'],
  ['おなりもん', 'おかどもん', 'ごせいもん'],
  ['とどろき', 'たたら', 'たたりき'],
  ['しゃくじい', 'せきこうい', 'いじい'],
  ['ぞうしき', 'ざっしょく', 'ざっしき'],
  ['おかちまち', 'ごしろちょう', 'みとちょう'],
  ['ししぼね', 'しこね', 'ろっこつ'],
  ['こぐれ', 'こしゃく', 'こばく'],
];

let correctChoices = [
  'たかなわ',
  'かめいど',
  'こうじまち',
  'おなりもん', 
  'とどろき', 
  'しゃくじい',
  'ぞうしき',
  'おかちまち', 
  'ししぼね', 
  'こぐれ', 
];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) { // i = ランダムに選ぶ終点のインデックス
    const j = Math.floor(Math.random() * (i + 1));  // j = 範囲内から選ぶランダム変数
    [arr[j], arr[i]] = [arr[i], arr[j]]; // 分割代入 i と j を入れ替える
  }
  return arr;
};

for(let i = 0; i < selections.length; i++){
  shuffle(selections[i]);
};

for (let i = 0; i < selections.length; i++) {
  let html = '<div class="wrapper" id="wrapper">'
    + '<div class="content">'
    + `<h2 class="question">${i + 1}.この地名はなんて読む？</h2>`
    + '<div class="img">'
    + `<img src="imgs/${i + 1}.png" alt="">`
    + '</div>'
    + '<ul class="selections">'
    + `<li class="selection" id="selection${i + 1}-1">${selections[i][0]}</li>`
    + `<li class="selection" id="selection${i + 1}-2">${selections[i][1]}</li>`
    + `<li class="selection" id="selection${i + 1}-3">${selections[i][2]}</li>`
    + '</ul>'
    + '</div>'
    + `<div class="correctBox" id="correctBox${i + 1}">`
    + `<b class="correctTitle" id="correctTitle${i + 1}">正解！</b>`
    + `<b class="uncorrectTitle" id="uncorrectTitle${i + 1}">不正解！</b>`
    + `<p>正解は「${correctChoices[i]}」です！</p>`
    + '</div>'
    + '</div>'
  document.write(html);
}

for (let i = 0; i < selections.length; i++) {
    if (document.getElementById(`selection${i + 1}-1`).innerHTML == correctChoices[i]) {
      let correctSelection = document.getElementById(`selection${i + 1}-1`);
      let incorrectSelection1 = document.getElementById(`selection${i + 1}-2`);
      let incorrectSelection2 = document.getElementById(`selection${i + 1}-3`);
      // 正解をクリックした時に青くする
      correctSelection.addEventListener('click', function () {
      correctSelection.style.background = '#287dff';
      correctSelection.style.color = 'white';
      correctBox.style.display = 'block';
      correctSelection.classList.add("cantclick")
      incorrectSelection1.classList.add("cantclick")
      incorrectSelection2.classList.add("cantclick")
    correctTitle.style.display = 'block';
  })
  // 不正解をクリックしたときに赤くする
  incorrectSelection1.addEventListener('click', function () {
    incorrectSelection1.style.background = 'red';
    incorrectSelection1.style.color = 'white';
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })
  incorrectSelection2.addEventListener('click', function () {
    incorrectSelection2.style.background = 'red';
    incorrectSelection2.style.color = 'white';
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })

    } 
    if(document.getElementById(`selection${i + 1}-2`).innerHTML == correctChoices[i]){
      let correctSelection = document.getElementById(`selection${i + 1}-2`);
      let incorrectSelection1 = document.getElementById(`selection${i + 1}-1`);
      let incorrectSelection2 = document.getElementById(`selection${i + 1}-3`);
      // 正解をクリックした時に青くする
  correctSelection.addEventListener('click', function () {
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctBox.style.display = 'block';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctTitle.style.display = 'block';
  })
  // 不正解をクリックしたときに赤くする
  incorrectSelection1.addEventListener('click', function () {
    incorrectSelection1.style.background = 'red';
    incorrectSelection1.style.color = 'white';
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })
  incorrectSelection2.addEventListener('click', function () {
    incorrectSelection2.style.background = 'red';
    incorrectSelection2.style.color = 'white';
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })
    }
    if(document.getElementById(`selection${i + 1}-3`).innerHTML == correctChoices[i]){
      let correctSelection = document.getElementById(`selection${i + 1}-3`);
      let incorrectSelection1 = document.getElementById(`selection${i + 1}-1`);
      let incorrectSelection2 = document.getElementById(`selection${i + 1}-2`);
      // 正解をクリックした時に青くする
  correctSelection.addEventListener('click', function () {
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctBox.style.display = 'block';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctTitle.style.display = 'block';
  })
  // 不正解をクリックしたときに赤くする
  incorrectSelection1.addEventListener('click', function () {
    incorrectSelection1.style.background = 'red';
    incorrectSelection1.style.color = 'white';
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })
  incorrectSelection2.addEventListener('click', function () {
    incorrectSelection2.style.background = 'red';
    incorrectSelection2.style.color = 'white';
    correctSelection.style.background = '#287dff';
    correctSelection.style.color = 'white';
    correctSelection.classList.add("cantclick")
    incorrectSelection1.classList.add("cantclick")
    incorrectSelection2.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })
    }

  let correctBox = document.getElementById(`correctBox${i + 1}`);
  let correctTitle = document.getElementById(`correctTitle${i + 1}`);
  let uncorrectTitle = document.getElementById(`uncorrectTitle${i + 1}`);
  }