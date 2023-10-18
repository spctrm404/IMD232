// Original Code from: https://editor.p5js.org/natureofcode/sketches/S7YOOYs7T
// Daniel Shiffman
// The Nature of Code
// Example 5-7: Separation

//Modified by OO-SUNG SON (spctrm404)

class Vehicle {
  constructor(x, y, mass, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = 12;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  separate(vehicles) {
    const desired = this.rad * 2;
    const sum = createVector(0, 0);
    let count = 0;

    vehicles.forEach((each) => {
      const d = p5.Vector.dist(this.pos, each.pos);
      if (this !== each && d < desired) {
        const diff = p5.Vector.sub(this.pos, each.pos);
        diff.setMag(1 / d);
        sum.add(diff);
        count++;
      }
    });

    if (count > 0) {
      sum.setMag(this.speedMx);
      const steer = p5.Vector.sub(sum, this.vel);
      steer.limit(this.forceMx);
      this.applyForce(steer);
    }
  }

  borders() {
    if (this.pos.x < -this.rad) this.pos.x = width + this.rad;
    if (this.pos.y < -this.rad) this.pos.y = height + this.rad;
    if (this.pos.x > width + this.rad) this.pos.x = -this.rad;
    if (this.pos.y > height + this.rad) this.pos.y = -this.rad;
  }

  display() {
    fill(127);
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, this.rad);
    pop();
  }
}
