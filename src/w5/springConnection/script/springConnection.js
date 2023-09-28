// Original Code from: https://editor.p5js.org/natureofcode/sketches/HZOUeCe9p
// Daniel Shiffman
// The Nature of Code
// Example 3-10: A Spring Connection

//Modified by OO-SUNG SON (spctrm404)

// Mover object
let bob;

// Spring object
let spring;

let springInitL;
let springMaxL;
let springMinL;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  springInitL = height / 2;
  springMaxL = (2 * height) / 3;
  springMinL = height / 3;
  // Create objects at starting position
  // Note third argument in Spring constructor is "rest length"
  spring = new Spring(width / 2, 10, springInitL, 0.2);
  bob = new Bob(width / 2, 100, 24, 24);
}

function draw() {
  background(255);

  // Apply a gravity force to the bob
  let gravity = createVector(0, 2);
  bob.applyForce(gravity);

  // Update bob
  bob.update();
  bob.handleDrag(mouseX, mouseY);

  // Connect the bob to the spring (this calculates the force)
  spring.connect(bob);

  // Constrain spring distance between min and max
  spring.constrainLength(bob, springMinL, springMaxL);

  // Draw everything
  spring.displayLine(bob); // Draw a line between spring and bob
  bob.display();
  spring.display();
}

function mousePressed() {
  bob.handleClick(mouseX, mouseY);
}

function mouseReleased() {
  bob.stopDragging();
}
