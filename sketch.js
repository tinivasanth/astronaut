var iss,issImg;
var astronaut,sleepImg,sleep;
var brushImg;
var moveImg;
var drinkImg;
var eatImg;
var gymImg;
var moveImg;

function preload(){
issImg= loadImage("iss.png");
sleepImg=loadAnimation("sleep.png");
brushImg=loadAnimation("brush.png");
drinkImg=loadAnimation("drink1.png","drink2.png");
eatImg=loadAnimation("eat1.png","eat2.png");
gymImg=loadAnimation("gym11.png","gym12.png");
//moveImg=loadAnimation("move.png","move1.png");

//to create an illusion of movement just loaded same image 2 more times
moveImg = loadAnimation("move1.png","move1.png","move.png","move.png");
}



function setup() {
  createCanvas(800,400);
 //iss= createSprite(400, 200, 50, 50);
 //iss.addImage(issImg);
 //iss.scale=0.2;
 astronaut=createSprite(400,200);
astronaut.addAnimation("sleeping",sleepImg);
astronaut.scale=0.1;

}

function draw() {
  background(issImg); 
  drawSprites();

  textSize(20);
 fill("white")
 text("instruction",20,35);
 textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Eating",20, 70);
  text("Left Arrow = Drinking",20, 85);
  text("Right Arrow = Gymming",20, 100);
  text("m key = Moving",20, 115);

   edges=createEdgeSprites();
   astronaut.bounceOff(edges);
   
if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brushImg);
astronaut.changeAnimation("brushing");
astronaut.y=200;
astronaut.velocityY=0;
astronaut.velocityX=0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("drinking",drinkImg);
  astronaut.changeAnimation("drinking");
  astronaut.x=300;
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}
if(keyDown("RIGHT_ARROW")){
 astronaut.addAnimation("exercising",gymImg);
  astronaut.changeAnimation("exercising");
  astronaut.y=300;
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("eating",eatImg);
  astronaut.changeAnimation("eating");
  astronaut.y=100;
  astronaut.velocityY=0;
  astronaut.velocityX=0;

}
if(keyDown("m")){
  astronaut.addAnimation("moving", moveImg);
  astronaut.changeAnimation("moving");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}
//astronaut.visible=true

}
