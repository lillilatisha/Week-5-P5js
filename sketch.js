let x,y,d;
let r,g,b;
let angle;

function setup() {
  
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

  r = 155;
  g = 300;
  b = 200;

  x = width/2;
  y = height/2;

  d = 30;

  angle = 0;

}

function draw() {
 
 background(60,60,100,10);

  colorInvert();

  display(7,d,r,g,b);


  angle += 10;
}


function mapSin(a,target1,target2){
  let myMap;

  myMap = map(sin(a),-1,1,target1,target2);

  return myMap;
}


function display(numShapes,diam,cr,cg,cb){

  for (let i = numShapes; i > 0; i--){
    let offSetX = mapSin(angle,-10,5);
    let offSetY = mapSin(angle,-10,20);
    fill(cr,cg,cb);
    stroke('yellow');
    circle(x + offSetX*i,y+offSetY*i,diam*i);
  }

}

function colorInvert(){

  r = random(0,100);
  g = random(0,200);
  b = random(0,100);

  
  if (mouseIsPressed){
  background(255-255,255-60,255-100,10); 
  // inverted RGB
    r = 255-r;
    b = 255-b;
    g = 255-g;
  }
}