let sketchA = function (p) {
  let dom = document.querySelector('#sketchAGoesHere');
  let domWidth = dom.clientWidth;
  let domHeight = dom.clientHeight;
  let canvas;
  p.setup = function () {
    canvas = p.createCanvas(domWidth, domHeight);
    canvas.parent(dom);
    p.background(200);
  };

  p.draw = function () {
    p.background(200);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };

  p.windowResized = function () {
    domWidth = dom.clientWidth;
    domHeight = dom.clientHeight;
    p.resizeCanvas(domWidth, domHeight);
  };
};

let myP5A = new p5(sketchA);
