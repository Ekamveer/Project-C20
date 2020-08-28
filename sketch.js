var car,wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 180, 60, 30);
  //car2=createSprite(50, 100, 60, 30);
  //car3=createSprite(50, 200, 60, 30);
  //car4=createSprite(50, 300, 60, 30);
  wall=createSprite(1500,200,40,400);
  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background(80); 
  car.velocityX=speed;
  //car2.velocityX=speed;
  //car3.velocityX=speed;
  //car4.velocityX=speed;

if (wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>100)
  {
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180&&deformation>100)
  {
    car.shapeColor=color(230,0,0);
  }

  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }

}





 
  drawSprites();
}