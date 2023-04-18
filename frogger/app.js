const timeLeftEl = document.querySelector('#time-left')
const resultEl = document.querySelector('#result')
const startBtn = document.querySelector('#start-btn')
const sqaures = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')

const width = 9
let currentPosition = 76
let currentTime = 20

let timerId
let outcomeTimerId

function moveFrog(e){
    sqaures[currentPosition].classList.remove('frog')
    switch(e.key){
        case 'ArrowLeft':
            if (currentPosition % width !== 0) currentPosition --
            break;
        case 'ArrowRight':
            if (currentPosition % width < width - 1) currentPosition ++
            break;
        case 'ArrowUp':
            if (currentPosition - width >= 0) currentPosition -= width
            break;
        case 'ArrowDown':
            if (currentPosition + width < width * width) currentPosition += width
            break;
    }


    sqaures[currentPosition].classList.add('frog')
}

function autoMoveElements(){
    currentTime --
    timeLeftEl.textContent = currentTime
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight)) 
}

function checkOutcomes(){
    lose()
    win()
}

function moveLogLeft(logLeft){
    switch(true){
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}


function moveLogRight(logRight){
    switch(true){
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
    }
}

function moveCarLeft(carLeft){
    switch(true){
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
}

function moveCarRight(carRight){
    switch(true){
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break
        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break
        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break
    }
}

function lose(){
    if (
        sqaures[currentPosition].classList.contains('c1') ||
        sqaures[currentPosition].classList.contains('l4') ||
        sqaures[currentPosition].classList.contains('l5') ||
        currentTime <= 0
        ){
            resultEl.textContent = 'You Lose'
            clearInterval(timerId)
            clearInterval(outcomeTimerId)
            sqaures[currentPosition].classList.remove('frog')
            document.removeEventListener('keydown', moveFrog)
    }
}

function win(){
    if (sqaures[currentPosition].classList.contains('ending-block')){
        resultEl.textContent = 'You Win'
        clearInterval(timerId)
        document.removeEventListener('keydown', moveFrog)
    }
}

startBtn.addEventListener('click', () => {
    if (timerId){
        clearInterval(timerId)
        clearInterval(outcomeTimerId)
        timerId = null
        outcomeTimerId = null
        document.removeEventListener('keydown', moveFrog)
    } else {
        timerId = setInterval(autoMoveElements, 1000)
        outcomeTimerId = setInterval(checkOutcomes, 50)
        document.addEventListener('keydown', moveFrog)
    }
    
})

