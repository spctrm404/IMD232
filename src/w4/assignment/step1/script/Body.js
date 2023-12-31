class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    // this.mass = random(16, 100);
    this.rad = this.mass ** (1 / 2) * 5;
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);
    let distance = force.mag();
    distance = constrain(5, 25);
    const strength = (G * this.mass * body.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    noStroke();
    fill(0, 127);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
