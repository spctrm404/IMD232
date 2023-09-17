class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  update() {
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.5);
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x = width - 1;
    } else if (this.pos.x >= width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height - 1;
    } else if (this.pos.y >= height) {
      this.pos.y = 0;
    }
  }

  display() {
    noStroke();
    fill('red');
    ellipse(this.pos.x, this.pos.y, 2 * 25);
  }

  displayVectors() {
    stroke('green');
    strokeWeight(2);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('slateblue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
