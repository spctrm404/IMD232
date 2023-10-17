const bodies = [];
const bodyNum = 30;
const G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
  background(255);
}

function draw() {
  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        const forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
  }
  bodies.forEach((each) => {
    each.update();
  });
  background(255);
  bodies.forEach((each) => {
    each.display();
  });
}

function mousePressed() {
  init();
}

function init() {
  for (let i = 0; i < bodyNum; i++) {
    bodies[i] = new Body(random(width), random(height), random(16, 100));
  }
}
