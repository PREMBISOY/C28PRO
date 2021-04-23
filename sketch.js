
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyimg;

function preload()
{
	boyimg = loadImage("sprites/boyi.png");
	
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(600,220,10);
	mango2 = new Mango(650,160,10);
	mango3 = new Mango(700,190,10);
	mango4 = new Mango(580,250,10);
	mango5 = new Mango(550,140,10);
	mango6 = new Mango(750,300,10);
	mango7 = new Mango(770,190,10);
	mango8 = new Mango(690,130,10);
	mango9 = new Mango(670,250,10);
	mango10 = new Mango(785,270,10);
	mango11 = new Mango(790,300,10);
	mango12 = new Mango(750,200,10);

	ground = new Ground(800,790,800,10);
	
	stone = new Stone(200,550,15);
	treei = new Tree(600,400,400,700);

	rope = new SlingShot(stone.body,{x:200,y:550});

	boy = createSprite(270,580,50,100);
	boy.addImage("boy",boyimg);
	boy.scale = 0.45;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  treei.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();

ground.display();

 stone.display();
 rope.display();


 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 detectcollision(stone,mango6);
 detectcollision(stone,mango7);
 detectcollision(stone,mango8);
 detectcollision(stone,mango9);
 detectcollision(stone,mango10);
 detectcollision(stone,mango12);
 
//  tree = createSprite(650,300,100,600);
// 	tree.addImage("tree",treeimg);

  drawSprites();
 
}


function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stoneObj.body,{x:235 , y:420})
launcherObject.attach(stoneObj.body)
  }
}

function detectcollision(lstone,lmango){
	 mangoBodyPosition=lmango.body.position;
	 stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<-lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY})
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){

	if(keyCode===32){
	rope.attach(stone.body)
	
	}
	}
