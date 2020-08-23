var bg;
var bird;
var ground;

function preload(){
  bgImg = loadImage("sprites/city.png");
  birdAnm = loadAnimation("sprites/bluebird-downflap.png","sprites/bluebird-midflap.png",
                                       "sprites/bluebird-upflap.png");
  pillar1Img = loadImage("sprites/pipe-green-inverted.jpg");
  pillar2Img = loadImage("sprites/pipe-green.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(width/2, height/2, 1920, 1080);
  bg.addImage("bgImg", bgImg);
  bg.scale = 9

  bg.setVelocity(-2,0)

  bird = createSprite(300,500,50,50);
  bird.addAnimation("birdAnm", birdAnm);
  bird.scale = 3

  ground = createSprite(960,960,1920,80);
  ground.shapeColor = "green";

}

function draw() {
  background(255);
  
  if(bg.x < 0){
    bg.x = bg.width/2
  }

 bird.velocityY = bird.velocityY + 0.8;

 if(keyIsDown(UP_ARROW)){
   bird.velocityY = bird.velocityY - 2;
 }

 if(bird.collide(ground)){
   bg.setVelocity(0,0);
   bird.setVelocity(0,0);
 }

 pillar1();
 pillar2();

  drawSprites();
}

function pillar1(){
  var pillar1 = createSprite(500,100,20,200);
  pillar1.addImage("pillar1Img", pillar1Img);
  pillar1.scale = 1.2;
}

function pillar2(){
  var pillar2 = createSprite(500,725,20,200);
  pillar2.addImage("pillar2Img", pillar2Img);
  pillar2.scale = 1.2;
}