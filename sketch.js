var pistol, playerImage;
let gameState = "PLAY", score = 0, backGround;
let cubeFont;
var exit, exitImage, exit2Image, reStart, reStartImage, TryAgainImage;
var zambieImage;

var wall, wall2;
let bullet;
var pixlGunShoot, bgSound, bite;
let bullets = 8, lifes = 10;
var heart, heartImage;
let zambie, zambiesGroup;

function preload()
{
  backGround = loadImage("./Images/backGround.png");
  playerImage = loadImage("./Images/pxelGun.png");
  zambieImage = loadImage("./Images/zambie.png");
  heartImage = loadImage("./Images/Heart.png");
  exitImage = loadImage("./Images/exit.png");
  exit2Image = loadImage("./Images/exit1.png");
  reStartImage = loadImage("./Images/try again.png");
  TryAgainImage = loadImage("./Images/try again1.png");

  cubeFont=loadFont("MINI.ttf");

}

function setup() 
{

  createCanvas(800,800);

  zambiesGroup = new Group();


  player = createSprite(400, 725, 50, 50);
  player.addImage("pistol",playerImage);
  player.scale = .5;

  heart = createSprite(50, 100,75,75);
  heart.addImage("Lifes", heartImage);

  
}

function draw() 
{
  background(backGround); 

  fill("lightgreen");
  
  textFont(cubeFont);
  textSize(36);
  text("score:" + score, 25, 50);

  fill("red");
  textFont(cubeFont);
  textSize(36);
  text(lifes, 30, 190);


  if(gameState == "PLAY")
  {

    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 2.5;
    }

    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 2.5;
    }

    spawZambies1();

  }

  if(zambiesGroup.isTouching(player) || zambiesGroup.x > 800)
  {
    lifes = lifes - 1;
  }

  if(lifes == 0 || player.x > 800 || player.x < 0)
  {
    gameState= "GAMEOVER";
  }

  if(gameState==="END"){
    zambiesGroup.setLifetimeEach(-1);
    zambiesGroup.setVelocityYEach(0);
  }

  drawSprites();
}

function spawZambies1()
{
  if(frameCount%100===0){
    let zambie = createSprite(200,-50)

    zambie.addImage(zambieImage);

    zambie.x = Math.round(random(100,790))

    player.depth=zambie.depth;

    zambie.velocityY=1.5;

    zambie.lifetime=800;

    zambie.addImage("zambie",zambieImage);
    
    zambie.scale=.7;
  }
}