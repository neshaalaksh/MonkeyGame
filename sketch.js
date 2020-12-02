
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var banana;
function preload(){
  bg=loadImage('jungle.jpg');
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  ground=createSprite(300,350,600,30);
  ground.visible=false;
  //ground.velocityX=5;
  //ground.x = ground.width/2;
  monkey=createSprite(300,350,30,30);
  monkey.addAnimation('ma',monkey_running);
  monkey.scale=0.08;
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  score=0
}


function draw() {
  background(bg);

  // bgg=createSprite(300,200,600,400);
  // bgg.addImage('ni',bg);
  stroke('white')
  text("Score: "+ score, 500,50);
  if(keyDown("space")&& monkey.y >= 50 ) {
        monkey.velocityY = -12;
        
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  //if (ground.x < 0){
    //  ground.x = ground.width/2;
   // }
  if (bananaGroup.isTouching(monkey)){
    score+=2;
    bananaGroup.destroyEach();
  }
  if (obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
  switch(score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
    default: break;
  }
  food()
  spawnObstacles()
  drawSprites()
}

function food(){
  if (frameCount%80==0){
    banana=createSprite(600,Math.round(random(120,200)),40,40);
    banana.addImage('bi',bananaImage);
    banana.scale=0.13;
    banana.velocityX=-8
    banana.lifetime=100;
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,350,40,40);
    //obstacle.debug = true;
    obstacle.velocityX = -10;
    obstacle.addImage('oi',obstacleImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.13;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
