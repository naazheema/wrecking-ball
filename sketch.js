const Engine=Matter.Engine;
const Bodies= Matter.Bodies;
const World=Matter.World;

const Constraint = Matter.Constraint;

var world,engine;
 var box1,box2,box3,b0x4,box5,box6,box7,box8,b0x9,box10 ; 
 var box11,box12,box13,b0x14,box15,box16,box17,box18,b0x19,box20 ; 
 var ground,chain1;

function setup() {

  createCanvas(3000,700);
  engine=Engine.create();
  world=engine.world;

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);

  ground = new Ground(1200,680,2750,20);
  ball = new Ball(200,200,40);

/* chain1 = new Chain(ball.body,{ 
   x : 100, 
   y : 50 
  }); */

  //rpe = new Rope(ball.body,{x:100,y:50});
  rpe = new Rope(ball.body, { x: 500, y: 50 });

}

function draw() {

  background("white");  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ground.display();
  
  ball.display(); 

  //chain1.display();
 rpe.display();
}