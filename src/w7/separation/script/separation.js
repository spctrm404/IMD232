// Original Code from: https://editor.p5js.org/natureofcode/sketches/S7YOOYs7T
// Daniel Shiffman
// The Nature of Code
// Example 5-7: Separation

//Modified by OO-SUNG SON (spctrm404)

let vehicles = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let i = 0; i < 25; i++) {
    vehicles.push(
      new Vehicle(random(width), random(height), 1, random(6, 18), 3, 0.2)
    );
  }
}

function draw() {
  background(255);

  vehicles.forEach((each) => {
    each.separate(vehicles);
    each.update();
    each.borderInfinite();
    each.display();
  });
}

function mouseDragged() {
  vehicles.push(new Vehicle(mouseX, mouseY, 1, random(6, 18), 3, 0.2));
}
