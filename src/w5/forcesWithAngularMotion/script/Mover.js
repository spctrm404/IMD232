// Original Code from: https://editor.p5js.org/natureofcode/sketches/xj2C2Ldbo
// Daniel Shiffman
// The Nature of Code
// Example 3-2: Forces with (Arbitrary) Angular Motion

//Modified by OO-SUNG SON (spctrm404)

class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 2;
    this.angle = 0;
    this.angleVel = 0;
    this.angleAcc = 0;
  }

  applyForce(force) {
    let forceDivedMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.angleAcc = this.acc.x / 10.0;
    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;
    this.acc.mult(0);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(0, 0, this.rad * 2);
    line(0, 0, this.rad, 0);
    pop();
  }

  displayVectors() {
    push();
    translate(this.pos.x, this.pos.y);
    strokeWeight(1);
    stroke('#ff0000');
    line(0, 0, this.vel.x * 10, this.vel.y * 10);
    pop();
  }
}
