
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}




function setup() {
 createCanvas(400,400);
  
  monkey=createSprite(100,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15
  
  
  ground = createSprite(200,350,900,10);
      ground.x = ground.width/2;
    ground.velocityX = -6;
     
  foodGroup=new Group();
  obstacleGroup= new Group();
}


  score=0
    
function draw(){
background("white");
  text("Survival Time: "+ score, 200,50);
  
    score = score + Math.round(getFrameRate()/60)
  drawSprites();
  if (ground.x<0){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  food();
  obstacle();
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
}


function food(){
  if(frameCount%80===0){
var banana=createSprite(200,300,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,300));
    banana.velocityX=-8
    banana.lifetime=100;
    banana.scale=0.1
    foodGroup.add(banana);
    
    
  }
  
}


function obstacle(){
  if(frameCount%300===0){
var obstacle=createSprite(200,320,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-8
    obstacle.lifetime=100;
    obstacle.scale=0.1
    obstacleGroup.add(obstacle);
    
    
  }
  
}