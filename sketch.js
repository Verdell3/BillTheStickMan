const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bgImg,background1
var engine, world;
var  invisibleGround

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var MoneyGroup, money1, money2,money3

var ground 











var score
function preload(){

  //background

  bgImg = loadImage("Sprites/background1.jpg")

  //cars and stuff
  obstacle1 = loadImage("Sprites/blackcar.png");
  obstacle2 = loadImage("Sprites/redTruck.png");
  obstacle3 = loadImage("Sprites/car.png");
  obstacle5 = loadImage("Sprites/ftruck.png");
  obstacle6 = loadImage("Sprites/firehydrent.png");
  obstacle7 = loadImage("Sprites/whitecar.png")

  //Money $$$$$

  money1 = loadImage("Sprites/ecoin.png")
  money2 = loadImage("Sprites/dollors.png")
  money3 = loadImage("Sprites/penny.png")

  // ground
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  background1= createSprite(0,0,displayWidth,displayHeight)
  background1.addImage(bgImg)
  background1.velocityX=-1
  background1.scale = 1
  
  

  invisibleGround = createSprite(100,700,400,10);
  invisibleGround.visible = false;







  score = 0;
}
function draw() {


if(background1.x<600){
  background1.x =600
}

spawnObstacles();
spawnMoney();
 drawSprites();
}

function spawnObstacles() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(1100,700,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle5);
              break;
      case 5: obstacle.addImage(obstacle6);
              break;
      case 6: obstacle.addImage(obstacle7);
              break;

      default: break;
    }
    obstacle.scale = 0.2
  }
}
  




function spawnMoney() {
  if(frameCount % 150 === 0) {
    var money = createSprite(1100,700,10,40);
  
    money.velocityX=-5
    //generate random Money
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: money.addImage(money1);
              break;
      case 2: money.addImage(money2);
              break;
      case 3: money.addImage(money3);
              break;

      default: break;
    }
    money.scale = 0.1
  }
}