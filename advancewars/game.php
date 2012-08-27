<?php
    /*<script src='easeljs/lib/easeljs-next.min.js'></script>
    <script src='http://code.createjs.com/tweenjs-0.2.0.min.js'></script>
    <script src='http://code.createjs.com/movieclip-0.4.1.min.js'></script>
    <script src='http://code.createjs.com/soundjs-0.2.0.min.js'></script>
    <script src='http://code.createjs.com/preloadjs-0.1.0.min.js'></script>
    <script src='http://code.createjs.com/easeljs-0.4.2.min.js'></script>
    <script src='EaselJS/lib/movieclip-0.4.1.min.js'></script>
    <script src='easeljs/lib/movieclip-NEXT.min.js'></script>
<script src='tweenjs/lib/tweenjs-NEXT.min.js'></script>*/
echo "
<head>
<link rel=stylesheet href='../style.css' type='text/css' media=screen>
<script>
var createjs = window;
</script>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>
    <script src='../createjs/easeljs/lib/easeljs-NEXT.min.js'></script>
    <script src='../createjs/tweenjs/lib/tweenjs-NEXT.min.js'></script>
    <script src='../createjs/soundjs/lib/soundjs-NEXT.min.js'></script>
    <script src='../createjs/preloadjs/lib/preloadjs-NEXT.min.js'></script>
    <script src='../createjs/easeljs/lib/movieclip-NEXT.min.js'></script>
    <script src='tile.js'></script>
    <script src='main.js'></script>
  </head>
  <body onload='Main()'>";
include "../navigation.php";
echo"<div class='main'>
      <canvas id = 'game-window' width='500' height='300'></canvas>
     </div>   
     <div id='test'>
     
     </div>
     <script type='text/javascript'>
      document.getElementById('test').innerHTML=tile.length;  
</script>
     </body>
";?>
