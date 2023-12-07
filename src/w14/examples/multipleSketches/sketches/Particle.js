class Particle {
  constructor(p, x, y) {
    this.p = p;
    this.pos = this.p.createVector(x, y);
    this.vel = this.p.createVector();
    this.acc = this.p.createVector();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  isDead() {
    return this.pos.y > this.p.height + 5;
  }

  display() {
    this.p.noStroke();
    this.p.fill('white');
    // this.p.ellipse(this.pos.x, this.pos.y, 10);
    this.p.ellipse(this.pos.x, this.pos.y, 10);
  }
}
