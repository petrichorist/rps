'use strict';

let playerScore = 0;
let computerScore = 0;
let count = 0;

const choices = ['rock', 'paper', 'scissors'];
let computerSelection = choices[Math.floor(Math.random() * 3)];

const body = document.querySelector('body');
const result = document.querySelector('.result');
const clickBtn = document.querySelector('.clickBtn');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const again = document.querySelector('.again');

const hScore = document.querySelector('#human-score');
const cScore = document.querySelector('#computer-score');
const hObj = document.querySelector('#human-object');
const cObj = document.querySelector('#computer-object');

function computerChoice() {
  computerSelection = choices[Math.floor(Math.random() * 3)];
}

function disableBtns(bool) {
  rock.disabled = bool;
  paper.disabled = bool;
  scissors.disabled = bool;
}

function reveal() {
  clickBtn.classList.add('hidden');
  result.classList.remove('hidden');
  result.classList.add('reveal');
}

function displayChoice(choice, object) {
  if (choice === 'rock') {
    object.textContent = '🪨';
  } else if (choice === 'paper') {
    object.textContent = '💶';
  } else if (choice === 'scissors') {
    object.textContent = '✂';
  }
}

function playGame(pick) {
  hObj.textContent = '';
  cObj.textContent = '';

  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
      result.textContent = `You WIN! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
      hScore.textContent = playerScore;

      displayChoice(playerSelection, hObj);
      displayChoice(computerSelection, cObj);

      if (playerScore == 5) {
        result.textContent = 'Player wins!';
        disableBtns(true);
      }
    } else if (playerSelection == computerSelection) {
      result.textContent = `It's a DRAW! You both chose to play... ${playerSelection}`;

      displayChoice(playerSelection, hObj);
      displayChoice(computerSelection, cObj);
    } else {
      result.textContent = `You LOSE! ${computerSelection} beats ${playerSelection}.`;
      computerScore++;
      cScore.textContent = computerScore;

      displayChoice(playerSelection, hObj);
      displayChoice(computerSelection, cObj);

      if (computerScore == 5) {
        result.textContent = 'Computer wins! Try again.';
        disableBtns(true);
      }
    }
  }

  playRound(pick, computerSelection);
}

rock.addEventListener('click', () => {
  playGame('rock');
  computerChoice();
  reveal();
});

paper.addEventListener('click', () => {
  playGame('paper');
  computerChoice();
  reveal();
});

scissors.addEventListener('click', () => {
  playGame('scissors');
  computerChoice();
  reveal();
});

again.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;

  disableBtns(false);

  hScore.textContent = playerScore;
  cScore.textContent = computerScore;
  hObj.textContent = '';
  cObj.textContent = '';
  result.textContent = '';

  clickBtn.classList.remove('hidden');
  result.classList.remove('reveal');
  result.classList.add('hidden');
});
