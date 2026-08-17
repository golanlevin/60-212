// One Point Set, 9 Ways. 
// Press the spacebar to get a new set of points.
// Prese `s` to save a screenshot of the canvas. 
// Click on points to move them around.

// =================================================
// Don't change any of the code in this section, 
// up to line 130
//
const cellW = 300;
const cellH = 250;
let draggedPointIndex = -1;
let theRandomSeed = 0;
let points = [];

const drawingFunctions = [
  function1, function2, function3,
  function4, function5, function6,
  function7, function8, function9
];

function setup() {
  createCanvas(cellW*3, cellH*3);
  pixelDensity(2);
  initPoints();
}

function draw() {
  background(255);
  drawStage();
  drawCells();
}

function initPoints() {
  points = [];
  theRandomSeed = int(millis()*127); 
  randomSeed(theRandomSeed); 
  const nPoints = round(random(4, 18));
  for (let i = 0; i < nPoints; i++) {
    const px = random(0.2, 0.8) * cellW;
    const py = random(0.2, 0.8) * cellH;
    points.push(new p5.Vector(px, py));
  }
  draggedPointIndex = -1;
}

function drawCells() {
  for (let cy = 0; cy < 3; cy++) {
    for (let cx = 0; cx < 3; cx++) {
      const whichFunction = cy * 3 + cx;
      push();
      translate(cx * cellW, cy * cellH);
      drawingFunctions[whichFunction]();
      drawPoints();
      pop();
    }
  }
}

function keyPressed() {
  if (key == 's'){
    save("configuration_" + theRandomSeed + ".png");
  } else if (key == ' ') {
    initPoints();
  }
}

function mousePressed() {
  if ((mouseX < 0) || (mouseX >= width) || 
      (mouseY < 0) || (mouseY >= height)) {
    return;
  }
  const localX = mouseX % cellW;
  const localY = mouseY % cellH;
  const selectionRadius = 8;
  let nearestGap = selectionRadius;
  draggedPointIndex = -1;
  for (let i = 0; i < points.length; i++) {
    const gap = dist(localX, localY, points[i].x, points[i].y);
    if (gap < nearestGap) {
      nearestGap = gap;
      draggedPointIndex = i;
    }
  }
}

function mouseDragged() {
  if (draggedPointIndex < 0) return;
  const localX = mouseX % cellW;
  const localY = mouseY % cellH;
  points[draggedPointIndex].x = constrain(localX, 0, cellW);
  points[draggedPointIndex].y = constrain(localY, 0, cellH);
}

function mouseReleased() {
  draggedPointIndex = -1;
}

function drawStage(){
  stroke(245);
  strokeWeight(8); 
  line(cellW*1,0,cellW*1,cellH*3);  
  line(cellW*2,0,cellW*2,cellH*3);
  line(0,cellH*1,cellW*3,cellH*1);  
  line(0,cellH*2,cellW*3,cellH*2);  
  strokeWeight(1); 
}

function drawPoints() {
  fill(0);
  noStroke();
  const nPoints = points.length;
  for (let i = 0; i < nPoints; i++) {
    const px = points[i].x;
    const py = points[i].y;
    circle(px, py, 5);
  }
}

function drawCaption(caption){
  fill(0); 
  noStroke(); 
  textSize(8); 
  text(caption, 12,18); 
  stroke(0); 
  noFill(); 
}


// ===================================================
// Students should fill in the functions below.
// Each function accesses the global `points` array.
// ===================================================

function function0(){
  drawCaption("Generic function; just draws circles");
  stroke(0); 
  noFill(); 
  const nPoints = points.length; 
  for (let i=0; i<nPoints; i++){
    let px = points[i].x;
    let py = points[i].y;
    circle(px,py, 40);
  }
}

//--------------------
function function1() {
  drawCaption("Spline curve connecting all the points, in order"); 
}

//--------------------
function function2() {
  drawCaption("Draw a perpendicular projection from every point\nto the horizontal centerline");
}

//--------------------
function function3() {
  drawCaption("Star Graph: Connect every point to the centroid of the set");
}

//--------------------
function function4() {
  drawCaption("Sort points from left to right, connect them with a polyline");
  // Note: When sorting, copy the array 
  // so the original remains unchanged.
}

//--------------------
function function5() {
  drawCaption("Axis-aligned bounding box"); 
}

//--------------------
function function6() {
  drawCaption("Sort points clockwise around the centroid;\nconnect them with a closed loop"); 
  // Note: When sorting, copy the array 
  // so the original remains unchanged.
}

//--------------------
function function7() {
  drawCaption("Connect each point to its nearest neighbor"); 
}

//--------------------
function function8() {
  drawCaption("Connect each point to the point furthest from it"); 
}

//--------------------
function function9() {
  drawCaption("Complete Graph (hairball)");
}
