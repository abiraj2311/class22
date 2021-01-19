/*
1. Create Engine-- local var
2. Manipulate engine in the world--local var
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEng, myWorld;
var ground;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  myEng = Engine.create();
  myWorld = myEng.world;

  var obj_opt = {
      isStatic:true
  }

  ground =Bodies.rectangle(200, 300,200,50,obj_opt);
  World.add(myWorld,ground);

var opt={
restitution:1

}
ball = Bodies.circle(200,100,30,opt);
World.add(myWorld,ball);

  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(255,255,255); 
  Engine.update(myEng); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


 // drawSprites();
}