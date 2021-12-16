document.write('');

'use strict';
let selections1 = document.getElementById('selections1');
console.log(selections1);
selections1.addEventListener('click',function(){
selections1.style.background = '#287dff';
})

document.getElementById('selections2').addEventListener('click',function(){
  document.getElementById('selections1').style.background = '#287dff';
})