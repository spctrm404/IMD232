let x;
let y;
let originX;
let originY;
let targetX;
let targetY;
let interpolationBegin = 0;
const interpolationDuration = 60 * 1;
const cpAX = 0.8;
const cpAY = 0.1;
const cpBX = 0.9;
const cpBY = 0.2;

function setup() {
  setSketchContainer(3 / 2, 'canvas');

  x = width / 2;
  y = height / 2;
  originX = width / 2;
  originY = height / 2;
  targetX = width / 2;
  targetY = height / 2;

  background(240);
}

function draw() {
  background(240);
  interpolate(cpAX, cpAY, cpBX, cpBY);
  noStroke();
  fill(0, 0, 255);
  circle(targetX, targetY, 20);
  fill(255, 0, 0);
  circle(x, y, 10);
}

const getNormalizedTime = () => {
  return constrain(
    (frameCount - interpolationBegin) / interpolationDuration,
    0,
    1
  );
};

const interpolate = (cpAX, cpAY, cpBX, cpBY) => {
  if (getNormalizedTime() > 1) return;
  const [bX, warpedTime] = getCubicBezierEasing(
    cpAX,
    cpAY,
    cpBX,
    cpBY,
    getNormalizedTime()
  );
  distanceX = targetX - originX;
  distanceY = targetY - originY;
  x = originX + distanceX * warpedTime;
  y = originY + distanceY * warpedTime;
};

const setTarget = (tX, tY) => {
  originX = x;
  originY = y;
  targetX = tX;
  targetY = tY;
  interpolationBegin = frameCount;
};

function mousePressed() {
  setTarget(mouseX, mouseY);
}
