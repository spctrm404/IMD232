// Original Code from: https://editor.p5js.org/natureofcode/sketches/WSoUy03ph
// Daniel Shiffman
// The Nature of Code
// Example 6-3: Falling Boxes Hitting Boundaries

//Modified by OO-SUNG SON (spctrm404)

class Box {
  constructor(x, y, w, h, options) {
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, this.w, this.h, options);
    Composite.add(engine.world, this.body);
  }

  setVelocity(velocity) {
    Body.setVelocity(this.body, Vector.create(velocity.x, velocity.y));
  }

  setAngularVelocity(angularVelocity) {
    Body.setAngularVelocity(this.body, angularVelocity);
  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

  checkEdge() {
    return this.body.position.y > height + this.w + this.h;
  }

  removeBody() {
    Composite.remove(engine.world, this.body);
  }
}
