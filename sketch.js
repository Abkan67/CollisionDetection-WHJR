let fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,300,50,150);
  movingRect=createSprite(10,10,100,100);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}

function draw() {
  background("green");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  var mx=movingRect.x;var my=movingRect.y;var fx=fixedRect.x;var fy=fixedRect.y;
  if(mx-fx<movingRect.width/2+fixedRect.width/2 && fx-mx<movingRect.width/2+fixedRect.width/2 && fy-my<movingRect.height/2+fixedRect.height/2 && my-fy<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  } else {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";}
  drawSprites();
}