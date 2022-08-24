'use strict';

let randomNumber = 0, dice = 0, player = Number(false), playing = true, currentScore = 0, totalScore = 0;
let currentPlayer = document.querySelector(`.player-${player}`);


function switchPlayer() {
    currentScore = 0;
    totalScore = 0;
    document.querySelector(`.current-${player}`).innerHTML = currentScore;
    player = Number(!player);
    currentPlayer.classList.remove('current-player');
    currentPlayer = document.querySelector(`.player-${player}`);
    currentPlayer.classList.add('current-player');
}

function rollDice() {
    if(playing) {
    if(dice !== 0)
        dice.classList.add('hidden');
    randomNumber = Math.trunc(Math.random() * 6 + 1);
    dice = document.querySelector(`.dice-${randomNumber}`);
    dice.classList.remove('hidden');  

    if(randomNumber === 1) {
        switchPlayer();
    } else {
       currentScore += randomNumber;
       document.querySelector(`.current-${player}`).innerHTML = currentScore;
    }
    }
}

function hold() {
    if(playing) {
    totalScore = Number(document.querySelector(`.score-${player}`).innerHTML);
    totalScore += Number(document.querySelector(`.current-${player}`).innerHTML);
    document.querySelector(`.score-${player}`).innerHTML = totalScore;
    if(totalScore >= 20) {
        document.querySelector(`.player-${player}`).classList.add('winner');
        playing = false;
    }
    else
    switchPlayer();
    }
}

function reset() {
    playing = true;
    document.querySelector(`.player-${player}`).classList.remove('winner');
    if(player) {
       switchPlayer(); 
    }
    document.querySelector('.score-0').innerHTML = 0;
    document.querySelector('.score-1').innerHTML = 0;
    document.querySelector('.current-0').innerHTML = 0;
    document.querySelector('.current-1').innerHTML = 0;
}
 
document.querySelector('.roll').addEventListener('click', rollDice);
document.querySelector('.hold').addEventListener('click', hold);
document.querySelector('.reset').addEventListener('click', reset);