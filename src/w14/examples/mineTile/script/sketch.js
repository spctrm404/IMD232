const tiles = [];

const rowNum = 8;
const colNum = 8;

const mineNum = 10;
const mineIdx = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  const tileW = width / colNum;
  const tileH = height / rowNum;
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = tileW * col;
      const y = tileH * row;
      tiles.push(new Tile(x, y, tileW, tileH, false));
    }
  }
  for (let cnt = 0; cnt < mineNum; cnt++) {
    let randomIdx = floor(random(rowNum * colNum));
    while (mineIdx.includes(randomIdx)) {
      randomIdx = floor(random(rowNum * colNum));
    }
    tiles[randomIdx].isMine = true;
    mineIdx.push(randomIdx);
  }

  background(255);
}

function draw() {
  background(255);
  tiles.forEach((eachTile) => {
    eachTile.display();
  });
}
