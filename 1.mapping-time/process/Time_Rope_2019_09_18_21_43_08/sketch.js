let sx, sy;
let s,m,h;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

// set up the points(node) and for draw curve
  function PointerCurve1(){
  stroke(0, 0, 0,150);
  strokeWeight(2);
  noFill()
  beginShape();
  curveVertex(0,windowHeight-h);
  curveVertex(0,windowHeight-h);
  curveVertex(mouseX,mouseY);
  curveVertex(m,windowHeight-s);
  // curveVertex(windowWidth,windowHeight-h);
  curveVertex(windowWidth,windowHeight-h);
  endShape()}

function PointerCurve2(){
  stroke(0, 0, 0,150);
  strokeWeight(2);
  noFill()
  beginShape();
  // curveVertex(0,windowHeight-h);
  // curveVertex(0,windowHeight-h);
  curveVertex(m,windowHeight-s);
  curveVertex(m,windowHeight-s);
  curveVertex(mouseX,mouseY);
  curveVertex(windowWidth,windowHeight-h);
  curveVertex(windowWidth,windowHeight-h);
  endShape()}

function draw() {
  background(245);
  
  //Ruler for hour, min, sec. hour = Y-coordinate; minute = X-coordinate; second =m oving-Y-coordinate;
  strokeWeight(2);
  stroke(255);
  // line(0,0,0,windowHeight);//hour
  // line(windowWidth,0,windowWidth,windowHeight);//hour
  line(0,windowHeight-s,windowWidth,windowHeight-s);//mins
  line(m,0,m,windowHeight);//seconds
  
  // use map function related time and ruler
  h = map(hour(), 0,12,0,windowHeight);
  m = map(minute(), 0,60,0,windowWidth);
  s = map(second(), 0,60,0,windowHeight,0);
 
  // draw curve
    if (m > windowWidth/2){
     PointerCurve1();
  }else{
     PointerCurve2();
  }
  
  // add text
  noStroke();
  fill(100);
  text('(minute,second)', m, windowHeight-s);
  text('(hour)',3, windowHeight-h);
  
}