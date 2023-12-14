class Particle {
  constructor(x, y, tarX, tarY, col) {
    this.pos = createVector(x, y);
    this.targetPos = createVector(tarX, tarY);
    this.color = col;
    this.state = true;
  }

  update() {
    const dist = p5.Vector.sub(this.targetPos, this.pos);
    dist.mult(0.1);
    this.pos.add(dist);
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 5);
  }
}
