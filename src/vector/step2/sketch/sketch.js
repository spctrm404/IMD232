const aspectRatio = 3 / 2;

const size = 400;
let bottomLeftX;
let bottomLeftY;

function setup() {
  const canvasContainer = select('#canvas');
  const canvas = createCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
  canvas.parent(canvasContainer);

  bottomLeftX = width / 2 - size / 2;
  bottomLeftY = height / 2 + size / 2;

  background(240);
  textSize(18);
}

function draw() {
  background(240);
  const constrainedX = constrain(mouseX, bottomLeftX, bottomLeftX + size);
  const t = map(constrainedX, bottomLeftX, bottomLeftX + size, 0, 1);
  // renderCubicBezierEasingGraph(bottomLeftX, bottomLeftY, size, 0, 0, 1, 1, t);
  renderCubicBezierEasingGraph(
    bottomLeftX,
    bottomLeftY,
    size,
    0.2,
    0.4,
    0.8,
    0.6,
    t
  );
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
