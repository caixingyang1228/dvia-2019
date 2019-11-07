let s,m,h;
let sx,sy;
let mx,my;
let hx,hy;

function setup() {
  createCanvas(650, 500);
  noFill();
}

// set up the points(node) and for draw curve
function PointerCurveS(){
  stroke(0, 0, 0,150);
  noStroke();
  // fill(150);
  // tint(255, 127);
  beginShape();
  curveVertex(500/2, 500/4);
  // curveVertex(windowWidth/2, windowHeight/4);
  curveVertex(500/2, 500/2-100);
  curveVertex(sx, sy);
  curveVertex(500/2, 500/2+100);
  // curveVertex(windowWidth/2, 3*windowHeight/4);
  curveVertex(500/2, 3*500/4);
  endShape()}

function PointerCurveM(){
  stroke(0, 0, 0,150);
  strokeWeight(1);
  // fill(180);
  // tint(255, 127);
  beginShape();
    curveVertex(500/2, 500/4);
  // curveVertex(windowWidth/2, windowHeight/4);
  curveVertex(500/2, 500/2-100);
  curveVertex(mx, my);
  curveVertex(500/2, 500/2+100);
  // curveVertex(windowWidth/2, 3*windowHeight/4);
  curveVertex(500/2, 3*500/4);
  endShape()}

function PointerCurveH(){
  stroke(0, 0, 0,150);
  strokeWeight(2);
  fill(200);
  // tint(255, 127);
   beginShape();
    curveVertex(500/2, 500/4);
  // curveVertex(windowWidth/2, windowHeight/4);
  curveVertex(500/2, 500/2-100);
  curveVertex(hx, hy);
  curveVertex(500/2, 500/2+100);
  // curveVertex(windowWidth/2, 3*windowHeight/4);
  curveVertex(500/2, 3*500/4);
  endShape()}

// arc function for draw half circles
function RightCircleCurve(){
  arc(500/2,500/2,500,500, PI + HALF_PI, HALF_PI,open);
  fill(50);
}

function LeftCircleCurve(){
  arc(500/2,500/2,500,500, HALF_PI, PI + HALF_PI,open);
  fill(50);
}

function draw() {
  background(200);
  
  // related time and degree
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  sx = 500/2 + cos(s) * 500/2;
  sy = 500/2 + sin(s) * 500/2;
  
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
   mx = 500/2 + cos(m) * 500/2;
   my = 500/2 + sin(m) * 500/2;
  
   let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
   hx = 500/2 + cos(h) * 500/2;
   hy = 500/2 + sin(h) * 500/2;
  
  
  // draw the curve and the half of circle
  if(sx<=1000/2){
  let t = map(sx, 0, width, -0.4, 1);
  curveTightness(t);
  LeftCircleCurve();
  }else{
  let t = map(sx == sx-200, 0, width, -0.4, 1);
  curveTightness(t);
  RightCircleCurve(); 
  }
  
  PointerCurveS();
  PointerCurveM();
  PointerCurveH();
}