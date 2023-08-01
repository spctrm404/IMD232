const aspectRatio = 3 / 2;

function setup() {
  const canvasContainer = select('#canvas');
  const canvas = createCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
  canvas.parent(canvasContainer);

  background(240);
  textSize(18);
}

function draw() {
  background(240);
  easingGraph(400, 0.2, 0.0, 0.0, 1, mouseX);
}

const easingGraph = (size, cpAX, cpAY, cpBX, cpBY, inputX) => {
  const zeroX = width / 2 - size / 2;
  const zeroY = height / 2 + size / 2;
  const endX = zeroX + size;
  const endY = zeroY - size;
  const constrainedX = constrain(inputX, zeroX, endX);
  const t = map(constrainedX, zeroX, endX, 0, 1);
  const scaledCpAX = map(cpAX, 0, 1, zeroX, endX);
  const scaledCpAY = map(cpAY, 0, 1, zeroY, endY);
  const scaledCpBX = map(cpBX, 0, 1, zeroX, endX);
  const scaledCpBY = map(cpBY, 0, 1, zeroY, endY);
  const bX = bezierPoint(zeroX, scaledCpAX, scaledCpBX, endX, t);
  const bY = bezierPoint(zeroY, scaledCpAY, scaledCpBY, endY, t);
  const bXNormal = (bX - zeroX) / size;
  const bYNormal = (-1 * (bY - zeroY)) / size;

  bezier(
    zeroX,
    zeroY,
    scaledCpAX,
    scaledCpAY,
    scaledCpBX,
    scaledCpBY,
    endX,
    endY
  );
  line(zeroX, zeroY, scaledCpAX, scaledCpAY);
  line(scaledCpBX, scaledCpBY, endX, endY);
  line(zeroX, zeroY, endX, zeroY);
  line(zeroX, zeroY, zeroX, endY);
  line(bX, zeroY, bX, bY);
  line(zeroX, bY, bX, bY);
  circle(bX, bY, 10);
  textAlign(LEFT);
  text(bXNormal.toFixed(6), bX, zeroY);
  textAlign(RIGHT);
  text(bYNormal.toFixed(6), zeroX, bY);
};

function windowResized() {
  const canvasContainer = select('#canvas');
  resizeCanvas(
    canvasContainer.width,
    (canvasContainer.width * 1) / aspectRatio
  );
}
