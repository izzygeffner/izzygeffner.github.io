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
    
    //Circle areas in responsivity
    area = windowWidth * windowHeight;
    circleArea = area / 4500;
    
    console.log("area = " + area);
    console.log ("circle area = " + Math.floor(circleArea));
    
    //create 5 circles 
    for (var i=0;  i <= 50; i++) {
        if(i % 10 == 0) {
            circles.push(new Circle(10, 100, Math.floor(circleArea)));
        }
    }
    
    
}


function draw() {
    
    //ground
    ground = Bodies.rectangle(100, height - 100, windowWidth * 2, 5, {isStatic: true});
    
    //walls
    leftWall = Bodies.rectangle(0, 0, 5, windowHeight * 2, {isStatic: true});
    rightWall = Bodies.rectangle(windowWidth -5 , 0, 5, windowHeight * 2, {isStatic: true});
    
    //add to world
    World.add(world, [ground, leftWall, rightWall]);
    
    background(5);
    
    //render circles
    for (var i=0; i < circles.length; i++) {
        circles[i].show();
    }
    

    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    area = windowWidth * windowHeight;
    circleArea = area / 4500;
    
    console.log ("circle area = " + Math.floor(circleArea));
    
    circles.r
    
}
