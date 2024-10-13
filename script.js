"use strict";

let roundNum = 0;
let humanScore = 0;
let computerScore = 0;

console.log("Welcome to a friendly(ish) game of rock, paper, scissors!");

function getHumanChoice() {
  let userChoice = prompt("Choose between rock/paper/scissors: ");

  userChoice = userChoice.toLowerCase();

  if (userChoice == "rock") {
    return "rock";
  } else if (userChoice == "paper") {
    return "paper";
  } else if (userChoice == "scissors" || userChoice == "scissor") {
    return "scissors";
  } else {
    return "Invalid choice!";
  }
}

function getComputerChoice() {
  let randomObject = Math.floor(Math.random() * 3);

  if (randomObject == 0) {
    return "rock";
  } else if (randomObject == 1) {
    return "paper";
  } else if (randomObject == 2) {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
    humanScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("DRAW!");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("DRAW!");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(`You WIN! ${humanChoice} beat ${computerChoice}.`);
    humanScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("DRAW!");
  } else {
    console.log(`You LOSE! ${computerChoice} beats ${humanChoice}.`);
    computerScore += 1;
  }

  roundNum += 1;

  if (roundNum == 5) {
    if (humanScore < computerScore) {
      console.log("You lost the match! Try again.");
    } else if (humanScore == computerScore) {
      console.log("It's a draw!");
    } else {
      console.log("You won! Congratulations. :)");
    }

    console.log(`Final score: ${humanScore} - ${computerScore}`);
  }
}

while (roundNum < 5) {
  playRound();
}
