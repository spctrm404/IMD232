// Original Code from: https://editor.p5js.org/natureofcode/sketches/WSoUy03ph
// Daniel Shiffman
// The Nature of Code
// Example 6-3: Falling Boxes Hitting Boundaries

//Modified by OO-SUNG SON (spctrm404)

class Boundary {
  constructor(x, y, w, h, options) {
    this.w = w;
    this.h = h;
    options.isStatic = true;
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
}
