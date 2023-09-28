// Original Code from: https://editor.p5js.org/natureofcode/sketches/b3HpgJa6F
// Daniel Shiffman
// The Nature of Code
// Example 3-7: Oscillator Objects

//Modified by OO-SUNG SON (spctrm404)

let oscillators = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let i = 0; i < 1; i++) {
    oscillators.push(
      new Oscillator(
        periodToAngularVel(1000),
        periodToAngularVel(3000),
        random(20, width / 2),
        random(20, height / 2)
      )
    );
  }
  background(255);
}

function draw() {
  //   background(255);
  background(255, 1);
  oscillators.forEach((eachOscillators) => {
    eachOscillators.update();
    eachOscillators.display();
    eachOscillators.displaySeparate();
  });
}

function periodToAngularVel(millis) {
  const oneSec = getTargetFrameRate();
  const periodAsFrame = (millis / 1000) * oneSec;
  return TAU / periodAsFrame;
}
