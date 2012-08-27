//backend
var canvas;
var stage;
var preloader;
var tkr = new Object;

//game variables
var tiles = [];
var playermove;
var i;
var removetiles;
function Main(){
  //link to canvas
  canvas = document.getElementById('game-window');
  stage = new Stage(canvas);
  manifest = [
  {src:"ball.png", id:"player"}
  ];
  stage.mouseEventsEnabled = true;
  
  preloader = new PreloadJS();
  preloader.installPlugin(SoundJS);
  preloader.onProgress = handleProgress;
  preloader.onComplete = handleComplete;
  preloader.onFileLoad = handleFileLoad;
  preloader.loadManifest(manifest);

  Ticker.setFPS(60);
  Ticker.addListener(stage); 
}
//preloaders
function handleProgress(event){
}
function handleLoadComplete(event) {
}
function handleComplete(event) {
  player.x = 250;
  player.y = 150;
  playermove = 3;
  stage.addChild(player);
  stage.setChildIndex(player, 10);
  player.mouseEnabled = true;
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
var stoptile = 0;
function game() { 
  player.onPress = spritepress;
  stage.update();
  i = -1;
  while(i<=tiles.length && stoptile === 0){
    i++;
    stage.addChild(tiles[i]);
    if(i === 11){
    stoptile = 1;
    }
  }
}
function spritepress() {
  if(playermove >= 1){
  tiles[0] = new tile(20, 0);
  tiles[1] = new tile(0, 20);
  tiles[2] = new tile(-20, 0);
  tiles[3] = new tile(0,-20);
  if(playermove >= 2){
  tiles[4] = new tile(-20, -20);
  tiles[5] = new tile(-20, 20);
  tiles[6] = new tile(20, -20);
  tiles[7] = new tile(20,20);
  tiles[8] = new tile(40, 0);
  tiles[9] = new tile(0, 40);
  tiles[10] = new tile(-40, 0);
  tiles[11] = new tile(0,-40);
  }}
}
document.addEventListener('keyup', upkey, false);
document.addEventListener('keydown', downkey, false);
function upkey(e) {
  if(e.keyCode === 38) {
    player.x +=5;
}}
function downkey(e) {
}
