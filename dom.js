let val;
val = this; //this and window is same
val = window;
val = window.document;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
document.head;
document.body;
document.doctype;
document.domain;
document.URL;
document.characterSet;
document.contentType;
document.forms;
document.forms[0];
document.forms[0].method;
document.forms[0].action;
document.links;
document.links[0];
document.links[0].href;
document.links[0].classList;
document.links[0].className;

document.images;
document.scripts;
document.scripts[0];

document.scripts[0].src;
document.scripts[0].getAttribute('src');


//id check
document.getElementById('');
document.getElementById('').className;


//style change

document.getElementById('').style.background = '#...';
document.getElementById('').style.color = '#...';
document.getElementById('').style.padding = '#...';
document.getElementById('').style.display = 'block';
document.getElementById('').textContent = ' ';
document.getElementById('').innerText = ' ';
document.getElementById('').innerHTML = ' ';
//or we can use
val = document.getElementById('');
val.innerText = "";
//query selector queryselector is use for all attribute
val = document.querySelector('#...'); //id
val = document.querySelector('.'); //class
val = document.querySelector('ol');
val = document.querySelector('ol li');
val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(2)');

document.getElementsByClassName('');


val.innerText = "";