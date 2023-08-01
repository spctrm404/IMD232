const aspectRatio = 3 / 2;

let x;
let y;
let originX;
let originY;
let targetX;
let targetY;
let interpolationBegin = 0;
const interpolationDuration = 60 * 1;

function setup() {
  const canvasContainer = select('#canvas');
  const canvas = createCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
  canvas.parent(canvasContainer);

  x = width / 2;
  y = height / 2;
  originX = width / 2;
  originY = height / 2;
  targetX = width / 2;
  targetY = height / 2;

  background(240);
  noStroke();
}

function draw() {
  background(240);
  interpolate();
  fill(0, 0, 255);
  circle(targetX, targetY, 20);
  fill(255, 0, 0);
  circle(x, y, 10);
}

const interpolate = () => {
  const normalizedTime =
    (frameCount - interpolationBegin) / interpolationDuration;
  if (normalizedTime <= 1) {
    distanceX = targetX - originX;
    distanceY = targetY - originY;
    x = originX + distanceX * normalizedTime;
    y = originY + distanceY * normalizedTime;
  }
};

function mousePressed() {
  originX = x;
  originY = y;
  targetX = mouseX;
  targetY = mouseY;
  interpolationBegin = frameCount;
}

function windowResized() {
  const canvasContainer = select('#canvas');
  resizeCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
}
