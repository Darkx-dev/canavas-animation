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

let minRadius = 2
let maxRadius = 50

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
    console.log(mouse)
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.minRadius = radius
        this.color = colors[Math.floor(Math.random() * colors.length)]
    }
    draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'blue'
        c.fill()
        c.fillStyle = this.color
    }
    update = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.y += this.dy
        this.x += this.dx

        // Interaction
        if (mouse.x - this.x < 60
            && mouse.x - this.x > -60
            && mouse.y - this.y < 60
            && mouse.y - this.y > -60) {
            {
                if (this.radius < maxRadius) {
                    this.radius += 2
                }
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 2
        }

        this.draw()
    }
}

let circleArray = []
for (let i = 0; i < 400; i++) {
    let radius = Math.floor(Math.random() * 3) + 1
    let x = (Math.random() * innerWidth)
    let y = Math.random() * innerHeight
    let dx = (Math.random() - 0.5) * 3
    let dy = (Math.random() - 0.5) * 3
    circleArray.push(new Circle(x, y, dx, dy, radius))
}

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }


}


animate()
