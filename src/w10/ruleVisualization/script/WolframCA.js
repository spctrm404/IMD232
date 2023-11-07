class WolframCA {
  constructor() {
    this.rule = {
      0: false, // 000
      1: true, // 001
      2: true, // 010
      3: true, // 011
      4: true, // 100
      5: true, // 101
      6: true, // 110
      7: true, // 111
    };
  }

  convBoolsToInt(booleans) {
    let sum;
    booleans.forEach((eachDigit, idx) => {
      sum += eachDigit ? 2 ** idx : 0;
    });
    return sum;
  }

  convIntToBools(int) {
    const binaryString = int.toString(2);
    const booleans = [];
    for (let idx = 0; idx < binaryString.length; idx++)
      booleans.unshift(binaryString.charAt(idx) === '1');
    return booleans;
  }

  displayARule(ruleIdx, x, y, tileSize) {
    const booleans = this.convIntToBools(ruleIdx);
    for (let idx = 0; idx < 3; idx++) {
      const tileX = tileSize * idx + x;
      let tileY = y;
      push();
      translate(tileX, tileY);
      stroke(0);
      fill(booleans[idx] ? 255 : 64);
      rect(0, 0, tileSize);
      pop();
      if (idx === 1) {
        tileY += tileSize;
        push();
        translate(tileX, tileY);
        stroke(0);
        fill(this.rule[ruleIdx] ? 255 : 64);
        rect(0, 0, tileSize);
        pop();
      }
    }
  }
}
