var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="brown";
}

function draw() {
  background(0);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2)
  {
    bullet.velocityX=0
    t=0.5*weight*speed*speed/3*thickness
    if(t>10)
    {
        wall.shapeColor="yellow";
    }
    
    if(t<10)
    {
      wall.shapeColor = "blue";
    }
  }  
  drawSprites();
}