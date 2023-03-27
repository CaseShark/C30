const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var wallpaper;
var rabbit;


function preload(){
  wallpaper = loadImage("background.png");
  fruit_img = loadImage("melon.png");
  rabbit_img = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
//  rabbit = createSprite(100, 100, 100, 100);
  rabbit = Bodies.circle(200,200,20);
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(210,350,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);



  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
//  imageMode(CENTER);
  
}

function draw() 
{
  background(wallpaper);
  rope.show();
  image(fruit_img,fruit.position.x,fruit.position.y,60,60);
  Engine.update(engine);
  ground.show();
  fruit.show();
  rabbit.show();
  
  drawSprites();

}
