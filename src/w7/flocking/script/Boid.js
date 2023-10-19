// Original Code from: https://editor.p5js.org/natureofcode/sketches/IkpBw96Sd
// Daniel Shiffman
// The Nature of Code
// Example 5-9: Flocking

//Modified by OO-SUNG SON (spctrm404)

class Boid {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.separateFactor = 1.5;
    this.alignFactor = 1.0;
    this.cohereFactor = 1.0;
    this.neighborDist = 50;
  }

  run(boids) {
    this.flock(boids);
    this.update();
    this.borderInfinite();
    this.display();
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
    if (target === null) return createVector(0, 0);
    const desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.speedMx);
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.forceMx);
    return steer;
  }

  flock(boids) {
    let separateForce = this.separate(boids);
    let alignForce = this.align(boids);
    let cohereForce = this.cohere(boids);
    separateForce.mult(this.separateFactor);
    alignForce.mult(this.alignFactor);
    cohereForce.mult(this.cohereFactor);
    this.applyForce(separateForce);
    this.applyForce(alignForce);
    this.applyForce(cohereForce);
  }

  separate(boids) {
    let steer = createVector(0, 0);
    const sum = createVector(0, 0);
    let count = 0;
    boids.forEach((each) => {
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

  align(boids) {
    let steer = createVector(0, 0);
    let sum = createVector(0, 0);
    let count = 0;
    boids.forEach((each) => {
      if (this !== each) {
        const dist = p5.Vector.dist(this.pos, each.pos);
        if (dist < this.neighborDistance) {
          sum.add(each.vel);
          count++;
        }
      }
    });
    if (count > 0) {
      sum.div(count);
      sum.setMag(this.speedMx);
      steer = p5.Vector.sub(sum, this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  cohere(boids) {
    let sum = createVector(0, 0);
    let count = 0;
    boids.forEach((each) => {
      if (this !== each) {
        const dist = p5.Vector.dist(this.pos, each.pos);
        if (dist < this.neighborDistance) {
          sum.add(each.pos);
          count++;
        }
      }
    });
    if (count > 0) {
      sum.div(count);
    } else {
      sum = null;
    }
    return this.seek(sum);
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
