
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld,ball1;
var dustbin1, ground1;



function setup() {
	createCanvas(800, 700);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
 ball1 = new Ball(200,450,70);
 dustbin1 = new Dustbin(650,620);
 ground1 = new Ground(400,650,800,40);
 Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball1.display();
dustbin1.display();
ground1.display();
drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:85, y:-85});
}

}
