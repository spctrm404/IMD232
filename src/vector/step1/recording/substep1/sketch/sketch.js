let x, y;
let targetX, targetY;
let originX, originY;
let targetAssignedFrame;
const duration = 60 * 2;

function setup() {
  setSketchContainer(3 / 2, 'canvas');

  x = width / 2;
  y = height / 2;
  targetX = width / 2;
  targetY = height / 2;
  originX = width / 2;
  originY = height / 2;

  background(240);
}

function draw() {
  console.log('draw');
  // console.log(frameCount);
  background(240);

  const normalizedTime = (frameCount - targetAssignedFrame) / duration;
  let distX;
  let distY;
  if (normalizedTime <= 1) {
    distX = targetX - originX;
    distY = targetY - originY;
    // x = targetX;
    // y = targetY;
    x = originX + distX * normalizedTime;
    y = originY + distY * normalizedTime;
  }

  noStroke();
  fill(0, 255, 0);
  circle(originX, originY, 20);

  fill(0, 0, 255);
  circle(targetX, targetY, 30);

  fill(255, 0, 0);
  circle(x, y, 20);

  stroke(0);
  // line(originX, originY, targetX, targetY);
  line(originX, originY, originX + distX, originY + distY);
}

function mousePressed() {
  targetAssignedFrame = frameCount;
  originX = x;
  originY = y;
  targetX = mouseX;
  targetY = mouseY;
  console.log('time', targetAssignedFrame);
  console.log('origin', `x: ${originX}, y: ${originY}`);
  console.log('target', `x: ${targetX}, y: ${targetY}`);
}
