'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerScore = 0;
  let computerScore = 0;
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[Math.floor(Math.random() * 3)];

  const result = document.querySelector('#result');
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');
  const again = document.querySelector('#again');

  const hScore = document.querySelector('.human-score');
  const cScore = document.querySelector('.computer-score');

  function computerChoice() {
    computerSelection = choices[Math.floor(Math.random() * 3)];
  }

  function playGame(pick) {
    function playRound(playerSelection, computerSelection) {
      if (playerScore == 5) {
        result.textContent = 'Player wins!';
      } else if (computerScore == 5) {
        result.textContent =
          `Computer wins!`;
      } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = `You WIN! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
        hScore.textContent = playerScore;
      } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = `You WIN! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
        hScore.textContent = playerScore;
      } else if (
        playerSelection == 'scissors' &&
        computerSelection == 'paper'
      ) {
        result.textContent = `You WIN! ${playerSelection} beat ${computerSelection}.`;
        playerScore++;
        hScore.textContent = playerScore;
      } else if (playerSelection == computerSelection) {
        result.textContent = `It's a DRAW! You both chose to play... ${playerSelection}`;
      } else {
        result.textContent = `You LOSE! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        cScore.textContent = computerScore;
      }
    }

    playRound(pick, computerSelection);
  }

  rock.addEventListener('click', () => {
    playGame('rock');
    computerChoice();
  });
  paper.addEventListener('click', () => {
    playGame('paper');
    computerChoice();
  });
  scissors.addEventListener('click', () => {
    playGame('scissors');
    computerChoice();
  });

  again.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    hScore.textContent = playerScore;
    cScore.textContent = computerScore;

    result.textContent = '';
  });
});
