class Tile {
  constructor(x, y, w, h, isMine) {
    this.pos = { x: x, y: y };
    this.size = { w: w, h: h };
    this.isMine = isMine;
  }

  display() {
    if (this.isMine) {
      fill('red');
    } else {
      fill('blue');
    }
    rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }
}
