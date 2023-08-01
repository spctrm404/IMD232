const aspectRatio = 3 / 2;

const size = 200;
const bottomLeftX = 100;
const bottomLeftY = 300;
const cpAX = 0.5;
const cpAY = 0.1;
const cpBX = 0.9;
const cpBY = 0.2;

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
  textSize(18);
}

function draw() {
  background(240);
  renderCubicBezierEasingGraph(
    bottomLeftX,
    bottomLeftY,
    size,
    cpAX,
    cpAY,
    cpBX,
    cpBY,
    constrain(getNormalizedTime(), 0, 1)
  );
  interpolate();
  fill(0, 0, 255);
  circle(targetX, targetY, 20);
  fill(255, 0, 0);
  circle(x, y, 10);
}

const getNormalizedTime = () => {
  return (frameCount - interpolationBegin) / interpolationDuration;
};

const interpolate = () => {
  // const normalizedTime =
  //   (frameCount - interpolationBegin) / interpolationDuration;
  // if (normalizedTime <= 1) {
  //   x = originX + distanceX * normalizedTime;
  //   y = originY + distanceY * normalizedTime;
  // }
  if (getNormalizedTime() <= 1) {
    const [bX, bY] = getCubicBezierEasing(
      cpAX,
      cpAY,
      cpBX,
      cpBY,
      getNormalizedTime()
    );
    distanceX = targetX - originX;
    distanceY = targetY - originY;
    x = originX + distanceX * bY;
    y = originY + distanceY * bY;
  }
};

function mousePressed() {
  originX = x;
  originY = y;
  targetX = mouseX;
  targetY = mouseY;

  interpolationBegin = frameCount;
}

const getCubicBezierEasing = (cpAX, cpAY, cpBX, cpBY, t) => {
  const bX = bezierPoint(0, cpAX, cpBX, 1, t);
  const bY = bezierPoint(0, cpAY, cpBY, 1, t);
  return [bX, bY];
};

const getScaledNormal = (input, zero, mult) => {
  return zero + input * mult;
};

const renderCubicBezierEasingGraph = (
  bottomLeftX,
  bottomLeftY,
  size,
  cpAX,
  cpAY,
  cpBX,
  cpBY,
  t
) => {
  const endX = getScaledNormal(1, bottomLeftX, size);
  const endY = getScaledNormal(1, bottomLeftY, -size);
  const [bX, bY] = getCubicBezierEasing(cpAX, cpAY, cpBX, cpBY, t);
  const scaledCpAX = getScaledNormal(cpAX, bottomLeftX, size);
  const scaledCpAY = getScaledNormal(cpAY, bottomLeftY, -size);
  const scaledCpBX = getScaledNormal(cpBX, bottomLeftX, size);
  const scaledCpBY = getScaledNormal(cpBY, bottomLeftY, -size);
  const scaledBX = getScaledNormal(bX, bottomLeftX, size);
  const scaledBY = getScaledNormal(bY, bottomLeftY, -size);

  noFill();
  stroke(0, 127, 0);
  strokeWeight(2);
  bezier(
    bottomLeftX,
    bottomLeftY,
    scaledCpAX,
    scaledCpAY,
    scaledCpBX,
    scaledCpBY,
    endX,
    endY
  );
  stroke(0, 127, 0);
  strokeWeight(1);
  line(bottomLeftX, bottomLeftY, scaledCpAX, scaledCpAY);
  line(scaledCpBX, scaledCpBY, endX, endY);
  stroke(0);
  line(bottomLeftX, bottomLeftY, endX, bottomLeftY);
  line(bottomLeftX, bottomLeftY, bottomLeftX, endY);
  stroke(255, 0, 0);
  line(scaledBX, bottomLeftY, scaledBX, scaledBY);
  stroke(0, 0, 255);
  line(bottomLeftX, scaledBY, scaledBX, scaledBY);
  stroke(0);
  fill(255);
  circle(scaledBX, scaledBY, 10);
  noStroke();
  fill(255, 0, 0);
  textAlign(LEFT);
  text(bX.toFixed(6), scaledBX, bottomLeftY + textAscent());
  fill(0, 0, 255);
  textAlign(RIGHT);
  text(bY.toFixed(6), bottomLeftX - 8, scaledBY);
};

function windowResized() {
  const canvasContainer = select('#canvas');
  resizeCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
}
