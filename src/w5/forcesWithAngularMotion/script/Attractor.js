// Original Code from: https://editor.p5js.org/natureofcode/sketches/xj2C2Ldbo
// Daniel Shiffman
// The Nature of Code
// Example 3-2: Forces with (Arbitrary) Angular Motion

//Modified by OO-SUNG SON (spctrm404)

class Attractor {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.mass = 20;
    this.rad = 30;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let strength = (this.mass * mover.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  display() {
    strokeWeight(4);
    stroke(0);
    fill(175, 200);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
