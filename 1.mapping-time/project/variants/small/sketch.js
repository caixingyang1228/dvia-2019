// function setup() {
//   // set the width & height of the sketch
//   createCanvas(400, 130)

//   // print the time to the console once at the beginning of the run. try opening up the
//   // web inspector and poking around to see the various values the clock function gives you
//   print('starting time:', clock())

// }

// function draw() {
//   // check the clock for the current time and unpack some of its fields to generate a time-string
//   var now = clock()

//   // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
//   // note that setting the background also clears the canvas from our previous round of drawing
//   background('white')

//   // set up typography & drawing-color
//   textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
//   textSize(42) // make it big
//   fill(100, 50, 50)

//   // draw the time string to the canvas
//   text(now.text.date, 30, 50)
//   text(now.text.time, 30, 100)

// }

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
  strokeWeight(2);
  beginShape();
  curveVertex(500/2, 500/4);
  curveVertex(500/2, 500/2-100);
  curveVertex(sx, sy);
  curveVertex(500/2, 500/2+100);
  curveVertex(500/2, 3*500/4);
  endShape()}

function PointerCurveM(){
  stroke(0, 0, 0,150);
  strokeWeight(2);
  fill(50)
  beginShape();
  curveVertex(500/2, 500/4);
  curveVertex(500/2, 500/2-100);
  curveVertex(mx, my);
  curveVertex(500/2, 500/2+100);
  curveVertex(500/2, 3*500/4);
  endShape()}

function PointerCurveH(){
  stroke(0, 0, 0,150);
  strokeWeight(2);
  fill(200);
  beginShape();
  curveVertex(500/2, 500/4);
  curveVertex(500/2, 500/2-100);
  curveVertex(hx, hy);
  curveVertex(500/2, 500/2+100);
  curveVertex(500/2, 3*500/4);
  endShape()}

// arc function for draw half circles
function RightCircleCurve(){
  arc(500/2,500/2,500,500, PI + HALF_PI, HALF_PI,open);
}

function LeftCircleCurve(){
  arc(500/2,500/2,500,500, HALF_PI, PI + HALF_PI,open);
  // fill(50);
}

function draw() {
  background(200);
  line(500/2, 500/2+100, 500/2, 500/2-100);
  
  var now = clock()
  
  let hr = now.hour
  let mn = now.min
  let sc = now.sec

  // related time and degree
  let s = map(sc, 0, 60, 0, 360) - 180;
  sx = 500/2 + cos(s) * 500/2;
  sy = 500/2 + sin(s) * 500/2;
  
  let m = map(mn + norm(sc, 0, 60), 0, 60, 0, 360) - 180;
   mx = 500/2 + cos(m) * 500/2;
   my = 500/2 + sin(m) * 500/2;
  
   let h = map(hr + norm(mn 0, 60), 0, 24, 0, 360 * 2) - 180;
   hx = 500/2 + cos(h) * 500/2;
   hy = 500/2 + sin(h) * 500/2;

  let t = map(sx, 0, width, -0.4, 1);
  curveTightness(t);
  LeftCircleCurve();
  
  let t1 = map(sx == sx-200, 0, width, -0.4, 1);
  curveTightness(t1);
  RightCircleCurve(); 
  
  PointerCurveS();
  PointerCurveM();
  PointerCurveH();
}