let confeti = [];
let fondoCanvas;
let resultadoCanvas;

function setup() {
  fondoCanvas = createCanvas(windowWidth, windowHeight);
  fondoCanvas.parent("canvasContainer");
  fondoCanvas.style('z-index', '-1');
  for (let i = 0; i < 100; i++) {
    confeti.push(new Confeti());
  }
}

function draw() {
  clear();
  for (const element of confeti) {
    element.fall();
    element.display();
  }
}

class Confeti {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.radius = random(3, 5);
    this.speed = random(2, 3);
    this.angle = random(TWO_PI); // Ángulo inicial de rotación
    this.rotationSpeed = random(-0.05, 0.05); // Velocidad de rotación
    this.alpha = 255; // Valor de transparencia
    this.fadeThreshold = height / 2; // Umbral para desvanecimiento
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.reset();
    }
    if (this.y > this.fadeThreshold) {
      let distanceToBottom = this.y - this.fadeThreshold;
      this.alpha = map(distanceToBottom, 0, this.fadeThreshold, 255, 0);
    }
  }

  reset() {
    this.y = random(-200, -100);
    this.alpha = 255;
  }

  display() {
    let dorado = color(255, 204, 0);
    let negro = color(0);
    let confettiColor = lerpColor(dorado, negro, this.y / height);
    confettiColor.setAlpha(this.alpha);

    fill(confettiColor);
    noStroke();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    let diameter = this.radius * 2;
    let confettiHeight = diameter * map(this.y, 0, height, 1, 0.5);
    rectMode(CENTER); // Cambiar a rectángulos en lugar de elipses
    rect(0, 0, diameter, confettiHeight);
    pop();

    this.angle += this.rotationSpeed;
  }
}