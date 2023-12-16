class NoiseField {
  constructor(tileSize, thetaX, thetaY) {
    this.tileSize = tileSize;
    this.thetaX = thetaX;
    this.thetaY = thetaY;
    this.colNum;
    this.rowNum;
    this.tiles = [];
  }

  createTiles() {
    this.tiles = [];
    this.colNum = ceil(width / this.tileSize);
    this.rowNum = ceil(height / this.tileSize);
    for (let row = 0; row < this.rowNum; row++) {
      for (let col = 0; col < this.colNum; col++) {
        const noiseVal = noise(this.thetaX * col, this.thetaY * row);
        const tileAngle = TAU * noiseVal;
        this.tiles.push(tileAngle);
      }
    }
  }

  lookup(x, y) {
    const col = floor(x / this.tileSize);
    const row = floor(y / this.tileSize);
    const idx = this.colNum * row + col;
    return this.tiles[idx];
  }

  displayTiles() {
    this.tiles.forEach((eachTile, idx) => {
      const col = idx % this.colNum;
      const row = floor(idx / this.colNum);
      const x = col * this.tileSize + 0.5 * this.tileSize;
      const y = row * this.tileSize + 0.5 * this.tileSize;
      push();
      translate(x, y);
      rect(
        -this.tileSize * 0.5,
        -this.tileSize * 0.5,
        this.tileSize,
        this.tileSize
      );
      rotate(eachTile);
      line(0, 0, 10, 0);
      pop();
    });
  }
}
