const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var dImg, ds;

function preload() {
    dImg = loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    ds = createSprite(1200, 525, 80, 80);
    ds.addImage(dImg);
    ds.scale = 0.9;

    engine = Engine.create();
    world = engine.world;

    groundObject = new ground(width / 2, 670, width, 20);
    dustbinObj = new dustbin(1200, 650);

    garb1 = new garbage(200, 200, 80, 80);

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(230);
    Engine.update(engine);

    garb1.display();
    groundObject.display();
    dustbinObj.display();

    drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(garb1.body, garb1.body.position, { x: 434, y: -473 });
    }
}
