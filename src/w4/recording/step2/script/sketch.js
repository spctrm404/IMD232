let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  mover = new Mover();
}
function draw() {
  background('white');
  mover.update();
  mover.boundingEdge();
  mover.display();
  mover.displayVectors();
}
