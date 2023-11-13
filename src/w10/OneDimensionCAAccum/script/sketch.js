const tiles = [];
const colNum = 51;

let w, h;
let currentRow = 0;

function setup() {
  setCanvasContainer('canvas', 51, 51, true);

  w = width / colNum;
  h = w;
  for (let col = 0; col < colNum; col++) {
    const x = w * col;
    const y = h * currentRow;
    const newTile = new Cell(x, y, w, h);
    tiles.push(newTile);
  }

  for (let col = 0; col < colNum; col++) {
    const neighborsIdx = [
      getIdx(currentRow, col - 1),
      getIdx(currentRow, col + 1),
    ];
    if (col === 0) {
      neighborsIdx[0] = -1;
    } else if (col === colNum - 1) {
      neighborsIdx[1] = -1;
    }
    const neighbors = [];
    neighborsIdx.forEach((eachIdx) => {
      neighbors.push(eachIdx >= 0 ? tiles[eachIdx] : null);
    });
    const idx = getIdx(currentRow, col);
    tiles[idx].setNeighbors(neighbors);
  }

  tiles[floor(colNum / 2) + 1].state = true;

  frameRate(4);
  background(255);
  noStroke();

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function draw() {
  background(255);

  const newRow = [];
  for (let col = 0; col < colNum; col++) {
    const idx = getIdx(currentRow, col);
    const newTile = new Cell(tiles[idx].x, tiles[idx].y + h, w, h);
    newTile.state = tiles[idx].calcNextState();
    newRow.push(newTile);
  }
  for (let col = 0; col < colNum; col++) {
    const neighborsIdx = [getIdx(0, col - 1), getIdx(0, col + 1)];
    if (col === 0) {
      neighborsIdx[0] = -1;
    } else if (col === colNum - 1) {
      neighborsIdx[1] = -1;
    }
    const neighbors = [];
    neighborsIdx.forEach((eachIdx) => {
      neighbors.push(eachIdx >= 0 ? newRow[eachIdx] : null);
    });
    const idx = getIdx(0, col);
    newRow[idx].setNeighbors(neighbors);
  }
  newRow.forEach((each) => {
    tiles.push(each);
  });
  currentRow++;

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
