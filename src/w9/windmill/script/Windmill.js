// Original Code from: https://editor.p5js.org/natureofcode/sketches/D96JFWc3-
// Daniel Shiffman
// The Nature of Code
// Example 6-7: Spinning Windmill

//Modified by OO-SUNG SON (spctrm404)

class Windmill {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h);
    Composite.add(engine.world, this.body);

    let options = {
      bodyA: this.body,
      pointB: { x, y },
      length: 0,
      stiffness: 1,
    };
    this.constraint = Matter.Constraint.create(options);
    Composite.add(engine.world, this.constraint);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
