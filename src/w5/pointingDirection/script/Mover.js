// Original Code from: https://editor.p5js.org/natureofcode/sketches/bZqHGYbRQ
// Daniel Shiffman
// The Nature of Code
// Example 3-3: Pointing in the Direction of Motion

//Modified by OO-SUNG SON (spctrm404)

class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 8;
  }

  applyForce(force) {
    let forceDivedMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedMass);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    rectMode(CENTER);
    rect(0, 0, 40, 8);
    pop();
  }
}
