let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('cornsilk');
  mover = new Mover();
  console.log(mover);
}
function draw() {
  background('cornsilk');
  mover.update();
  mover.infiniteEdge();
  mover.display();
  mover.displayVectors();
}
