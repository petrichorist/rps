'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerScore = 0;
  let computerScore = 0;
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[Math.floor(Math.random() * 3)];

  const result = document.querySelector('.result');
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');
  const again = document.querySelector('#again');

  const hScore = document.querySelector('#human-score');
  const cScore = document.querySelector('#computer-score');

  function computerChoice() {
    computerSelection = choices[Math.floor(Math.random() * 3)];
  }

  function disableBtns(bool) {
    rock.disabled = bool;
    paper.disabled = bool;
    scissors.disabled = bool;
  }

  function reveal() {
    result.classList.remove('hidden');
    result.classList.add('reveal');
  }

  function playGame(pick) {
    function playRound(playerSelection, computerSelection) {
      if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
      ) {
        result.textContent = `You WIN! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
        hScore.textContent = playerScore;
        if (playerScore == 5) {
          result.textContent = 'Player wins!';
          disableBtns(true);
        }
      } else if (playerSelection == computerSelection) {
        result.textContent = `It's a DRAW! You both chose to play... ${playerSelection}`;
      } else {
        result.textContent = `You LOSE! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        cScore.textContent = computerScore;
        if (computerScore == 5) {
          result.textContent = `Computer wins! Try again.`;
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

    result.classList.add('hidden');
    result.textContent = '';
  });
});
