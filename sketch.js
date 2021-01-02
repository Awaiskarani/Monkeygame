var jungleimage,jungle;
var monkeyAnimation,monkey;
var stoneImage,stone;
var bananaImage;
var invisible;
var score;


function preload(){
  
jungleimage=loadImage("jungle.jpg");
  
monkeyAnimation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

stoneImage=loadImage("stone.png");
  
bananaImage=loadImage("banana.png");

}


function setup() {
  createCanvas(400, 400);
  jungle= createSprite(400,150);
 jungle.addImage("jungle",jungleimage);
  jungle.x = jungle.width /2;
 jungle.velocityX = -4;
  
  
  monkey= createSprite(80,300)
  monkey.addAnimation("monkey",monkeyAnimation)
  monkey.scale=0.07;
  
  
   obstaclesGroup = new Group();
   pointsGroup = new Group();
   
  
 
  
  invisible= createSprite(200,340,400,10)
  invisible.visible=false
  
  
   stroke("white");
   textSize(20);
   fill("white");
   score= 0
  
 
}

function draw() {
  

  
  monkey.collide(invisible);
   if (jungle.x < 0){
    jungle.x = jungle.width/2;  
   }
        if(keyDown("space")&&monkey.y>250) {
       
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
 
   if(pointsGroup.isTouching(monkey)){
   score=score+2
    pointsGroup.destroyEach();
 }
  
  spawnobstacle();
  points();
  drawSprites();
  
   text("Score: "+score,300,50);
  
    if(obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.07;
      score=0;
  }
}  

function points() {

if (World.frameCount % 100 === 0) {
  
var banana = createSprite(400, 220);

banana.addImage("banana",bananaImage)

banana.scale=0.05;

banana.velocityX=-6;
 
pointsGroup.add(banana);

switch(score){
  case 10: monkey.scale=0.11
    break;
  case 20: monkey.scale=0.15
    break;
  case 30:monkey.scale=0.19
    break;
  case 40:monkey.scale=0.23
    break;
  default : break;
}

  }
}

function spawnobstacle() {
  
if (World.frameCount % 100===0) {

var stone = createSprite(400, 330);

stone.addImage("stone",stoneImage)

stone.scale=0.17;

stone.velocityX=-6;

  obstaclesGroup.add(stone);
  stone.setCollider("circle",0,0,150);
      
   

 
  }
}














