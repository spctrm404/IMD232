// Original Code from: https://editor.p5js.org/natureofcode/sketches/zcH21K3T3
// Daniel Shiffman
// The Nature of Code
// Example 5-5: Simple Path Following

//Modified by OO-SUNG SON (spctrm404)

class Path {
  constructor() {
    this.rad = 20;
    this.start = createVector(0, height / 3);
    this.end = createVector(width, (2 * height) / 3);
  }

  display() {
    strokeWeight(this.rad * 2);
    stroke(0, 50);
    line(this.start.x, this.start.y, this.end.x, this.end.y);

    strokeWeight(1);
    stroke(0);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
