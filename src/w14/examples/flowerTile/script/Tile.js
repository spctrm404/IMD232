class Tile {
  constructor(x, y, w, h, col) {
    this.pos = { x: x, y: y };
    this.size = { x: w, y: h };
    this.center = {
      x: this.pos.x + this.size.x * 0.5,
      y: this.pos.y + this.size.y * 0.5,
    };
    this.col = col;
    this.rad = min((this.size.x / 2) * 0.5, (this.size.y / 2) * 0.5);
    this.isRight = false;
  }

  setValues() {
    this.center = {
      x: this.pos.x + this.size.x * 0.5,
      y: this.pos.y + this.size.y * 0.5,
    };
    this.rad = min((this.size.x / 2) * 0.5, (this.size.y / 2) * 0.5);
  }

  isHover(x, y) {
    // return (
    //   x >= this.pos.x &&
    //   x < this.pos.x + this.size.x &&
    //   y >= this.pos.y &&
    //   y < this.pos.y + this.size.y
    // );
    const distSq = (this.center.x - x) ** 2 + (this.center.y - y) ** 2;
    const distSqLT =
      (this.center.x - this.size.x * 0.5 * 0.5 - x) ** 2 +
      (this.center.y - this.size.y * 0.5 * 0.5 - y) ** 2;
    return distSq < this.rad ** 2 || distSqLT < this.rad ** 2;
  }

  display(hoveredTile) {
    if (hoveredTile === this) {
      fill(this.col);
    } else {
      noFill();
    }
    // 여기에 꽃을 그리도록 조정
    // rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    ellipse(this.center.x, this.center.y, 2 * this.rad);
    ellipse(
      this.center.x - this.size.x * 0.5 * 0.5,
      this.center.y - this.size.y * 0.5 * 0.5,
      2 * this.rad
    );
  }
}
