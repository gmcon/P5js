let botones = [
  "Sácate al tiro las zapatillas", 
  "Tienen que estar tranquilos", 
  "Como te fuiste a distraer", 
  "Ibamos tan bien", 
  "No hay plata", 
  "popin se equivoco", 
  "Hay alguien aquí con vida", 
  "En ese momento", 
  "du dun duuuun", 
  "Aweonao", 
  "Aonde estai maldito", 
  "chewaaca", 
  "concurso", 
  "¡Ay! miguel", 
  "Bad to the bone", 
  "Por fin apareciste", 
  "Se inicia el cierre de puertas", 
  "No creo", 
  "X files", 
  "Mañana no hay clase"
];

let urls = [
  "https://www.myinstants.com/media/sounds/sacate-altiro-las-zapatillas-pablito-neuquen.mp3", 
  "https://www.myinstants.com/media/sounds/tienen-que-estar-tranquilo-no-mas.mp3", 
  "https://www.myinstants.com/media/sounds/como-te-fuiste-a-distraer-tanto-hijo-por-dios.mp3", 
  "https://www.myinstants.com/media/sounds/ibamos-tan-bien.mp3", 
  "https://www.myinstants.com/media/sounds/no-hay-plata.mp3", 
  "https://www.myinstants.com/media/sounds/popin-se-equivoco-lo-hizo-mal-penca.mp3", 
  "https://www.myinstants.com/media/sounds/hay-alguien-ahi-con-vida-larga.mp3", 
  "https://www.myinstants.com/media/sounds/en-ese-momento-cell-sintio-el-verdadero-terror-v-descarga.mp3", 
  "https://www.myinstants.com/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3", 
  "https://www.myinstants.com/media/sounds/que-penca.mp3", 
  "https://www.myinstants.com/media/sounds/aonde-estay-maldito.mp3", 
  "https://www.myinstants.com/media/sounds/chewbacca.swf.mp3", 
  "https://www.myinstants.com/media/sounds/quien-quiere-ser-millonario_ScfDHTc.mp3", 
  "https://www.myinstants.com/media/sounds/ay-miguel.mp3", 
  "https://www.myinstants.com/media/sounds/bad-to-the-bone-meme.mp3", 
  "https://www.myinstants.com/media/sounds/por-fin-apareciste-mal-nacido.mp3", 
  "https://www.myinstants.com/media/sounds/metro-de-santiago-sonido-de-cierre-de-puertas-de-todos-los-trenes.mp3", 
  "https://www.myinstants.com/media/sounds/no-creoo-risa.mp3", 
  "https://www.myinstants.com/media/sounds/expedientes-secretos-x-musica22.mp3", 
  "https://www.myinstants.com/media/sounds/manana-no-hay-clases.mp3"
];

let botonesGraf = [];
let cols = 5;
let rows = 4;
let buttonHeight = 50;
let margin = 10;
let buttonWidth; // Será calculado dinámicamente

function setup() {
  createCanvas(970, 250);
  textAlign(CENTER, CENTER);
  textSize(12);
  textStyle(BOLD); // Aplica negrita

  // Calculamos el ancho más largo para los botones basado en el texto más largo
  let maxTextWidth = 0;
  for (let i = 0; i < botones.length; i++) {
    let currentTextWidth = textWidth(botones[i]);
    if (currentTextWidth > maxTextWidth) {
      maxTextWidth = currentTextWidth;
    }
  }
  buttonWidth = maxTextWidth + 20; // Añade margen extra para el botón

  // Crear los botones en filas y columnas
  let index = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = margin + j * (buttonWidth + margin);
      let y = margin + i * (buttonHeight + margin);
      let col = color(random(200, 255), random(200, 255), random(200, 255));
      botonesGraf.push(new Boton(x, y, buttonWidth, buttonHeight, botones[index], urls[index], col));
      index++;
    }
  }
}

function draw() {
  background(0);
  for (let boton of botonesGraf) {
    boton.mostrar();
  }
}

function mousePressed() {
  for (let boton of botonesGraf) {
    if (boton.estaSobre(mouseX, mouseY)) {
      boton.reproducirSonido();
    }
  }
}

class Boton {
  constructor(x, y, w, h, texto, url, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.url = url;
    this.color = color;
    this.sonido = new Audio(this.url);
  }

  mostrar() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h, 10);
    fill(0);
    textSize(12);
    textStyle(BOLD); // Aplica negrita
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }

  estaSobre(mx, my) {
    return mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h;
  }

  reproducirSonido() {
    this.sonido.currentTime = 0;
    this.sonido.play();
  }
}
