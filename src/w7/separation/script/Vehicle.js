// Original Code from: https://editor.p5js.org/natureofcode/sketches/S7YOOYs7T
// Daniel Shiffman
// The Nature of Code
// Example 5-7: Separation

//Modified by OO-SUNG SON (spctrm404)

class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
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

  display() {
    fill(127);
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, 2 * this.rad);
    pop();
  }

  separate(vehicles) {
    const steer = createVector(0, 0);
    let count = 0;
    vehicles.forEach((each) => {
      if (this !== each) {
        const desiredDist = this.rad + each.rad;
        const dist = p5.Vector.dist(this.pos, each.pos);
        if (dist > 0 && dist < desiredDist) {
          const diff = p5.Vector.sub(this.pos, each.pos);
          diff.setMag(1 / dist);
          steer.add(diff);
          count++;
        }
      }
    });
    if (count > 0) {
      steer.div(count);
    }
    if (steer.mag() > 0) {
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
      this.applyForce(steer);
    }
  }

  borderInfinite() {
    if (this.pos.x < -this.rad) {
      this.pos.x = width + this.rad;
    } else if (this.pos.x > width + this.rad) {
      this.pos.x = -this.rad;
    }
    if (this.pos.y < -this.rad) {
      this.pos.y = height + this.rad;
    } else if (this.pos.y > height + this.rad) {
      this.pos.y = -this.rad;
    }
  }
}
