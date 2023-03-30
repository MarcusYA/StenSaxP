//Task or functions
let userChoice
let oponentChoice
//let resultShow
let YourScore
let OponentScore

const oponentChoiceDisplay = document.getElementById('oponentChoiceDisplay')
const yourChoiceDisplay = document.getElementById('yourChoiceDisplay')
const resultDisplay = document.getElementById('resultDisplay')
const buttonPushed = document.querySelectorAll('button')
const yourScore = document.getElementById("yourScore")
const oponentScore = document.getElementById("oponentScore")


buttonPushed.forEach(buttonPushed => buttonPushed.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    randomNumber()
    resultShow()
    scoreBoard()
  }))


function randomNumber() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    oponentChoice = 'rock'
  }
  if (randomNumber === 2) {
    oponentChoice = 'scissors'
  }
  if (randomNumber === 3) {
    oponentChoice = 'paper'
  }
  oponentChoiceDisplay.innerHTML = oponentChoice
}



function resultShow() {
  if (oponentChoice === userChoice) {
    result = 'Draw!'
  }
  if (oponentChoice === 'rock' && userChoice === "paper") {
    result = "Gratulations - You won!"
  }
  if (oponentChoice === 'rock' && userChoice === "scissors") {
    result = 'Sorry - You lost!'
  }
  if (oponentChoice === 'paper' && userChoice === "scissors") {
    result = "Gratulations - You won!"
  }
  if (oponentChoice === 'paper' && userChoice === "rock") {
    result = 'Sorry - You lost!'
  }
  if (oponentChoice === 'scissors' && userChoice === "rock") {
    result = "Gratulations - You won!"
  }
  if (oponentChoice === 'scissors' && userChoice === "paper") {
    result = 'Sorry - You lost!'
  }
  resultDisplay.innerHTML = result
}

function scoreBoard() {
  if (result = 'Sorry - You lost!' ) {
    oponentScore++
  } else {
    yourScore++
  }
} 