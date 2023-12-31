// Original Code from: https://editor.p5js.org/natureofcode/sketches/fGNwVP3h7
// Daniel Shiffman
// The Nature of Code
// Example 5-3: “Stay Within Walls” Steering Behavior

//Modified by OO-SUNG SON (spctrm404)

class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, decRad) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
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
    const angle = this.vel.heading();
    fill(127);
    stroke(0);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    beginShape();
    vertex(this.rad * 2, 0);
    vertex(-this.rad * 2, -this.rad);
    vertex(-this.rad * 2, this.rad);
    endShape(CLOSE);
    pop();
  }

  seek(target) {
    const steer = p5.Vector.sub(target, this.pos);
    const dist = steer.mag();
    if (dist < this.decRad) {
      const speed = map(dist, 0, this.decRad, 0, this.speedMx);
      steer.setMag(speed);
    } else {
      steer.setMag(this.speedMx);
    }
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  borderStay(offset) {
    let steer = null;
    if (this.pos.x < offset) {
      steer = createVector(this.speedMx, this.vel.y);
    } else if (this.pos.x > width - offset) {
      steer = createVector(-this.speedMx, this.vel.y);
    }
    if (this.pos.y < offset) {
      steer = createVector(this.vel.x, this.speedMx);
    } else if (this.pos.y > height - offset) {
      steer = createVector(this.vel.x, -this.speedMx);
    }
    if (steer !== null) {
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
      this.applyForce(steer);
    }
  }
}
