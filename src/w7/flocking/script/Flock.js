// Original Code from: https://editor.p5js.org/natureofcode/sketches/IkpBw96Sd
// Daniel Shiffman
// The Nature of Code
// Example 5-9: Flocking

//Modified by OO-SUNG SON (spctrm404)

class Flock {
  constructor() {
    this.boids = [];
  }

  run() {
    this.boids.forEach((each) => {
      each.run(this.boids);
    });
  }

  addBoid(boid) {
    this.boids.push(boid);
  }
}
