// Paisajes Fractales: Utilizando algoritmos de fractales y ruido Perlin, 
// este programa crea paisajes montañosos que cambian dinámicamente. 
// Puedes volar a través de valles y montañas que se generan procedimentalmente, 
// ofreciendo una experiencia visual impresionante.
let cols, rows;
let scl = 20;
let w = 2000;
let h = 1600;

let flying = 0;

let terrain = [];

function setup() {
  createCanvas(800, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;
  
  // Inicializar el arreglo terreno
  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
  }
}

function draw() {
  flying -= 0.1;
  
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      // Generar alturas utilizando ruido Perlin
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 150);
      xoff += 0.2;
    }
    yoff += 0.2;
  }
  
  background(0);
  stroke(255);
  noFill();
  
  // Ajustar la vista para simular una cámara volando
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);
  
  // Dibujar el terreno
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}
