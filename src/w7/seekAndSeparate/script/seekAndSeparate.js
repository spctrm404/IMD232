// Original Code from: https://editor.p5js.org/natureofcode/sketches/UJEwENSN3
// Daniel Shiffman
// The Nature of Code
// Example 5-8: Combining Steering Behaviors (Seek and Separate)

//Modified by OO-SUNG SON (spctrm404)

let vehicles = [];
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let i = 0; i < 50; i++) {
    vehicles.push(
      new Vehicle(random(width), random(height), 1, random(6, 18), 3, 0.2, 100)
    );
  }
  mVec = createVector();
}

function draw() {
  background(255);

  mVec.set(mouseX, mouseY);
  vehicles.forEach((each) => {
    const seekForce = each.seek(mVec);
    const separateForce = each.separate(vehicles);
    seekForce.mult(1);
    separateForce.mult(2);
    each.applyForce(seekForce);
    each.applyForce(separateForce);
    each.update();
    // each.borderInfinite();
    each.display();
  });
}
