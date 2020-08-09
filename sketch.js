//Project 22- Delvering health kits to people through a helicopter

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading the images 
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 200, 10,10); // changed the y positin to match as the package body
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating the helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//creating the package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true}); //for bouncing
	World.add(world, packageBody);
	  
    //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
   //running the engine
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  //Call the function to handle key press down
  keyPressed();
  
  drawSprites();
  
}

function keyPressed() {

	 if (keyCode === DOWN_ARROW) {
	 	// Look at the hints in the document and understand how to make the package body fall only on ground
		Matter.Body.setStatic(packageBody, false)
		
		packageSprite.x= packageBody.position.x 
	 	packageSprite.y= packageBody.position.y   
 
 	}

}
