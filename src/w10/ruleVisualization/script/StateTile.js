class StateTile {
  constructor(c, r, colTotal, rowTotal, isClickable = true) {
    this.colTotal = colTotal;
    this.rowTotal = rowTotal;
    this.col = c;
    this.row = r;
    this.isClickable = isClickable;
    this.state = false;
  }

  getW() {
    return width / this.colTotal;
  }

  getH() {
    return height / this.rowTotal;
  }

  getX() {
    return this.getW() * this.col;
  }

  getY() {
    return this.getH() * this.row;
  }

  isHover(mx, my) {
    return (
      this.getX() < mx &&
      this.getX() + this.getW() > mx &&
      this.getY() < my &&
      this.getY() + this.getH() > my
    );
  }

  mouseClicked(mx, my) {
    if (!this.isClickable) return;
    if (!this.isHover(mx, my)) return;
    this.state = !this.state;
  }

  display(mx, my) {
    push();
    translate(this.getX(), this.getY());
    stroke(this.isHover(mx, my) ? 'red' : 'black');
    fill(this.state ? 255 : 64);
    rect(0, 0, this.getW(), this.getH());
    pop();
  }
}
