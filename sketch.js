
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1=new Dustbin(500,560,20,200);
	box2=new Dustbin(700,560,20,200);
	box3=new Dustbin(600,630,200,20);
	
	paper=new Paper(100,580,50);

	ground=new Ground(400,650,800,20);
	
  

	Engine.run(engine);
  
}


function draw() {
  
  background(256);
  
  drawSprites();
  box3.display();
  box1.display();
  box2.display();
  
  ground.display();
  image(dustbinImg,485,440,230,200);
  paper.display();
	
  
 
  
  
  
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200})
	}
}



