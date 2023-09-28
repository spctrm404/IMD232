// Original Code from: https://editor.p5js.org/natureofcode/sketches/HZOUeCe9p
// Daniel Shiffman
// The Nature of Code
// Example 3-10: A Spring Connection

//Modified by OO-SUNG SON (spctrm404)

class Spring {
  constructor(x, y, length, k) {
    this.anchor = createVector(x, y);
    this.restLength = length;
    this.k = k;
  }
  // Calculate and apply spring force
  connect(bob) {
    // Vector pointing from anchor to bob location
    let force = p5.Vector.sub(bob.pos, this.anchor);
    // What is distance
    let currentLength = force.mag();
    // Stretch is difference between current distance and rest length
    let stretch = currentLength - this.restLength;

    //{!2 .bold} Direction and magnitude together!
    force.setMag(-1 * this.k * stretch);

    //{!1} Call applyForce() right here!
    bob.applyForce(force);
  }

  constrainLength(bob, minlen, maxlen) {
    //{!1} Vector pointing from Bob to Anchor
    let direction = p5.Vector.sub(bob.pos, this.anchor);
    let length = direction.mag();

    //{!1} Is it too short?
    if (length < minlen) {
      direction.setMag(minlen);
      //{!1} Keep position within constraint.
      bob.pos = p5.Vector.add(this.anchor, direction);
      bob.vel.mult(0);
      //{!1} Is it too long?
    } else if (length > maxlen) {
      direction.setMag(maxlen);
      //{!1} Keep position within constraint.
      bob.pos = p5.Vector.add(this.anchor, direction);
      bob.vel.mult(0);
    }
  }

  //{!5} Draw the anchor.
  display() {
    fill(127);
    circle(this.anchor.x, this.anchor.y, 10);
  }

  //{!4} Draw the spring connection between Bob position and anchor.
  displayLine(bob) {
    stroke(0);
    line(bob.pos.x, bob.pos.y, this.anchor.x, this.anchor.y);
  }
}
