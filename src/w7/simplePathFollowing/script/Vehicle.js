// Original Code from: https://editor.p5js.org/natureofcode/sketches/zcH21K3T3
// Daniel Shiffman
// The Nature of Code
// Example 5-5: Simple Path Following

//Modified by OO-SUNG SON (spctrm404)

class Vehicle {
  constructor(x, y, mass, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(2);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = 4;
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

  follow(path) {
    const future = this.vel.copy();
    future.setMag(25);
    future.add(this.pos);

    const normalPoint = getNormalPoint(future, path.start, path.end);

    const b = p5.Vector.sub(path.end, path.start);
    b.setMag(25);
    const target = p5.Vector.add(normalPoint, b);

    const distance = p5.Vector.dist(normalPoint, future);
    if (distance > path.rad) {
      this.seek(target);
    }

    if (debug) {
      fill(127);
      stroke(0);
      line(this.pos.x, this.pos.y, future.x, future.y);
      ellipse(future.x, future.y, 4, 4);

      // Draw normal location
      fill(127);
      stroke(0);
      line(future.x, future.y, normalPoint.x, normalPoint.y);
      ellipse(normalPoint.x, normalPoint.y, 4, 4);
      stroke(0);
      if (distance > path.rad) fill(255, 0, 0);
      noStroke();
      ellipse(target.x + b.x, target.y + b.y, 8, 8);
    }
  }

  seek(target) {
    const desired = p5.Vector.sub(target, this.pos);
    // desired.setMag(this.speedMx);
    const d = desired.mag();
    if (d === 0) return;
    desired.normalize();
    desired.mult(this.speedMx);
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  borders(path) {
    if (this.pos.x > path.end.x + this.rad) {
      this.pos.x = path.start.x - this.rad;
      this.pos.y = path.start.y + (this.pos.y - path.end.y);
    }
  }

  display() {
    const angle = this.vel.heading();
    fill(127);
    stroke(0);
    strokeWeight(2);
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
}

function getNormalPoint(pos, a, b) {
  const vectorA = p5.Vector.sub(pos, a);
  const vectorB = p5.Vector.sub(b, a);
  vectorB.normalize();
  vectorB.mult(vectorA.dot(vectorB));
  const normalPoint = p5.Vector.add(a, vectorB);
  return normalPoint;
}
