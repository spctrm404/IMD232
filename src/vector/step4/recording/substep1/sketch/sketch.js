let x, y;
let tx, ty;
let ox, oy;
let mousePressedFrame;
const duration = 30 * 1;
const cpAx = 0.7;
const cpAy = 0.1;
const cpBx = 0.9;
const cpBy = 0.2;

function setup() {
  setSketchContainer(3 / 2, 'canvas');
  x = width / 2;
  y = height / 2;
  tx = width / 2;
  ty = height / 2;
  ox = width / 2;
  oy = height / 2;
  background(240);
}

function draw() {
  interpolation();

  background(240);

  noStroke();
  fill(0, 255, 0);
  circle(ox, oy, 20);
  fill(0, 0, 255);
  circle(tx, ty, 30);
  fill(255, 0, 0);
  circle(x, y, 20);

  // translate(200, 200);
  // const mult = 100;
  // noFill();
  // stroke(0);
  // bezier(
  //   0,
  //   0,
  //   cpAx * mult,
  //   -cpAy * mult,
  //   cpBx * mult,
  //   -cpBy * mult,
  //   1 * mult,
  //   -1 * mult
  // );
}

const getNormalizedTime = () => {
  return (frameCount - mousePressedFrame) / duration;
};

const interpolation = () => {
  if (getNormalizedTime() <= 1) {
    const warpedTime = bezierPoint(0, cpAy, cpBy, 1, getNormalizedTime());
    const disX = tx - ox;
    const disY = ty - oy;
    // x = ox + disX * getNormalizedTime();
    // y = oy + disY * getNormalizedTime();
    x = ox + disX * warpedTime;
    y = oy + disY * warpedTime;
  }
};

function mousePressed() {
  mousePressedFrame = frameCount;
  ox = x;
  oy = y;
  tx = mouseX;
  ty = mouseY;
}
