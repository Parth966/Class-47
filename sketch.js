const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,ground,tower,canon,cannonball,boat
var angle
var boats = []
var boatAnimation = []
var boatSpriteData,boatSpriteSheet

function preload() {

  bg = loadImage("assets/background.gif");
  boatSpriteData = loadJSON("assets/boats/boat.json")
  boateSpriteSheet = loadImage("assets/boat/boat.png")
}

function setup() {
  angle = -PI/8
  canvas = createCanvas(1200, 600);  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,height-5,width*2,5);
  tower = new Tower(100,height-250,150,350)
  canon = new Cannon(width/2 - 450,height/2 - 180,150,100,angle)
  cannonball = new CannonBall(canon.x,canon.y)
  //boat = new Boat(width,height-100,200,200);
  var boatFrames = boatSpriteData.frames();
  for(var i = 0; i < boatFrames.length; i++){
     var pos = boatFrames[i].position;
     var image = boatSpriteSheet.get(pos.x,pos.y,pos.w,pos.h);
     boatAnimation.push(image);
  }
}

function draw() {
  Engine.update(engine);
  background(bg);
  ground.display();
  tower.display();
  canon.display();
  cannonball.display();   
  showBoats();
}

function keyReleased(){
  console.log(keyCode)
  if(keyCode == 39){
    cannonball.shoot();
  }
}

function showBoats(){
  if (boats.length > 0){
    if(boats.length < 4 && boats[boats.length-1].body.position.x < width -300){
      var positions = [-60,-70,-80,-90];
      var position = random(positions);
      boat = new Boat(width,height-100,200,200,position,boatAnimation);
      boats.push(boat);
    }
    for(var i = 0; i < boats.length;i++){      
      Matter.Body.setVelocity(boats[i].body,{x:-1,y:0});
      boats[i].display();
      
    }
  }else{
    boat = new Boat(width,height-100,200,200,-100);
    boats.push(boat);
  }

  
}


