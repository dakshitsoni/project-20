var car, wall, speed, weight;

function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = 10;
  car.shapeColor = "yellow";

  // car1 = createSprite(50, 200, 50, 50);
  // car1.velocityX = speed;
  // car1.shapeColor ="red";

  // car2 = createSprite(50, 200, 50, 50);
  // car2.velocityX = speed;
  // car2.shapeColor = "green";

  // car3 = createSprite(50, 200, 50, 50);
  // car3.velocityX = speed;
  // car3.shapeColor = "blue";

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = "black";

  // wall1 = createSprite(1500,200,60,height/2);
  // wall1.shapeColor = "black";

  // wall2 = createSprite(1500,200,60,height/2);
  // wall2.shapeColor = "black";

  // wall3 = createSprite(1500,200,60,height/2);
  // wall3.shapeColor = "black";


}

function draw() {
  background("grey");  

  if(wall.x - car.x < (car.width + wall.width)/2){
      car.velocityX = 0;

    var deformation = (0.5 * wieght * speed * speed)/22509;
    if(deformation > 180){
      car.shapeColor = color(225,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car.shapeColor = color(0,225,0);
    }
  }

  drawSprites();
}