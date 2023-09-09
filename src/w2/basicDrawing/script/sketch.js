function setup() {
  setCanvasContainer('p5GoesHere', 3, 2, true);
  ellipseMode(CENTER);
}

function draw() {
  background(255);

  strokeWeight(1);
  stroke(0);
  rectMode(CORNER);

  rect(100, 100, 50, 50);
  ellipse(100, 100, 50, 50);
  rect(200, 100, 25, 50);
  ellipse(300, 100, 50, 25);

  rectMode(CENTER);
  rect(400, 100, 25, 50);
  ellipse(400, 100, 50, 25);
  circle(100, 200, 50);
  square(200, 200, 50);
  square(300, 200, 50, 15);
  square(400, 200, 50, 0, 5, 10, 15);

  rect(100, 300, 50);
  rect(200, 300, 50, 30, 10);
  rect(300, 300, 50, 30, 0, 5, 10, 15);
  line(100, 400, 150, 450);

  stroke(255, 0, 0);
  line(200, 400, 250, 400);
  stroke('#00ff00');
  line(250, 400, 250, 450);
  stroke('cornflowerblue');
  line(250, 450, 200, 450);

  stroke(255, 0, 0);
  strokeWeight(2);
  point(300, 400);
  point(310, 400);
  point(320, 400);
  point(330, 400);
  point(340, 400);
  point(350, 400);
  strokeWeight(3);
  stroke(255, 0, 50);
  point(300, 410);
  point(310, 410);
  point(320, 410);
  point(330, 410);
  point(340, 410);
  point(350, 410);
  strokeWeight(4);
  stroke(255, 0, 100);
  point(300, 420);
  point(310, 420);
  point(320, 420);
  point(330, 420);
  point(340, 420);
  point(350, 420);
  strokeWeight(5);
  stroke(255, 0, 150);
  point(300, 430);
  point(310, 430);
  point(320, 430);
  point(330, 430);
  point(340, 430);
  point(350, 430);
  strokeWeight(6);
  stroke(255, 0, 200);
  point(300, 440);
  point(310, 440);
  point(320, 440);
  point(330, 440);
  point(340, 440);
  point(350, 440);
  strokeWeight(7);
  stroke(255, 0, 250);
  point(300, 450);
  point(310, 450);
  point(320, 450);
  point(330, 450);
  point(340, 450);
  point(350, 450);
}
