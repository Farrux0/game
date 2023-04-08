let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    gameTime = document.querySelector('.time'),
    gameBox = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        startGame()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})



function startGame() {
    interval = setInterval(() => decreaseTime(), 1000)
    createBall()
}

function decreaseTime() {
    if(time == 0) {
        gameOver()
    }else {
        let currentTime = --time
        gameTime.innerHTML = currentTime
    }
}

function gameOver() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали ${score} очков</h2>`
}


const colors = ['green', 'red', 'blue', 'yellow', 'white', 'orange']

function randomcolor(){
    let bg = Math.floor(Math.random() * colors.length)
    return colors[bg]
}

function randkv(){
    let kv = Math.floor(Math.random() * kvadrat.length)
    return kvadrat[kv]
}


let minnumber = 20
let maxnumber = 100

let kvadrat = [50, 0]

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = random(minnumber, maxnumber)
    let cor = gameBox.getBoundingClientRect()
    let { width, height } = cor
    let x = random(0, width - size)
    let y = random(0, height - size)
    
    ball.style.width = ball.style.height = size + 'px'
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    ball.style.background = randomcolor()
    ball.style.borderRadius = randkv() + '%'

    gameBox.append(ball)
    
}


function random(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min)
}