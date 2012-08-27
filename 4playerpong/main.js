//backend
var canvas;
var stage;
var preloader;
var tkr = new Object;

//game variables
var started = false;
var ai = false;
var playervelocity = 10;
var ballyvelocity = 3;
var ballxvelocity = 3;
var collisionleft = false;
var collisionright = false;
var randomnumber;
var aivelocity = 3.5;
var ai2velocity = 5;

function Main(){
  //link to canvas
  canvas = document.getElementById('game-window');
  stage = new Stage(canvas);
  manifest = [
  {src:"images/point.gif", id:"ball"},
  {src:"images/pongbackground.gif", id:"background"},
  {src:"images/startbutton.gif", id:"startbtn"},
  {src:"images/Ping4Title.gif", id:"title"},
  {src:"images/playvsai.gif", id:"vsai"},
  {src:"images/aipaddle.png", id:"aipaddle"},
  {src:"images/aipaddle.png", id:"aipaddle2"},
  {src:"images/paddle.png", id:"player"},
  {src:"images/paddle.png", id:"player2"}
  ];

  preloader = new PreloadJS();
  preloader.installPlugin(SoundJS);
  preloader.onProgress = handleProgress;
  preloader.onComplete = handleComplete;
  preloader.onFileLoad = handleFileLoad;
  preloader.loadManifest(manifest);
  Touch.enable(stage);  
  Ticker.setFPS(120);
  Ticker.addListener(stage); 
}
//preloaders
function handleProgress(event){
}
function handleLoadComplete(event) {
}
function handleComplete(event) {
  player.x = 20;
  player.y = 250;
  player2.x = 20;
  player2.y = 438;
  
  ball.x = 512;
  ball.y = 384;
  
  aipaddle.x = 1000;
  aipaddle.y = 250;
  aipaddle2.x = 1000;
  aipaddle2.y = 438;
 
  playerScore = new Text('0', 'bold 20px Arial', '#fff');
  playerScore.x = 256;
  playerScore.y = 20;

  
  aiScore = new Text('0', 'bold 20px Arial', '#fff');
  aiScore.x = 768;
  aiScore.y = 20;
  
  startbtn.x = 430;
  startbtn.y = 384;

  vsai.x = 430;
  vsai.y = 450;
  stage.addChild(title, startbtn, vsai);
  Ticker.addListener(tkr, false);
  tkr.tick = game;
}
//load sprites from array
function handleFileLoad(event) {
  switch(event.type){
      case PreloadJS.IMAGE:
       var img = new Image();
        img.src = event.src;
        img.onload = handleLoadComplete;
        window[event.id] = new Bitmap(img);
      break;
  }
}
function randomize() {  
  ballyvelocity = -ballyvelocity;
  ballxvelocity = -ballxvelocity;
  randomnumber = Math.floor(Math.random()*2 + 1);
  //randomize direction
  if(randomnumber===1){
    ballyvelocity = -ballyvelocity;
  }else if(randomnumber===2){
    ballxvelocity = -ballxvelocity;
  }
}
function game() {
startbtn.onPress = function(){
  started = true;
  stage.removeChild(startbtn, title, vsai);
}
vsai.onPress = function(){
  started = true;
  ai = true;
  stage.removeChild(startbtn, title, vsai);
  aipaddle2.x = 750;
}
  if(started === true){ 
    stage.addChild(background, ball, player, player2, aipaddle, aipaddle2, playerScore, aiScore);
    player.onPress = pressed;
    player2.onPress = pressed;
  //player borders 
    if(player.y + 50 > 768) {
      player.y = 718;
    }else if(player.y < 0) {
      player.y = 50;
    }else if(player.x <= 0) {
      player.x = 5;
    }else if(player.x >= 512) {
      player.x = 502;
    }
    if(player2.y + 50 > 768) {
      player2.y = 718;
    }else if(player2.y < 0) {
      player2.y = 50;
    }else if(player2.x <= 0) {
      player2.x = 5;
    }else if(player2.x >= 512) {
      player2.x = 502;
    }
    if(aipaddle.y + 50 > 768) {
      aipaddle.y = 718;
    }else if(aipaddle.y < 0) {
      aipaddle.y = 50;
    }else if(aipaddle.x <= 512) {
      aipaddle.x = 532;
    }else if(aipaddle.x + 20 >= 1024) {
      aipaddle.x = 1000;
    }
    if(aipaddle2.y + 50 > 768) {
      aipaddle2.y = 718;
    }else if(aipaddle2.y < 0) {
      aipaddle2.y = 50;
    }else if(aipaddle2.x + 20 >= 1024) {
      aipaddle2.x = 1000;
    }else if(aipaddle2.x <= 512) {
      aipaddle2.x = 532;
    }
  // moveball
    ball.x = ball.x + ballxvelocity;
    ball.y = ball.y + ballyvelocity;
  
  //ballcollision borders 
    if(ball.y > 768 - (ball.image.height * 0.5)) {
      ballyvelocity = -ballyvelocity;
    }else if(ball.y < 0 - (ball.image.height * 0.5)){
      ballyvelocity = -ballyvelocity;
    }else if(ball.x > 1024 - (ball.image.width * 0.5)){
      ball.x = 512;
      ball.y = 384;
      playerScore.text = parseInt(playerScore.text + 1);
      randomize();
    }else if(ball.x < 0 + (ball.image.width * 0.5)){
      ball.x = 512;
      ball.y = 384;
      aiScore.text = parseInt(aiScore.text + 1);
      randomize();
    }
  //paddlecollision
    if(ball.x <= player.x + 20 && ball.x > player.x && ball.y >= player.y && ball.y < player.y + 50){
      ballxvelocity = -ballxvelocity;
      ballxvelocity += 1;
      ball.x += 15;
    }
    if(ball.x > aipaddle.x - 20 && ball.x <= aipaddle.x + 20 && ball.y >= aipaddle.y && ball.y <= aipaddle.y + 25){
      ballxvelocity = -ballxvelocity;
      ballxvelocity += 1;
      ball.x -= 15;
    }
    if(ball.x <= player2.x + 20 && ball.x > player2.x && ball.y >= player2.y && ball.y < player2.y + 50){
      ballxvelocity = -ballxvelocity;
      ballxvelocity += 1;
      ball.x += 15;
    }
    if(ball.x > aipaddle2.x - 20 && ball.x <= aipaddle2.x + 20 && ball.y >= aipaddle2.y && ball.y <= aipaddle2.y + 25){
      ballxvelocity = -ballxvelocity;
      ballxvelocity += 1;
      ball.x -= 15;
    }
    if(ai === true && started === true){      
      aifunc();
    }
    if(ai === false && started === true){ 
      aipaddle.onPress = pressed;
      aipaddle2.onPress = pressed;
    }
  }
  stage.update();
}
function pressed(evt) {
 evt.onMouseMove = function(ev){
    ev.target.x = ev.stageX;
    ev.target.y = ev.stageY;
  }
}
function aifunc(){
  if(ball.y > aipaddle.y){
    aipaddle.y += aivelocity;
  }else if(ball.y < aipaddle.y){
    aipaddle.y -= aivelocity;
  }
  if(ball.y > aipaddle2.y){
    aipaddle2.y += ai2velocity;
  }else if(ball.y < aipaddle2.y){
    aipaddle2.y -= ai2velocity;
  }
}
