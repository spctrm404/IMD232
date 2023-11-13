class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = false;
    this.nextState = this.state;
    this.neighbors = [];
    this.rule = [
      false, //111
      false, //110
      false, //101
      true, //100
      true, //011
      true, //010
      true, //001
      false, //000
    ];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    let binaryString = '';
    binaryString += this.neighbors[0]?.state ? '1' : '0';
    binaryString += this.state ? '1' : '0';
    binaryString += this.neighbors[1]?.state ? '1' : '0';
    const denaryNum = parseInt(binaryString, 2);
    const ruleIdx = 7 - denaryNum;
    this.nextState = this.rule[ruleIdx];
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = !this.state;
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    stroke(this.isHover(mx, my) ? 'red' : 'black');
    fill(this.state ? 255 : 64);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
