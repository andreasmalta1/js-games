const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const resultEl = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userPlay
let computerPlay
let result

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userPlay = e.target.id
    userChoice.innerHTML = userPlay
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)
    switch (randomNumber) {
        case 0:
            computerPlay = 'rock'
            break;
        case 1:
            computerPlay = 'paper'
            break;
        case 2:
            computerPlay = 'scissors'
            break;
    }
    computerChoice.innerHTML = computerPlay
}

function getResult(){
    if (computerPlay === userPlay){
        result = "It's a draw"
    }
    if (computerPlay === 'rock' && userPlay === 'paper'){
        result = "You Win"
    }
    if (computerPlay === 'rock' && userPlay === 'scissors'){
        result = "You Lost"
    }
    if (computerPlay === 'paper' && userPlay === 'scissors'){
        result = "You Win"
    }
    if (computerPlay === 'paper' && userPlay === 'rock'){
        result = "You Lose"
    }
    if (computerPlay === 'scissors' && userPlay === 'rock'){
        result = "You Win"
    }
    if (computerPlay === 'scissors' && userPlay === 'paper'){
        result = "You Lose"
    }
    resultEl.innerHTML = result
}