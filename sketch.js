
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,400,20)
    box1 = new Box(200,390,100,10);
    box2= new Box(200,380,100,10);
    box3= new Box(230,330,30,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box3.display();
    ellipse(200,355,70)
    box1.display();
    box2.display();
    ground.display();
    ellipse.display();
}
