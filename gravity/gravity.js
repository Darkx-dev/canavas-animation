const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: undefined,
    y: undefined
}

let colors = [
    '#000000',
    '#0B60B0',
    '#40A2D8',
    '#F0EDCF'
]

let maxRadius = 50
let friction = .95
let gravity = 1

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
    console.log(mouse)
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
class Ball {
    constructor(x, y, dx, dy, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.ballArray = ballArray
    }
    draw = () => {
        this.ballArray = []
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'black'
        c.stroke()
        c.fill()
        c.fillStyle = this.color
    }
    update = () => {
        
        if (this.y + this.radius > canvas.height) {
            this.dy = -this.dy * friction
        } else {
            this.dy += gravity
        }

        if (this.x + this.radius > canvas.width - this.dx || this.x + this.radius < this.radius) {
            this.dx += -this.dx
        }
        this.y += this.dy
        this.draw()
    }
}

let ballArray = []

for (let i = 0; i < 200; i++) {
    let x = (Math.random() * (canvas.width))
    let y = (Math.random() * (canvas.height - 50))
    let dx = Math.floor(Math.random() * 5)
    let dy = Math.floor(Math.random() * 1)
    let radius = Math.floor(Math.random() * maxRadius)
    ballArray.push(new Ball(x, y, dx, dy, radius))
}

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].update()
    }
}


animate()
