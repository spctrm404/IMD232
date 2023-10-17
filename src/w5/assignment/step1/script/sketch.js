const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  angleBeginVel = (TAU / 360) * 1;
  angleStep = (TAU / 360) * 15;
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      const tileW = width / (3 * cNum + 1);
      const tileH = height / (3 * rNum + 1);
      const x = tileW * (3 * c + 2);
      const y = tileH * (3 * r + 2);
      const angle = angleBegin + angleStep * (cNum * r + c);
      push();
      translate(x, y);
      rotate(angle);
      if (c % 2 == 0) {
        if (r % 2 == 0) {
          fill(0, 100, 50);
        } else {
          fill(90, 100, 50);
        }
      } else {
        if (r % 2 == 0) {
          fill(180, 100, 50);
        } else {
          fill(270, 100, 50);
        }
      }
      ellipse(0, 0, 2 * tileW, 2 * tileH);
      line(0, 0, tileW, 0);
      fill(0);
      ellipse(tileW, 0, 20);
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
