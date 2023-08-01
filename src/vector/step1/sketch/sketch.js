let x;
let y;
let originX;
let originY;
let targetX;
let targetY;
let interpolationBegin = 0;
const interpolationDuration = 60 * 1;

function setup() {
  setSketchContainer(3 / 2, 'canvas');

  x = width / 2;
  y = height / 2;
  originX = width / 2;
  originY = height / 2;
  targetX = width / 2;
  targetY = height / 2;

  background(240);
}

function draw() {
  background(240);
  interpolate();
  noStroke();
  fill(0, 0, 255);
  circle(targetX, targetY, 20);
  fill(255, 0, 0);
  circle(x, y, 10);
}

const interpolate = () => {
  // 목표 위치가 정해진 이래 얼마나 많은 시간(프레임)이 지났는가?
  // 이를 정해진 시간으로 나눠 0~1 사이의 값으로 정규화(Normalize)
  const normalizedTime =
    (frameCount - interpolationBegin) / interpolationDuration;
  // 0은 막 시작한 때, 1은 정해진 시간에 도달할 때
  // 따라서 정해진 시간에 도달하기 전까지만 수행
  if (normalizedTime <= 1) {
    // 목표 위치 - 기존 위치 = 이동해야할 거리
    distanceX = targetX - originX;
    distanceY = targetY - originY;
    // 기존 위치 + 이동해야할 거리 * (0~1)
    x = originX + distanceX * normalizedTime;
    y = originY + distanceY * normalizedTime;
  }
};

const setTarget = (tX, tY) => {
  // 기존 위치 저장
  originX = x;
  originY = y;
  // 목표 위치 지정
  targetX = tX;
  targetY = tY;
  // 목표 위치가 정해진 시점(프레임) 저장
  interpolationBegin = frameCount;
};

function mousePressed() {
  setTarget(mouseX, mouseY);
}
