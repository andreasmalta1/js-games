const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

timeLeft.textContent = currentTime

function randomSquare(){
    squares.forEach(sqaure => {
        sqaure.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
            result ++
            score.textContent = result
            hitPosition = null
        }
    } )
})

function moveMole(){
    timerId = setInterval(randomSquare, 500)
}

function countDown(){
    currentTime --
    timeLeft.textContent = currentTime
    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Final score: ' + result)
    }
}

moveMole()

let countDownTimerId = setInterval(countDown, 1000)

