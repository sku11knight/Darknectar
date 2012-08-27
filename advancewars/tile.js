(function() {

var tile = function(tilex, tiley) {
  this.initialize(tilex, tiley);
}
var p = tile.prototype = new createjs.Container(); // inherit from Container
p.square;
p.Container_initialize = p.initialize;
p.initialize = function(tilex, tiley) {
	this.Container_initialize();
      	this.mouseEnabled = true;
	this.square = new createjs.Shape();
	this.square.graphics.beginFill("#000").drawRect(0,0,20,20,10);
        this.x = tilex + player.x;
        this.y = tiley + player.y;
        this.addChild(this.square);
        stage.setChildIndex(this.square, 1);
}
p.onClick = function() {
  player.x = this.x;
  player.y = this.y;
  stage.removeChild.apply(stage, tiles);
  //i = -1;
  //stoptile = 0;
  stage.update;
}
window.tile = tile;
}());
