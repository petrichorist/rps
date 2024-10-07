"use strict";

console.log("welcome to a friendly(ish) game of rock, paper, scissors!");

function getComputerChoice() {
  let randomObject = Math.floor(Math.random() * 3);
  
  if(randomObject == 0) {
    return "rock";
  } else if(randomObject == 1) {
    return "paper";
  } else if(randomObject == 2) {
    return "scissors";
  }
}

console.log(getComputerChoice());