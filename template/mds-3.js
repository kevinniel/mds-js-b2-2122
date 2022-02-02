let clients = document.querySelector('#clients');
let naccs = clients.querySelector('.naccs');
let all = naccs.querySelector('.menu').childNodes;
let line = all[7];

line.querySelector('h4').innerHTML = "Javascript";
line.querySelector('.date').innerHTML = "02 Février 2022";
line.querySelector('.category').innerHTML = "M D S";
line.querySelector('.rating').innerHTML = 5;