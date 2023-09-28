// Original Code from: https://editor.p5js.org/natureofcode/sketches/HZOUeCe9p
// Daniel Shiffman
// The Nature of Code
// Example 3-10: A Spring Connection

//Modified by OO-SUNG SON (spctrm404)

class Bob {
  constructor(x, y, mass, rad) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 24;
    this.rad = 24;
    // Arbitrary damping to simulate friction / drag
    this.damping = 0.98;
    // For user interaction
    this.dragOffset = createVector();
    this.dragging = false;
  }

  // Standard Euler integration
  update() {
    this.vel.add(this.acc);
    this.vel.mult(this.damping);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  // Newton's law: F = M * A
  applyForce(force) {
    let forceDivedMass = force.copy();
    forceDivedMass.div(this.mass);
    this.acc.add(forceDivedMass);
  }

  // Draw the bob
  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    if (this.dragging) {
      fill(200);
    }
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }

  handleClick(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.rad) {
      this.dragging = true;
      this.dragOffset.x = this.pos.x - mx;
      this.dragOffset.y = this.pos.y - my;
    }
  }

  stopDragging() {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.pos.x = mx + this.dragOffset.x;
      this.pos.y = my + this.dragOffset.y;
    }
  }
}
