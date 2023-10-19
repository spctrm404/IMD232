// Original Code from: https://editor.p5js.org/natureofcode/sketches/UJEwENSN3
// Daniel Shiffman
// The Nature of Code
// Example 5-8: Combining Steering Behaviors (Seek and Separate)

//Modified by OO-SUNG SON (spctrm404)

class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, decRad) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.decRad = decRad;
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

  display() {
    fill(127);
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    const desired = p5.Vector.sub(target, this.pos);
    const dist = desired.mag();
    if (dist < this.decRad) {
      const speed = map(dist, 0, this.decRad, 0, this.speedMx);
      desired.setMag(speed);
    } else {
      desired.setMag(this.speedMx);
    }
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.forceMx);
    return steer;
  }

  separate(vehicles) {
    let steer = createVector(0, 0);
    const sum = createVector(0, 0);
    let count = 0;
    vehicles.forEach((each) => {
      if (this !== each) {
        const desired = this.rad + each.rad;
        const dist = p5.Vector.dist(this.pos, each.pos);
        if (dist < desired) {
          const diff = p5.Vector.sub(this.pos, each.pos);
          diff.setMag(1 / dist);
          sum.add(diff);
          count++;
        }
      }
    });
    if (count > 0) {
      sum.setMag(this.speedMx);
      steer = p5.Vector.sub(sum, this.vel);
      steer.limit(this.forceMx);
      this.applyForce(steer);
    }
    return steer;
  }
}
