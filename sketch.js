var rectmov,rectfix,rect1,rect2,rect4

function setup() {

  createCanvas(800,400);
  rectfix=createSprite(400, 200, 40, 40);
  rectmov=createSprite(300,100,10,10)
  rectfix.shapeColor=("red")
  rectmov.shapeColor=("yellow")
rect1=createSprite(500,300,40,40)
rect1.shapeColor=("blue")
rect2=createSprite(300,200,40,40)
rect2.shapeColor=("orange")
rect4=createSprite(300,400,40,40)

}

function draw() {
  background("pink");  
rectmov.x=World.mouseX
rectmov.y=World.mouseY

if(isTouching(rectmov,rect1,rect2,rect4)){


  rectmov.shapeColor=("blue")
  rect1.shapeColor=("red")
rect2.shapeColor=("yello")
rect4.shapeColor=("black")
}
else{
  rectfix.shapeColor=("red")
  rectmov.shapeColor=("yellow")
}


  drawSprites();

}
