// Original Code from: https://editor.p5js.org/natureofcode/sketches/YT6u0GqtH
// Daniel Shiffman
// The Nature of Code
// Example 6-6: Matter.js Pendulum

//Modified by OO-SUNG SON (spctrm404)

class Pendulum {
  constructor(x, y, len, rad) {
    this.len = len;
    this.rad = rad;
    this.anchor = Bodies.circle(x, y, this.rad, { isStatic: true });
    this.bob = Bodies.circle(
      x + cos(radians(-80)) * this.len,
      y + sin(radians(-80)) * this.len,
      this.rad
    );

    let options = {
      bodyA: this.anchor,
      bodyB: this.bob,
      length: this.len,
    };
    this.arm = Matter.Constraint.create(options);

    Composite.add(engine.world, this.anchor);
    Composite.add(engine.world, this.bob);
    Composite.add(engine.world, this.arm);
  }

  display() {
    line(
      this.anchor.position.x,
      this.anchor.position.y,
      this.bob.position.x,
      this.bob.position.y
    );

    push();
    translate(this.anchor.position.x, this.anchor.position.y);
    rotate(this.anchor.angle);
    circle(0, 0, this.rad * 2);
    line(0, 0, this.rad, 0);
    pop();

    push();
    translate(this.bob.position.x, this.bob.position.y);
    rotate(this.bob.angle);
    circle(0, 0, this.rad * 2);
    line(0, 0, this.rad, 0);
    pop();
  }
}
