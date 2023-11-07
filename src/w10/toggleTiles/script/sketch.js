const tiles = [];
const rowNum = 10,
  colNum = 10;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const newTile = new StateTile(col, row, rowNum, colNum);
      tiles.push(newTile);
      console.log(`${newTile.getX()}, ${newTile.getY()}`);
    }
  }
}

function draw() {
  background(255);

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++) {
    tiles[idx].mouseClicked(mouseX, mouseY);
  }
}
