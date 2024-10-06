let angulo = 0;
let radio = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  // Fondo con transparencia para dejar estelas
  fill(0, 10);
  rect(0, 0, width, height);
  
  translate(width / 2, height / 2);  // Mover el origen al centro del canvas
  
  for (let i = 0; i < 10; i++) {
    let x = cos(angulo + PI / 5 * i) * radio;
    let y = sin(angulo + PI / 5 * i) * radio;
    
    fill(random(255), random(255), random(255));
    ellipse(x, y, 30, 30);  // Dibujar un círculo en la posición calculada
  }
  
  angulo += 0.01;  // Incrementar el ángulo para rotación
}
