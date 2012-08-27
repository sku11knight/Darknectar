//backend
var canvas;
var stage;
var preloader;
var tkr = new Object;
//arrows
var arrow = [false, false, false, false];

//game variables
var v = 3;
var vx;
var vy;
var angle = 90;
function Main(){
  //link to canvas
  canvas = document.getElementById('game-window');
  stage = new Stage(canvas);
  manifest = [
  {src:"ball.png", id:"player"}
  ];

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
  
  //aiScore = new Text('0', 'bold 20px Arial', '#000');
  player.x = 250;
  player.y = 150;
  stage.addChild(player);
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
function game() { 
  if (arrow[0] === true) {
    vx -= v*(Math.sin(angle));
    vy -= v*(Math.cos(angle));
  }else if(arrow[1] === true) {
    player.x += vx;
    player.y += vy;
  }else if (arrow[3] === true) {
    vx += v*(Math.sin(angle));
    vy += v*(Math.cos(angle));
  }
  stage.update();
};
document.addEventListener('keyup', upkey, false);
document.addEventListener('keydown', downkey, false);
function upkey(e) {
  //left
  if (e.keyCode === 37) {
    arrow[0] = false;
  }
  //up
  if (e.keyCode === 38) {
    arrow[1] = false;
  }
  //right
  if (e.keyCode === 39) {
    arrow[2] = false;
  }
  //down
  if (e.keyCode === 40) {
    arrow[3] = false;
  }
}

function downkey(e) {
  //left
  if (e.keyCode === 37) {
    arrow[0] = true;
  }
  //up
  if (e.keyCode === 38) {
    arrow[1] = true;
  }
  //right
  if (e.keyCode === 39) {
    arrow[2] = true;
  }
  //down
  if (e.keyCode === 40) {
    arrow[3] = true;
  }
}
