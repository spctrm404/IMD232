// Original Code from: https://editor.p5js.org/natureofcode/sketches/oadKdOndU
// Daniel Shiffman
// The Nature of Code
// Example 1-1: Bouncing Ball, no vectors

//Modified by OO-SUNG SON (spctrm404)

// Variables for position and speed of ball.
let x = 100;
let y = 100;
let speedX = 2.5;
let speedY = 2;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  background(255);

  // Move the ball according to its speed.
  x = x + speedX;
  y = y + speedY;

  // Check for bouncing.
  if (x > width || x < 0) {
    speedX = speedX * -1;
  }
  if (y > height || y < 0) {
    speedY = speedY * -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  // Draw the ball at the position (x,y).
  circle(x, y, 48);
}
