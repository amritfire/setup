var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyDown("RIGHT_ARROW")){
    box.x = box.x+8;
  }
  if (keyDown("LEFT_ARROw")){
    box.x = box.x-8;
  }
  drawSprites();
}




