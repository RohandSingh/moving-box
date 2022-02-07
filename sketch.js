
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30)
}

function draw() 
{
  background("blue")
  drawSprites();
 if(keyDown("left")) {
   box.x -=3
 }
 if(keyDown("right")) {
   box.x +=3
 }
}




