const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colorPalettes = [
  // Palette 1: Pastel Dream
  ["#FFBCBC", "#FFB9EC", "#FFEEB4", "#D0FFB2", "#B6E6DA"],

  // Palette 2: Earth Tones
  ["#8C663D", "#BFAC8B", "#EED2AC", "#A9D6A5", "#6AB187"],

  // Palette 3: Ocean Blues
  ["#2C3E50", "#3498DB", "#A9CCE3", "#E74C3C", "#ECF0F1"],

  // Palette 4: Sunset Vibes
  ["#FF6B6B", "#FFE66D", "#4ECDC4", "#556270", "#C7F464"],

  // Palette 5: Vintage Retro
  ["#382513", "#5C3A21", "#825A34", "#A76F3D", "#C18E3E"],

  // Palette 6: Minimalist
  ["#FFFFFF", "#DDDDDD", "#B0B0B0", "#808080", "#333333"],

  // Palette 7: Sparkling Fire
  ["#FF5722", "#FFC107", "#FF4081", "#4CAF50", "#03A9F4"],
  
  // Palette 8: Explosive Blaze
  ["#FF0000", "#FF6F00", "#FFD600", "#FF00FF", "#8E24AA"],
  
  // Palette 9: Flickering Ember
  ["#F9A825", "#FFD54F", "#FFB74D", "#FF7043", "#D84315"],
  
  // Palette 10: Vibrant Burst
  ["#FF5733", "#FFD700", "#FF69B4", "#00BFFF", "#7FFF00"],
  
  // Palette 11: Twilight Sparkle
  ["#9B30FF", "#3D59AB", "#4A76A8", "#98AFC7", "#F6A5D2"]
];

class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = (Math.random() * 0.5 - 0.2) * 20;
    this.dy = (Math.random() * 0.5 - 0.2) * 20;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  }
}

const balls = [];
let colorIndex = Math.floor(Math.random() * colorPalettes.length);
for (let i = 0; i < 100; i++) {
  const ball = new Ball(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * 10 + 5,
    colorPalettes[colorIndex][Math.floor(Math.random() * colorPalettes[colorIndex].length)]
  );
  balls.push(ball);
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  let [dx, dy] = [4, 0];
  balls.forEach((ball) => {
    ball.update(1, 2);  
  });
};

animate();
