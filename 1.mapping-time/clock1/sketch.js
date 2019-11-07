let sx, sy;
let s,m,h;
var windowHeight =800;
var windowWidth =800;

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
  var now = clock()

  //Ruler for hour, min, sec. hour = Y-coordinate; minute = X-coordinate; second =m oving-Y-coordinate;
  strokeWeight(2);
  stroke(255);
  // line(0,0,0,windowHeight);//hour
  // line(windowWidth,0,windowWidth,windowHeight);//hour
  line(0,windowHeight-s,windowWidth,windowHeight-s);//mins
  line(m,0,m,windowHeight);//seconds
  
  // use map function related time and ruler
  h = map(now.hours, 0,24,0,windowHeight);
  m = map(now.min, 0,60,0,windowWidth);
  s = map(now.sec, 0,60,0,windowHeight,0);
 
  // add text
  noStroke();
  fill(100);
  text('(minute,second)', m, windowHeight-s);
  
  // draw curve
    if (m > windowWidth/2){
    PointerCurve1();
    text('(hour of 24h)',3, windowHeight-h);
      
  }else{
    PointerCurve2();
    text('(hour of 24h)',windowWedith-20, windowHeight-h);
  }
  

  
  
}