const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const warning = document.querySelector('.game-over')
const play = document.querySelector('.container')
const score = document.querySelector('.score_value')

const snake = [
    { x: 180, y: 180},
    { x: 210, y: 180}
]

let direction = "right", idloop

const size = 30

const randomNumber = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomPosition = () => {
    const number = randomNumber(0, canvas.width - size)
    return Math.round(number / 30) * 30
}

const food = {
    x: randomPosition(),
    y: randomPosition(),
    color: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`
}

const checkEat = () => {
    const head = snake[snake.length - 1]

    if (head.x == food.x && head.y == food.y) {
        snake.push(head)

        let x = randomPosition()
        let y = randomPosition()

        while(snake.find((position) => position.x == x && position.y == y )) {
            x = randomPosition()
            x = randomNumber()
        }

        food.x = x
        food.y = y
        food.color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`

        score.innerHTML = +score.innerHTML + 10
    } 
}

const checkCollision = () => {
    const head = snake[snake.length - 1]
    const neckindex = snake.length - 2 

    const wallCollision = head.x < 0 || head.y < 0 || head.x > canvas.width - size || head.y > canvas.width - size

    const selfCollision = snake.find((position, index) => {
        return index < neckindex && head.x == position.x && head.y == position.y
    })

    if (wallCollision || selfCollision) {
        direction = false
        gameover()
    }
}

const drawFood = () => {

    const {x, y, color} = food

    ctx.fillStyle = color
    ctx.shadowColor = color
    ctx.shadowBlur = 50
    ctx.fillRect(x, y, size, size)
    ctx.shadowBlur = 0
}

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#333"

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }

}

const drawSnake = () => {
    ctx.fillStyle = "#ddd"

    snake.forEach((position, index) => {

        if (index == snake.length - 1) {
            ctx.fillStyle = "white"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

const moveSnake = () => {
    if (!direction) return

    const head = snake[snake.length - 1]

    snake.shift()
    if (direction == "right") {
        snake.push({ x: head.x + size, y: head.y })
    }

    if (direction == "left") {
        snake.push({ x: head.x - size, y: head.y })
    }

    if (direction == "down") {
        snake.push({ x: head.x, y: head.y + size })
    }

    if (direction == "up") {
        snake.push({ x: head.x, y: head.y - size})
    }
}

const gameover = () => {
    warning.style.display = 'flex'

    play.addEventListener('click', () => {
        window.location.reload(true);

    })
}



const gameloop = () => {
    clearInterval(idloop)
    ctx.clearRect(0 , 0, 600, 600)

    moveSnake()
    drawGrid()
    drawFood()
    checkEat()
    drawSnake()
    checkCollision()

    idloop = setInterval(() => {
        gameloop()
    }, 200)

}

gameloop()

document.addEventListener('keydown', ( {key} ) => {

    
    if (key == "ArrowRight" && direction != "left") {
        direction = "right"
    }

    if (key == "ArrowLeft" && direction != "right") {
        direction = "left"
    }

    if (key == "ArrowUp" && direction != "down") {
        direction = "up"
    }

    if (key == "ArrowDown" && direction != "up") {
        direction = "down"
    }
    


})


