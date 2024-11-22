'use strict';

btn.addEventListener('mousedown', function(){
    btn.style.display = 'none';
})

btn2.addEventListener('mousedown', function(){
    text.style.display = 'none';
})

btn3.addEventListener('mousedown', function(){
    text2.style.display = 'none';
})
btn3.addEventListener('mouseup', function(){
    text2.style.display = '';
})