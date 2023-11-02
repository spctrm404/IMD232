// Original Code from: https://editor.p5js.org/natureofcode/sketches/xxYF4I5bi
// Daniel Shiffman
// The Nature of Code
// Example 6-5: Multiple Shapes on One Body

//Modified by OO-SUNG SON (spctrm404)

class Maraca {
  constructor(x, y, w, h, rad, options) {
    this.w = w;
    this.h = h;
    this.rad = rad;

    this.part1 = Bodies.rectangle(x, y, this.w, this.h);
    this.part2 = Bodies.circle(x + this.w / 2, y, this.rad);

    options.parts = [this.part1, this.part2];

    this.body = Body.create(options);
    Composite.add(engine.world, this.body);
  }

  setVelocity(velocity) {
    Body.setVelocity(this.body, Vector.create(velocity.x, velocity.y));
  }

  setAngularVelocity(angularVelocity) {
    Body.setAngularVelocity(this.body, angularVelocity);
  }

  display() {
    let pos = this.body.position;
    let pos1 = this.part1.position;
    let pos2 = this.part2.position;
    const angle = this.body.angle;

    push();
    translate(pos1.x, pos1.y);
    rotate(angle);
    // rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();

    push();
    translate(pos2.x, pos2.y);
    rotate(angle);
    circle(0, 0, this.rad * 2);
    pop();

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill('red');
    ellipse(0, 0, 5);
    stroke('red');
    line(0, 0, 10, 0);
    pop();
  }

  displayWrong() {
    let pos = this.body.position;
    const angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    circle(this.w / 2, 0, this.rad * 2);
    noStroke();
    fill('red');
    ellipse(0, 0, 5);
    stroke('red');
    line(0, 0, 10, 0);
    pop();
  }

  checkEdge() {
    return this.body.position.y > height + 100;
  }

  removeBody() {
    Composite.remove(engine.world, this.body);
  }
}
