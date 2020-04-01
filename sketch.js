var earth,sun,mars;
var sunImg;

function preload(){
//  earth.loadImage("images/e.png");
  sunImg = loadImage("images/s.png")
  earthImg = loadImage("images/e.png")
 // marsImg = loadImage("images/m.png")
}
function setup(){
  earth = createSprite(200,150, 50, 50);
  //mars = createSprite(200,150, 50, 50);
   sun = createSprite(200, 200);

   sun.addImage(sunImg);
   //mars.addImage(marsImg);
   earth.addImage(earthImg);
   
 // mars.scale = 0.07;
  earth.scale = 0.05;
 sun.scale = 0.01;
 // sun.width =0.4;
 //sun.height = 0.4;
earth.rotateToDirection=true;
earth.velocityX = 5;
//mars.rotateToDirection=true;
//mars.velocityX = 5;
}
function draw() {
  background("black");
  text("Well this is what's gonna happen in 7.5 Billion years ;",200,20)  //mars.rotation=mars.rotation+5;
  earth.rotation=earth.rotation+5;
  if(frameCount%60 === 0){
    sun.scale = sun.scale+0.01;
  }

  
 // sun.x = mouseX;
 //sun.y = mouseY;
  drawSprites();
}
