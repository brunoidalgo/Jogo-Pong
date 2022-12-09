// Variáveis da Bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// Velocidade da bolinha

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  trilha.loop();
  createCanvas(600, 400);
}

function draw() {
  
  background(0);
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  minhaRaquete(xRaquete, yRaquete);
  minhaRaquete(xRaqueteOponente, yRaqueteOponente);
  //raqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente(); 
  incluiPlacar();
  marcaPonto();
  
  bolinhaNaoFicaPresa();
}


function mostraBolinha() {
  
  
  
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
    
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
    
  }
    
}


//Variáveis minha raquete

let xRaquete = 5 ;
let yRaquete = 150 ;
let larguraRaquete = 10 ;
let alturaRaquete = 90;

function minhaRaquete() {
  
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete)
  
}

//Variáveis do oponente

let xRaqueteOponente = 585 ;
let yRaqueteOponente = 150 ;
let larguraRaqueteOponente = 10 ;
let alturaRaqueteOponente = 90;

let velocidadeYOponente= 10;


/*function raqueteOponente() {
  
    rect(posicaoXRaqueteOponente, posicaoYRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente)
  
}*/

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10
    }
}

   function movimentaRaqueteOponente() {
    if (keyIsDown(UP_ARROW)) {
      yRaqueteOponente -= 10
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaqueteOponente += 10
    }
}

  function verificaColisaoRaquete() {
    
      if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete )
        
        velocidadeXBolinha *= -1;
    raquetada.play();
    
  } 

let colidiu = false;

function verificaColisaoRaquete(x, y) {
  colidiu = 
    hit = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  
  if (colidiu){
    
    velocidadeXBolinha *= -1;
    raquetada.play();
    
  }
}

function movimentaRaqueteOponente() {
    if (keyIsDown(87)) {
      yRaqueteOponente -= 10
    }
    if (keyIsDown(83)) {
      yRaqueteOponente += 10
    }
}

function mostraRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete)
}

// Placar do Jogo

let meusPontos = 0 ;
let pontosDoOponente = 0 ;

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(300);
  
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(300);
  
  
  text(meusPontos, 170, 26);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
}

//Sons do jogo

let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}


