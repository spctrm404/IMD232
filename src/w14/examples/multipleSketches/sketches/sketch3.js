let sketchC = (p) => {
  let gravity;
  let particles = [];
  let dom = document.querySelector('#sketchCGoesHere');
  let domWidth = dom.clientWidth;
  let domHeight = dom.clientHeight;
  let canvas;
  p.setup = () => {
    canvas = p.createCanvas(domWidth, domHeight);
    canvas.parent(dom);
    gravity = p.createVector(0, 0.1);
    particles.push(new Particle(p, p.random(p.width), -50));
    p.background('black');
  };

  p.draw = () => {
    particles.push(new Particle(p, p.random(p.width), -50));
    particles.forEach((eachParticle) => {
      eachParticle.applyForce(gravity);
      eachParticle.update();
    });
    for (let idx = particles.length - 1; idx >= 0; idx--) {
      if (particles[idx].isDead()) {
        particles.splice(idx, 1);
      }
    }
    p.background('black');
    particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  };

  p.windowResized = () => {
    domWidth = dom.clientWidth;
    domHeight = dom.clientHeight;
    p.resizeCanvas(domWidth, domHeight);
  };
};

let myP5C = new p5(sketchC);
