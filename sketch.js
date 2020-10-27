var fixedRect, movingRect;

function setup() {

  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 100);
 movingRect = createSprite(200,300, 100,50);

 fixedRect.shapeColor = "lightblue";
 movingRect.shapeColor = "lightblue";
}

function draw() {
  background(0);
  
  console.log(movingRect.x - fixedRect.x)
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y- movingRect.y < movingRect.height/2 + fixedRect.height/2 ){



    fixedRect.shapeColor = "lightpink";
    movingRect.shapeColor = "lightpink";
  }
  else{
    fixedRect.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";
  }
  drawSprites();
}