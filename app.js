// document.write('');

'use strict';

// // let selections1 = document.getElementById('selections1');
// let selections2 = document.getElementById('selections2');
// let selections3 = document.getElementById('selections3');
// // let selections1 = document.getElementById('selection1-1');
// // console.log(selections1);
// let correctBox = document.getElementById('correctBox');
// let correctTitle = document.getElementById('correctTitle');
// let uncorrectTitle = document.getElementById('uncorrectTitle');

// 正解をクリックした時に青くする
// selections1.addEventListener('click', function () {
//   selections1.style.background = '#287dff';
//   selections1.style.color = 'white';
//   correctBox.style.display = 'block';
//   selections1.classList.add("cantclick")
//   selections2.classList.add("cantclick")
//   selections3.classList.add("cantclick")
//   correctTitle.style.display = 'block';
// })

// // 不正解をクリックしたときに赤くする
// selections2.addEventListener('click', function () {
//   selections2.style.background = 'red';
//   selections2.style.color = 'white';
//   selections1.style.background = '#287dff';
//   selections1.style.color = 'white';
//   selections1.classList.add("cantclick")
//   selections2.classList.add("cantclick")
//   selections3.classList.add("cantclick")
//   correctBox.style.display = 'block';
//   uncorrectTitle.style.display = 'block';
// })
// selections3.addEventListener('click', function () {
//   selections3.style.background = 'red';
//   selections3.style.color = 'white';
//   selections1.style.background = '#287dff';
//   selections1.style.color = 'white';
//   selections1.classList.add("cantclick")
//   selections2.classList.add("cantclick")
//   selections3.classList.add("cantclick")
//   correctBox.style.display = 'block';
//   uncorrectTitle.style.display = 'block';
// })

let selections = [
  ['たかなわ', 'たかわ', 'こうわ'],
  ['かめいど', 'かめと', 'かめど'],
  ['こうじまち', 'かゆまち', 'おかとまち'],
  ['おなりもん', 'おかどもん', 'ごせいもん'],
  ['とどろき', 'たたら', 'たたりき'],
  ['いじい', 'せきこうい', 'しゃくじい'],
  ['ざっしき', 'ざっしょく', 'ぞうしき'],
  ['ごしろちょう', 'おかちまち', 'みとちょう'],
  ['しこね', 'ししぼね', 'ろっこつ'],
  ['おぐれ', 'こしゃく', 'こばく'],
];

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
    + `<p>正解は「${selections[i][0]}」です！</p>`
    + '</div>'
    + '</div>'
  document.write(html);
}

for (let i = 0; i < selections.length; i++) {
  let selections1 = document.getElementById(`selection${i + 1}-1`);
  let selections2 = document.getElementById(`selection${i + 1}-2`);
  let selections3 = document.getElementById(`selection${i + 1}-3`);
  let correctBox = document.getElementById(`correctBox${i + 1}`);
  let correctTitle = document.getElementById(`correctTitle${i + 1}`);
  let uncorrectTitle = document.getElementById(`uncorrectTitle${i + 1}`);
  // 正解をクリックした時に青くする
  selections1.addEventListener('click', function () {
    selections1.style.background = '#287dff';
    selections1.style.color = 'white';
    correctBox.style.display = 'block';
    selections1.classList.add("cantclick")
    selections2.classList.add("cantclick")
    selections3.classList.add("cantclick")
    correctTitle.style.display = 'block';
  })
  // 不正解をクリックしたときに赤くする
  selections2.addEventListener('click', function () {
    selections2.style.background = 'red';
    selections2.style.color = 'white';
    selections1.style.background = '#287dff';
    selections1.style.color = 'white';
    selections1.classList.add("cantclick")
    selections2.classList.add("cantclick")
    selections3.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })
  selections3.addEventListener('click', function () {
    selections3.style.background = 'red';
    selections3.style.color = 'white';
    selections1.style.background = '#287dff';
    selections1.style.color = 'white';
    selections1.classList.add("cantclick")
    selections2.classList.add("cantclick")
    selections3.classList.add("cantclick")
    correctBox.style.display = 'block';
    uncorrectTitle.style.display = 'block';
  })
}

// HTML
// for (let i = 0; i < 10; i++) {
//   let html =
//       '<div class="mainvisual">'
//       + '<h2> <span class="under">'
//       + ` ${i + 1}. この地名はなんて読む？</span></h2>`
//       + '<div class="picture">'
//       + `<img src= ${image[i + 1]} alt="picture">`
//       + '</div>'
//       + '<ul>'
//       + `<li id="s${i+1}-1-${newestArray[i][0]}"class="button"onclick="judge(${i+1},1,${newestArray[i][0]})">`
//       + `<b>${option[i][newestArray[i][0]]}</b>`
//       + '</li>'
//       + `<li id="s${i+1}-2-${newestArray[i][1]}"class="button"onclick="judge(${i+1},2,${newestArray[i][1]})">`
//       + `<b>${option[i][newestArray[i][1]]}</b>`
//       + '</li>'
//       + `<li id="s${i+1}-3-${newestArray[i][2]}"class="button"onclick="judge(${i+1},3,${newestArray[i][2]})">`
//       + `<b>${option[i][newestArray[i][2]]}</b>`
//       + '</li>'
//       + '</ul>'
//       + `<div id="hako${i+1}">`
//       + `<p id="torf${i+1}"></p>`
//       + `<p id="seikai${i+1}"></p>`
//       + '</div>'
//       + '</div>';

//   document.write(one);
// }