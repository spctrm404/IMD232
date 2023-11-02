// Original Code from: https://editor.p5js.org/natureofcode/sketches/GXRa48IQO
// Daniel Shiffman
// The Nature of Code
// Example 6-1: Matter.js Default Render and Runner

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Body, Vector, Render } = Matter;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  let engine = Engine.create();

  let render = Matter.Render.create({
    canvas: canvas.elt,
    engine,
    options: { width: width, height: height },
  });
  Render.run(render);

  let options = {
    friction: 0.01,
    restitution: 0.75,
  };
  let box = Bodies.rectangle(100, 100, 50, 50, options);
  let v = Vector.create(5, 0);
  Body.setVelocity(box, v);
  Body.setAngularVelocity(box, 0.1);
  Composite.add(engine.world, box);

  let ground = Bodies.rectangle(width / 2, height - 5, width, 10, {
    isStatic: true,
  });
  Composite.add(engine.world, ground);

  let runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);
}
