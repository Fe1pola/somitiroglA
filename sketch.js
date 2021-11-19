//variáveis

var rect1, rect2, rect3, rect4;
var paredao_bunito;

//criar sprites
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(100,200,20,45);
  rect3 = createSprite(400,50,25,25);
  rect4 = createSprite(250,85,35,35);
  rect1.shapeColor = "blue";
  rect2.shapeColor = "blue";
  rect3.shapeColor = "blue";
  rect4.shapeColor = "blue";

  paredao_bunito = createEdgeSprites();
}

/*ret2.velocityX *= (-1);
      ret2.velocityY *= (-1);*/

function balelenga(ret1, ret2){
  if(ret1.x - ret2.x <= ret1.width/2 + ret2.width/2 &&
    ret2.x - ret1.x <= ret1.width/2 + ret2.width/2 &&
    ret1.y - ret2.y <= ret1.height/2 + ret2.height/2 &&
    ret2.y - ret1.y <= ret1.height/2 + ret2.height/2){

  if(ret1.x - ret2.x <= ret1.width/2 + ret2.width/2 &&
    ret2.x - ret1.x <= ret1.width/2 + ret2.width/2){
      ret2.velocityX *= (-1);
  }

  else if(ret1.y - ret2.y <= ret1.height/2 + ret2.height/2 &&
    ret2.y - ret1.y <= ret1.height/2 + ret2.height/2){
      ret2.velocityY *= (-1);
    }
  }
}

//gameloop
function draw() {
  balelenga(rect1, rect2);
  balelenga(rect1, rect3);
  balelenga(rect1, rect4);
  balelenga(paredao_bunito[0], rect2);
  balelenga(paredao_bunito[1], rect2);
  balelenga(paredao_bunito[2], rect3);
  balelenga(paredao_bunito[3], rect3);
  balelenga(paredao_bunito[0], rect4);
  balelenga(paredao_bunito[1], rect4);
  balelenga(paredao_bunito[2], rect4);
  balelenga(paredao_bunito[3], rect4);
  background(255,255,255);  
  drawSprites();

  if(keyDown("d")){
    rect2.velocityX = 3;
  }
  if(keyDown("a")){
    rect2.velocityX = -3;
  }

  if(keyDown("w")){
    rect3.velocityY = -3;
  }
  if(keyDown("s")){
    rect3.velocityY = 3;
  }

  if(keyDown("space")){
    rect4.velocityY = 3;
    rect4.velocityX = 3;
  }
}