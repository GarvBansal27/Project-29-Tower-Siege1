function setup() {
  createCanvas(800,400);

  ground1 = new Ground(390,245,140,20,0);

  block1= new Block(330,235,30,40);
  block2= new Block(360,235,30,40);
  block3= new Block(390,235,30,40);
  block4= new Block(420,235,30,40);
  block5= new Block(450,235,30,40);

  block6= new Block(360,195,30,40);
  block7= new Block(390,195,30,40);
  block8= new Block(420,195,30,40);

  block9= new Block(390,155,30,40);

  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot= new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  background(255,255,255); 
  
    drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(slingshot.Body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}