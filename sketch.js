
var trex ,trex_running;
var ground,groundImg
var invisibleground
var cloud,cloundimg,cact1,cact2,cact3,cact4,cact5,cact6,cactos
var pontos=0
var play=1
var end=0
var gamestarte=play
var grupodecact
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
 groundImg=loadImage("ground2.png")
 cloundimg=loadImage("cloud.png")
 cact1=loadImage("obstacle1.png")
 cact2=loadImage("obstacle2.png")
 cact3=loadImage("obstacle3.png")
 cact4=loadImage("obstacle4.png")
 cact5=loadImage("obstacle5.png")
 cact6=loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
 trex=createSprite(50,140,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,400,20)
 ground.addImage(groundImg)
 invisibleground=createSprite(200,190,400,10)
 invisibleground.visible=false
grupodecact=new Group()
}

function draw(){

  background("white")
 text("pontuaçao "+pontos,500,50)
 
 if (gamestarte===play){
pontos=Math.round(pontos+frameCount/60)
ground.velocityX=-2
if(keyDown("space")&&trex.y>140){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
  if(ground.x<0){
  ground.x=ground.width/2
  }
  spawclouds()
  spawcactos()
if (grupodecact.isTouching(trex)){
  gamestarte=end
}
 }
 else if(gamestarte===end){
ground.velocityX=0

 }
  
  
  trex.collide(invisibleground)
  
  
  console.log (trex.y)
drawSprites()
}


function spawclouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,100,40,10)
    cloud.velocityX=-3
    cloud.addImage(cloundimg)
    cloud.scale=0.7
    cloud.y=Math.round(random(20,80))
    cloud.lifetime=200
    cloud.depth=trex.depth
    trex.depth+=1
  }
}
function spawcactos(){
  if (frameCount%60===0){
    cacto=createSprite(600,165,10,40)
    cacto.velocityX=-5
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1: cacto.addImage(cact1)
      break;
      case 2: cacto.addImage(cact2)
      break;
      case 3: cacto.addImage(cact3)
      break;
      case 4: cacto.addImage(cact4)
      break;
      case 5: cacto.addImage(cact5)
      break;
      case 6: cacto.addImage(cact6)
      break;
    default:break;
    }
    cacto.lifetime=200
    cacto.scale=0.5
  }
  }
