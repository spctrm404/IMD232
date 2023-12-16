let capture;

let noiseSeedNum = 1;
let noiseField;

let particles = [];
const particlesNum = 2000;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  capture = createCapture(VIDEO);

  noiseSeed(noiseSeedNum);

  noiseField = new NoiseField(50, 0.1, 0.01);
  noiseField.createTiles();
  console.log(noiseField);

  for (let n = 0; n < particlesNum; n++) {
    particles.push(new Particle(random(width), random(height), 4, 'red'));
  }

  //   background('white');
  background(0, 10);
}

function draw() {
  //   background('white');
  background(0, 10);

  //   noiseField.displayTiles();

  capture.loadPixels();

  particles.forEach((eachParticle) => {
    const angle = noiseField.lookup(eachParticle.pos.x, eachParticle.pos.y);
    const force = createVector(0.1, 0);
    force.rotate(angle);
    eachParticle.applyForce(force);
    eachParticle.update();
    if (eachParticle.isOutside()) {
      const particleX = random(width);
      const particleY = random(height);
      const captureX = floor(map(particleX, 0, width, 0, capture.width));
      const captureY = floor(map(particleY, 0, height, 0, capture.height));
      const captureIdx = 4 * (captureY * capture.width + captureX);
      const idxR = captureIdx + 0;
      const idxG = captureIdx + 1;
      const idxB = captureIdx + 2;
      eachParticle.pos.set(particleX, particleY);
      eachParticle.color = color(
        capture.pixels[idxR],
        capture.pixels[idxG],
        capture.pixels[idxB]
      );
    }
    eachParticle.display();
  });
}

function mousePressed() {
  noiseSeedNum = floor(random(10000));
  console.log(noiseSeedNum);
  noiseSeed(noiseSeedNum);
  noiseField.createTiles();
}
