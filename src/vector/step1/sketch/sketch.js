const aspectRatio = 3 / 2;

let x;
let y;
let targetX;
let targetY;
let distanceX = 0;
let distanceY = 0;
let interpolationBegin = 0;
let interpolationDuration = 60 * 1;

function setup() {
  const canvasContainer = select('#canvas');
  const canvas = createCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
  canvas.parent(canvasContainer);

  background(240);
  noStroke();

  x = width / 2;
  y = height / 2;
  targetX = width / 2;
  targetY = height / 2;
}

function draw() {
  interpolate();
  background(240);
  fill(0, 0, 255);
  circle(targetX, targetY, 20);
  fill(255, 0, 0);
  circle(x, y, 10);
}

const interpolate = () => {
  if (frameCount - interpolationBegin <= interpolationDuration) {
    const addX = distanceX / interpolationDuration;
    const addY = distanceY / interpolationDuration;
    x += addX;
    y += addY;
  }
};

function mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
  distanceX = targetX - x;
  distanceY = targetY - y;
  interpolationBegin = frameCount;
}

function windowResized() {
  const canvasContainer = select('#canvas');
  resizeCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
}
