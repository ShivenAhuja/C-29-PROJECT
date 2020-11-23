var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)



  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(89);  
  
  
  a=a-1;


  block8=new block(330,235,30,40)
  block9=new block(368,235,30,40)
  block10=new block(390,235,30,40)
  block11=new block(420,235,30,40)
  block12=new block(450,235,30,40)


  block13=new block(360,195,30,40);
  block14=new block(390,235,30,40);
  block15=new block(420,195,30,40);


 

  


  
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();


 this.image= loadimage(block8/polygon.png);
 this.image= loadimage(block9/polygon.png);
 this.image= loadimage(block10/polygon.png);
 this.image= loadimage(block11/polygon.png);
 this.image= loadimage(block12/polygon.png);
 this.image= loadimage(block13/polygon.png);
 this.image= loadimage(block14/polygon.png)
 this.image= load.image(block15/polygon.png);


 display(block8);
 display(block9);
 display(block10);
 display(block11);
 display(block12);
 display(block13);
 display(block14);
 display(block15);

 
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 