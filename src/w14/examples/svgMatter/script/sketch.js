const {
  Engine,
  Render,
  Runner,
  Composites,
  Common,
  MouseConstraint,
  Mouse,
  Composite,
  Vertices,
  Bodies,
  Svg,
} = Matter;

Common.setDecomp(decomp);

// create engine
const engine = Engine.create(),
  world = engine.world;

// create runner
const runner = Runner.create();

const oWidth = 800;
const oHeight = 600;

const walls = [];
const svgObjs = [];

let mouse;

const pngs = [];

function preload() {
  pngs.push(loadImage('./svg/1x/iconmonstr-check-mark-8-icon.png'));
  pngs.push(loadImage('./svg/1x/iconmonstr-paperclip-2-icon.png'));
  // pngs.push(loadImage('./svg/1x/iconmonstr-puzzle-icon.png'));
  // pngs.push(loadImage('./svg/1x/iconmonstr-user-icon.png'));
  pngs.push(loadImage('./svg/1x/svg.png'));
}

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  walls.push(Bodies.rectangle(400, 0, 800, 50, { isStatic: true }));
  walls.push(Bodies.rectangle(400, 600, 800, 50, { isStatic: true }));
  walls.push(Bodies.rectangle(800, 300, 50, 600, { isStatic: true }));
  walls.push(Bodies.rectangle(0, 300, 50, 600, { isStatic: true }));
  Composite.add(world, walls);

  // add bodies
  if (typeof fetch !== 'undefined') {
    var select = function (root, selector) {
      return Array.prototype.slice.call(root.querySelectorAll(selector));
    };
    var loadSvg = function (url) {
      return fetch(url)
        .then(function (response) {
          return response.text();
        })
        .then(function (raw) {
          return new window.DOMParser().parseFromString(raw, 'image/svg+xml');
        });
    };

    [
      './svg/iconmonstr-check-mark-8-icon.svg',
      './svg/iconmonstr-paperclip-2-icon.svg',
      // './svg/iconmonstr-puzzle-icon.svg',
      // './svg/iconmonstr-user-icon.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var color = Common.choose([
          '#f19648',
          '#f5d259',
          '#f55a3c',
          '#063e7b',
          '#ececd1',
        ]);
        var vertexSets = select(root, 'path').map(function (path) {
          return Vertices.scale(Svg.pathToVertices(path, 30), 1, 1);
        });
        const aNewBody = Bodies.fromVertices(
          100 + i * 150,
          200 + i * 50,
          vertexSets,
          {
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push({ matter: aNewBody, png: pngs[i] });
        Composite.add(world, aNewBody);
      });
    });

    loadSvg('./svg/svg.svg').then(function (root) {
      var color = Common.choose([
        '#f19648',
        '#f5d259',
        '#f55a3c',
        '#063e7b',
        '#ececd1',
      ]);

      var vertexSets = select(root, 'path').map(function (path) {
        return Svg.pathToVertices(path, 30);
      });

      const aNewBody = Bodies.fromVertices(
        400,
        80,
        vertexSets,
        {
          render: {
            fillStyle: color,
            strokeStyle: color,
            lineWidth: 1,
          },
        },
        true
      );
      svgObjs.push({ matter: aNewBody, png: pngs[pngs.length - 1] });
      Composite.add(world, aNewBody);
    });
  } else {
    Common.warn('Fetch is not available. Could not load SVG.');
  }

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });
  Composite.add(world, mouseConstraint);

  console.log('walls', walls);
  console.log('svgObjs', svgObjs);

  background('white');
  Runner.run(runner, engine);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;

  background('white');

  stroke(0);
  noFill();
  walls.forEach((eachWall) => {
    beginShape();
    eachWall.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / oWidth) * width,
        (eachVertex.y / oHeight) * height
      );
    });
    endShape(CLOSE);
  });

  noStroke();
  fill('red');
  svgObjs.forEach((eachBody) => {
    push();
    translate(eachBody.matter.position.x, eachBody.matter.position.y);
    rotate(eachBody.matter.angle);
    image(
      eachBody.png,
      eachBody.png.width * -0.5,
      eachBody.png.height * -1,
      eachBody.png.width,
      eachBody.png.height
    );
    pop();
    eachBody.matter.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
