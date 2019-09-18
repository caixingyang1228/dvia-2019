let s,m,h;
let sx,sy;
let hx,hy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

// set up the points(node) and for draw curve
function PointerCurve(){
  stroke(0, 0, 0,150);
  strokeWeight(0.7);
  beginShape();
  curveVertex(windowWidth/2, windowHeight/2);
  curveVertex(sx, sy);
  curveVertex(windowWidth/2, windowHeight/2);
  curveVertex(mx, my);
  curveVertex(windowWidth/2, windowHeight/2);
  curveVertex(hx, hy);
  curveVertex(windowWidth/2, windowHeight/2);
  endShape()}

// arc function for draw half circles
function RightCircleCurve(){
  arc(windowWidth/2,windowHeight/2,windowWidth,windowHeight, PI + HALF_PI, HALF_PI,open);
  noFill();
}

function LeftCircleCurve(){
  arc(windowWidth/2,windowHeight/2,windowWidth,windowHeight, HALF_PI, PI + HALF_PI,open);
  noFill();
}

function draw() {
  background(230);

  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  sx = windowWidth/2 + cos(s) * windowWidth/2;
  sy = windowHeight/2 + sin(s) * windowHeight/2;

  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  mx = windowWidth/2 + cos(m) * windowWidth/2;
  my = windowHeight/2 + sin(m) * windowHeight/2;
  
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  hx = windowWidth/2 + cos(h) * windowWidth/2;
  hy = windowHeight/2 + sin(h) * windowHeight/2;
  

  // draw the curve and the half of circle
  if(sx<=windowWidth/2){
  let t = map(sx, 0, width, -0.4, 1);
  curveTightness(t);
  PointerCurve();
  }else{
  let t = map(sx == sx-200, 0, width, -0.4, 1);
  curveTightness(t);
  PointerCurve();
  }
  
  text('second',sx, sy);
  text('minute', mx, my);
  text('hour',hx, hy);

}