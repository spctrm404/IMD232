let sketchB = (p) => {
  let dom = document.querySelector('#sketchBGoesHere');
  let domWidth = dom.clientWidth;
  let domHeight = dom.clientHeight;
  let canvas;
  p.setup = () => {
    canvas = p.createCanvas(domWidth, domHeight);
    canvas.parent(dom);
    p.background(220);
  };

  p.draw = () => {
    p.background(220);
    p.rect(p.mouseX, p.mouseY, 50, 50);
  };

  p.windowResized = () => {
    domWidth = dom.clientWidth;
    domHeight = dom.clientHeight;
    p.resizeCanvas(domWidth, domHeight);
  };
};

let myP5B = new p5(sketchB);
