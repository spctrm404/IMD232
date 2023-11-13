function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  background('white');

  //   noLoop();
}

function draw() {
  background('white');
  // sierpinskiRect(width / 2, height / 2, width, 6);
  tree(width / 2, height, radians(-90), 200, 12);
  console.log('done');
}

function sierpinskiRect(x, y, size, level) {
  noStroke();
  fill('black');
  rectMode(CENTER);
  rect(x, y, size / 3);
  //   if (level > 1) {
  if (size >= 6) {
    level = level - 1;
    size = size / 3;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (row === 1 && col === 1) {
        } else {
          const newX = x - size + size * col;
          const newY = y - size + size * row;
          sierpinskiRect(newX, newY, size, level);
        }
      }
    }
  }
}

function tree(x, y, angle, length, level) {
  const endX = x + length * cos(angle);
  const endY = y + length * sin(angle);
  noFill();
  stroke(0);
  line(x, y, endX, endY);
  if (level > 1) {
    level = level - 1;
    for (let n = 0; n < 2; n++) {
      const newLength = (length / 3) * 2;
      const newAngle =
        angle -
        radians((mouseX / width) * 90) +
        radians((mouseX / width) * 180) * n;
      tree(endX, endY, newAngle, newLength, level);
    }
  }
}
