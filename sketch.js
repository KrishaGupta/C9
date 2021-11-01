var box;
function setup() {
  createCanvas(300,500);

  box = createSprite(200,250,50,75);
  
}

function draw() 
{
  background("green");

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 2;
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 2;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 2;
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 2;
  }

  drawSprites();

}




