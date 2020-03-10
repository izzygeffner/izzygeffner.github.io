// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;


//matter.js global variables
var engine;
var render;
var world;
var circles = [];

//boundary variables
var ground;
var leftWall;
var rightWall;

//circle variables
var area;
var circleArea;

function setup() {
    
    //matter.js setup
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    
    //renderer
    render = Render.create({
        element: document.body,
        engine: engine
    });
    
    world = engine.world;
     Engine.run(engine);
    Render.run(render);
    
    //ground
    ground = Bodies.rectangle(100, height - 100, windowWidth * 2, 30, {isStatic: true});
    
    //walls
    leftWall = Bodies.rectangle(0, 0, 30, height * 2, {isStatic: true});
    rightWall = Bodies.rectangle(width - 5 , 0, 30, windowHeight * 2, {isStatic: true});
    
    //add to world
    World.add(world, [ground, leftWall, rightWall]);
    
    //Circle area responsivity
    area = windowWidth * windowHeight;
    circleArea = Math.floor(area / 5500);
    
    console.log ("circle area = " + circleArea);

    for (var i=0;  i < 50; i++) {
        if(i % 10 == 0) {
            circles.push(new Circle(10, 100, circleArea));
        }
    }

}
    
/** function fiveCircles () {
    for (var i=0;  i < 50; i++) {
        if(i % 10 == 0) {
            circles.push(new Circle(10, 100, Math.floor(circleArea)));
        }
    }
} **/


function draw() {
    background(5);

    mousePressed();
    
    //render circles
    for (var i=0; i < circles.length; i++) {
        circles[i].show();
    }
}

function mousePressed() {
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
    return false;
}

function changeR() {
    console.log (circles[0].r);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    area = windowWidth * windowHeight;
    circleArea = Math.floor(area / 5500);
    
    console.log ("circle area = " + circleArea);
    //console.log (circles[2].r);

    circles[2].r = 20;
    
 /*   for (var i=0; i < circles.length; i++) {
        circles[i].r = circleArea; */
    }
    
