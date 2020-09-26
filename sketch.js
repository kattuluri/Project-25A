var drop1, drop2, drop3, drop4, paperBall ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 800);
    engine = Engine.create();
	world = engine.world;
	
	drop1 = new dropMaster(615,665,150,10);
	drop2 = new dropMaster(545,580,10,150);
	drop3 = new dropMaster(685,580,10,150);
	paperBall = new paper(400,560);
    
    groundSprite=createSprite(600,680,800,20);
	groundSprite.shapeColor="tan"; 
	
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background("white");
   drop1.display();
   drop2.display();
   drop3.display();
   paperBall.display();
   drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:20,y:-100})
	   Body.setStatic(paperBall,false)
	}
}


