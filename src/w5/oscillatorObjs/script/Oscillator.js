// Original Code from: https://editor.p5js.org/natureofcode/sketches/b3HpgJa6F
// Daniel Shiffman
// The Nature of Code
// Example 3-7: Oscillator Objects

//Modified by OO-SUNG SON (spctrm404)

class Oscillator {
  constructor(velX, velY, ampX, ampY) {
    this.angle = createVector();
    this.angleVelocity = createVector(velX, velY);
    this.amplitude = createVector(ampX, ampY);
  }

  update() {
    this.angle.add(this.angleVelocity);
  }

  display() {
    let x = sin(this.angle.x) * this.amplitude.x;
    let y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width / 2, height / 2);
    stroke(0);
    strokeWeight(2);
    fill(127);
    // line(0, 0, x, y);
    circle(x, y, 32);
    pop();
  }

  displaySeparate() {
    let x = sin(this.angle.x) * this.amplitude.x;
    let y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width / 2, height / 2);
    stroke('#0000ff');
    line(x, -height / 2, x, -height / 2 + 10);
    stroke('#ff0000');
    line(-width / 2, y, -width / 2 + 10, y);
    pop();
  }
}
