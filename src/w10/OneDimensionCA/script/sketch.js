const tiles = [];
const rowNum = 1,
  colNum = 51;

function setup() {
  setCanvasContainer('canvas', 51, 1, true);

  const w = width / colNum;
  const h = w;
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const newTile = new Cell(x, y, w, h);
      tiles.push(newTile);
    }
  }
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const neighborsIdx = [getIdx(row, col - 1), getIdx(row, col + 1)];
      if (col === 0) {
        neighborsIdx[0] = -1;
      } else if (col === colNum - 1) {
        neighborsIdx[1] = -1;
      }
      const neighbors = [];
      neighborsIdx.forEach((eachIdx) => {
        neighbors.push(eachIdx >= 0 ? tiles[eachIdx] : null);
      });
      const idx = getIdx(row, col);
      tiles[idx].setNeighbors(neighbors);
    }
  }

  tiles[floor(colNum / 2) + 1].state = true;
  tiles[floor(colNum / 2) + 1].nextState = true;

  frameRate(1);
  background(255);
  noStroke();

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function draw() {
  background(255);

  tiles.forEach((each) => {
    each.calcNextState();
  });
  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function getIdx(row, col) {
  return row * colNum + col;
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++)
    if (tiles[idx].toggleState(mouseX, mouseY)) break;
}

function keyPressed() {
  // tiles.forEach((each) => {
  //   each.calcNextState();
  // });
  // tiles.forEach((each) => {
  //   each.update();
  // });
}
