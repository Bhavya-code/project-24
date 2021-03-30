
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,ground,rubber1,stone1,iron1,sand1;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
    
    stone1 = new stone(700,320,100,100);
    iron1 = new iron(300,350);
    rubber1 = new rubber(900,450,70);
    hammer1 = new Hammer(10,100);

    sand1 = new sand(505,450,10);
    sand2 = new sand(510,450,10);
    sand3 = new sand(515,450,10);
    sand4 = new sand(520,450,10);
    sand5 = new sand(525,450,10);
    sand6 = new sand(515,445,10);
    sand7 = new sand(520,445,10);
    sand8 = new sand(525,445,10);
    sand9 = new sand(530,445,10);
    sand10 = new sand(535,445,10);
}
function draw() {
  background("lightblue");

  Engine.update(engine);

  ground.display();
  hammer1.display();
  rubber1.display();
  stone1.display();
  iron1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
  drawSprites();
 
}
