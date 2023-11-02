// Original Code from: https://editor.p5js.org/natureofcode/sketches/YT6u0GqtH
// Daniel Shiffman
// The Nature of Code
// Example 6-6: Matter.js Pendulum

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Body, Vector } = Matter;

let engine;

let pendulum;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  engine = Engine.create();

  engine = Engine.create();
  pendulum = new Pendulum(width / 2, 20, 100, 12);
}

function draw() {
  background(255);

  Engine.update(engine);

  pendulum.display();
}
