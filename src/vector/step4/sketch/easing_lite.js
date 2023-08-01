const getCubicBezierEasing = (cpAX, cpAY, cpBX, cpBY, t) => {
  const bX = bezierPoint(0, cpAX, cpBX, 1, t);
  const bY = bezierPoint(0, cpAY, cpBY, 1, t);
  return [bX, bY];
};

const getScaledNormal = (input, zero, mult) => {
  return zero + input * mult;
};
