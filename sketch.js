// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;
 
//Variáveis da minha raquete
let xMinhaRaquete = 20;
let yMinhaRaquete = 150;
let LarguraMinhaRaquete = 16;
let AlturaMinhaRaquete = 150;

// Função da altura e largura do jogo
function setup() {
  createCanvas(600, 400);
}

// Função desenhar
function draw() {
  background(138,62,628);
  bolinha ();
  minhaRaquete();
  
}
 
//Função da bolinha
function bolinha (){
  circle(xBolinha,yBolinha,30)
  xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;

 if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
 if (yBolinha + raio > height || yBolinha - raio < 0){ 
   velocidadeYBolinha *= -1;
  }
 } 

//Função da minha raquete
function minhaRaquete(){
  rect(xMinhaRaquete, yMinhaRaquete, LarguraMinhaRaquete, AlturaMinhaRaquete)
  if(keyIsDown(UP_ARROW)){
    yMinhaRaquete -= 10
    }
  if(keyIsDown(DOWN_ARROW)){
    yMinhaRaquete += 10
    }
  }