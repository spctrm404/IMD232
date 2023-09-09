function setup() {
  // createCanvas(500, 500).parent(select('#p5GoesHere'));
  let canvas = createCanvas(500, 500);
  let dom = select('#p5GoesHere');
  canvas.parent(dom);
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 100);
}
