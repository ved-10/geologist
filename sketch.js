const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(400,350);
    stone = new Stone(700,320,100,100);
  
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);
    sand1 = new Sand(100,450,10);
    sand2 = new Sand(140,450,10);
    sand3 = new Sand(180,450,10);
    sand4 = new Sand(220,450,10);
    sand5 = new Sand(260,450,10);
    sand6 = new Sand(300,450,10);
    sand7 = new Sand(340,450,10);
    sand8 = new Sand(380,450,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
   
    rubber.display();
    iron.display()  
    hammer.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();


}
