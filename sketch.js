


var ground,groundImage
var trex ,trex_running;
var invisibleGround;
var cloud, cloudImage;
function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
  cloudImage=loadImage('cloud.png')
}

function setup(){
  createCanvas(600,200)
  
trex=createSprite(50,160,20,50)
trex.addAnimation("running",trex_running)
trex.scale=0.5
ground=createSprite(200,180,400,20)
ground.addImage(groundImage) 
invisibleGround=createSprite(200,190,400,10)
invisibleGround.visible=false
 
var randomNumber=Math.round(random(1,6))
console.log(randomNumber)
}

function draw(){
  background("white")
 // console.log(trex.y)
  ground.velocityX=-3
   if(ground.x<0)
   {
     ground.x=ground.width/2
   }
if(keyDown("space")&& trex.y>=100)
{
  trex.velocityY=-10
}
  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleGround)
  spawnClouds()
drawSprites()
}


function spawnClouds()
{
  if(frameCount%60===0)
  {
cloud=createSprite(600,100,40,10)
cloud.velocityX=-3
cloud.addImage(cloudImage)
cloud.y=Math.round(random(10,60))
cloud.scale=0.5
}
}