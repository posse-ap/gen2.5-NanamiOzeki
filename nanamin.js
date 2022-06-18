// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn1 = document.getElementById("post");
console.log(btn1);
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

const btn2 = document.getElementById("postSH");
console.log(btn2);
const modal2 = document.querySelector('.modal');
const closeBtn2 = document.querySelector('.close');
const overlay2 = document.querySelector('.overlay');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn1.addEventListener('click', function (e) {
    // aタグのデフォルトの機能を停止する
    //   e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal.classList.add('active');
    overlay.classList.add('active');
});

btn2.addEventListener('click', function (e) {
    // aタグのデフォルトの機能を停止する
    //   e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal2.classList.add('active');
    overlay2.classList.add('active');
});

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

closeBtn2.addEventListener('click', function () {
    modal2.classList.remove('active');
    overlay2.classList.remove('active');
});

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function () {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

overlay2.addEventListener('click', function () {
    modal2.classList.remove('active');
    overlay2.classList.remove('active');
});

var y = document.getElementById("myChart").getContext('2d');
var m = new Chart(y, {
    type: 'bar',
    data: {
        labels: ["", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", "", "24", "", "26", "", "28", "", "30"],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            // borderColor:"skyblue",?横軸のラベル青にしたいのにできないなにこれ〜〜〜＾＾＾＾
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            yAxes: [{
                display: true,
                stacked: false,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {                       // 目盛り
                    min: 0,                        // 最小値
                    max: 8,                       // 最大値
                    stepSize: 2,                   // 軸間隔
                    fontColor: "skyblue",             // 目盛りの色
                    fontSize: 14,                   // フォントサイズ
                    callback: function (value, index, values) {
                        return value + 'h';
                    }
                }
            }],
        },
        legend: {
            display: false
        }
    }
});

var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var dataSum = 0;
            dataset.data.forEach(function (element) {
                dataSum += element;
            });

            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(255, 255, 255)';

                    var fontSize = 12;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Just naively convert to string for now
                    var labelString = chart.data.labels[index];
                    var dataString = (Math.round(dataset.data[index] / dataSum * 1000) / 10).toString() + "%";

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
                    ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
                });
            }
        });
    }
};



var langDonut = document.getElementById("langDonut").getContext('2d');
var a = new Chart(langDonut, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: ["#0000ff", "#4169e1", "#00ffff", "#00bfff", "#9370db", "#4b0082", "#6a5acd", "#191970"],
            data: [42, 18, 10, 7, 7, 6, 5, 5],
            labels: [
                '42%',
                '18%',
                '10%'
            ],
        }],

        // これらのラベルは凡例とツールチップに表示されます。
    },
    options: {
        legend: {
            display: false
        },
        responsive: true,
    },
    plugins: [dataLabelPlugin],
});



var contentsDonut = document.getElementById("contentsDonut").getContext('2d');
var b = new Chart(contentsDonut, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: ["#0000ff", "#4169e1", "#00ffff"],
            data: [42, 33, 25]
        }],
    },
    options: {
        legend: {
            display: false
        },
        responsive: true,
    },
    plugins: [dataLabelPlugin],
});

var sample = document.getElementById('sample');
var fp = flatpickr(sample);

//document.getElementByIdを使う場合
// const modalMain = document.getElementById('modalMain'); 
// modalMain.remove();

// const modalPost = document.getElementById('modalPost'); 
// modalPost.remove();
document.getElementById("loader").style.display = "none";
document.getElementById("complete").style.display = "none";

document.getElementById("modalPost").onclick = function () {
    const modalMain = document.getElementById('modalMain');
    modalMain.remove();
    const modalPost = document.getElementById('modalPost');
    modalPost.remove();
    document.getElementById('loader').style.display = "block";
}
    ;


document.getElementById("twitterShare").onclick = function () {
    document.getElementById("modalPost").onclick = function () {
        const dataText = document.getElementById('js-area').value;
        window.open('https://twitter.com/share?text=' + dataText + '&url=' +  '&via=' +  '&hashtags='  + '&related=' );
    }
}
    ;

// const complete = document.getElementById("complete").style.display
// setTimeout(complete,3000)


// $(function() {

//     // ボタンをクリックしたとき
//     $('modalPost').click(function() {
   
//       // ボタンを押して3秒後に結果ページへ遷移
//       var TransitionDelay = function(){
//         document.getElementById("complete").style.display;
//       }
//       setTimeout ( TransitionDelay, 3000 );
//     });
//   });

let modalPost = document.getElementById('modalPost');
modalPost.addEventListener('click', function(){
    window.setTimeout(function(){
        document.getElementById('complete').style.display = "block";
        document.getElementById("loader").style.display = "none";
    }, 3000);
});