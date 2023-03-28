const yourChoice = document.querySelector("#yourChoice");
const oponentChoice = document.querySelector("#oponentChoice");
const resultText = document.querySelector("#resultText");
const yourOptBtn = document.querySelectorAll(".yourOptBtn");
let player;
let computer;
let result;

btns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    yourChoice.textContent = `You: ${player}`;
    oponentChoice.textContent = `Oponent: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}