// console.log("hello world");

// console.log(process);

"use strict";

var playerAction = process.argv[process.argv.length - 1];

var random = Math.random() * 3;

if (random < 1) {

    var computerAction = 'rock';
} else if (random > 2) {

    var computerAction = 'scissor';
} else {

    var computerAction = 'paper';
}

if (computerAction == playerAction) {

    console.log('平局');
} else if (
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scissor') 
) {
    console.log('你赢了');
} else {

    console.log('你输了');
}