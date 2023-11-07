const rule = new WolframCA();

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  background('white');
}

function draw() {
  background('white');
  for (let ruleIdx = 0; ruleIdx < 8; ruleIdx++) {
    rule.displayARule(ruleIdx, 80 * ruleIdx, 0, 20);
  }
}
