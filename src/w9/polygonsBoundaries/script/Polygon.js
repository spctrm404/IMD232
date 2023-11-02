// Original Code from: https://editor.p5js.org/natureofcode/sketches/o3-Qpqu2i
// Daniel Shiffman
// The Nature of Code
// Example 6-4: Polygon Shapes

//Modified by OO-SUNG SON (spctrm404)

class Polygon {
  constructor(x, y, options) {
    let vertices = [];
    vertices[0] = Vector.create(-10, -10);
    vertices[1] = Vector.create(20, -15);
    vertices[2] = Vector.create(15, 0);
    vertices[3] = Vector.create(0, 10);
    vertices[4] = Vector.create(-20, 15);
    this.body = Bodies.fromVertices(x, y, vertices, options);
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

    beginShape();
    this.body.vertices.forEach((each) => {
      vertex(each.x, each.y);
    });
    endShape(CLOSE);
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

  checkEdge() {
    return this.body.position.y > height + 100;
  }

  removeBody() {
    Composite.remove(engine.world, this.body);
  }
}
