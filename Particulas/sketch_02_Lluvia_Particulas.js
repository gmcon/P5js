let particulas = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    particulas.push(new Particula(random(width), random(-200, 0)));
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].dibujar();
    particulas[i].actualizar();
    
    if (particulas[i].y > height) {
      particulas[i].y = random(-200, 0);  // Reiniciar partículas fuera del canvas
    }
  }
}

class Particula {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidadY = random(2, 5);
    this.tamano = random(5, 10);
  }
  
  dibujar() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.tamano);
  }
  
  actualizar() {
    this.y += this.velocidadY;
  }
}
