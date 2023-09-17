class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
  }

  update() {
    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
  }

  boundingEdge() {
    if (this.pos.x < 0) {
      //   this.pos.x = 0;
      this.vel.x *= -1;
    } else if (this.pos.x >= width) {
      //   this.pos.x = width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y >= height) {
      //   this.pos.y = height;
      this.vel.y *= -1;
    }
  }

  display() {
    noStroke();
    fill('green');
    ellipse(this.pos.x, this.pos.y, 2 * 25);
  }

  displayVectors() {
    stroke('#0000ff');
    strokeWeight(2);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('#ff0000');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
