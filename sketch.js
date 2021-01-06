
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball;
var roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ball = new Ball(100,350);

	ground = new Roof(600,550,width);

	block1 = new Blocks(230,350,50,50);

	block2 = new Blocks(500,515,50,50);

	block3 = new Blocks(501,455,50,50);
	
	block4 = new Blocks(750,515,50,50);

	block5 = new Blocks(750,455,50,50);

	block6 = new Blocks(625,400,300,20);

	block7 = new Blocks(500,385,50,50);

	block8 = new Blocks(750,385,50,50);

	block9 = new Blocks(625,330,300,20);
	
	block10 = new Blocks(620,315,50,50);

    platform = new Roof(230,370,50,10)

	roof = new Roof(100,100,50);

	rope1 = new Rope(ball.body,roof.body,0,0);
}


function draw() {

  background("white");
 
  
  platform.display();
  block2.display();
  block1.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  ground.display();
  roof.display();
  ball.display();
  rope1.display();

  text(mouseX+","+mouseY,200,200)
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:-160,y:-400});
  
	}
}


