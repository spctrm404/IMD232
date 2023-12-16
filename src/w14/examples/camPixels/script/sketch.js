let cam;

function setup() {
  setCanvasContainer('canvas', 4, 3, true);

  const constraints = {
    video: {
      width: { exact: 320 },
      height: { exact: 240 },
    },
    audio: false,
  };
  //   let constraints = {
  //     video: {
  //       mandatory: {
  //         minWidth: 1280,
  //         minHeight: 720,
  //       },
  //       optional: [{ maxFrameRate: 10 }],
  //     },
  //     audio: false,
  //   };
  cam = createCapture(constraints);
  cam.hide();

  background('white');
}

function draw() {
  background('white');
  captureDot();
  //   captureIR();
  //   captureMagnify();
}

function captureDot() {
  cam.loadPixels();
  noStroke();
  fill('black');
  for (let y = 5; y < cam.height; y += 10) {
    for (let x = 5; x < cam.width; x += 10) {
      const pixelIdx = 4 * (cam.width * y + x);
      const r = cam.pixels[pixelIdx + 0];
      const g = cam.pixels[pixelIdx + 1];
      const b = cam.pixels[pixelIdx + 2];
      const a = cam.pixels[pixelIdx + 3];
      const pixelColor = color(r, g, b);
      const pixelBrightness = brightness(pixelColor);
      const canvasX = map(x, 0, cam.width - 1, 0, width - 1);
      const canvasY = map(y, 0, cam.height - 1, 0, height - 1);
      const ratio = width / cam.width;
      ellipse(canvasX, canvasY, ratio * (10 - (10 * pixelBrightness) / 255));
    }
  }
}

function captureIR() {
  cam.loadPixels();
  noStroke();
  colorMode(HSL, 360, 100, 100, 100);
  let pixelBrightnessMax = 0;
  let pixelBrightnessMin = 255;
  for (let y = 0; y < cam.height; y += 4) {
    for (let x = 0; x < cam.width; x += 4) {
      const pixelIdx = 4 * (cam.width * y + x);
      const r = cam.pixels[pixelIdx + 0];
      const g = cam.pixels[pixelIdx + 1];
      const b = cam.pixels[pixelIdx + 2];
      const a = cam.pixels[pixelIdx + 3];
      const pixelColor = color(r, g, b);
      const pixelBrightness = brightness(pixelColor);
      pixelBrightnessMax = max(pixelBrightnessMax, pixelBrightness);
      pixelBrightnessMin = min(pixelBrightnessMin, pixelBrightness);
    }
  }
  for (let y = 0; y < cam.height; y += 4) {
    for (let x = 0; x < cam.width; x += 4) {
      const pixelIdx = 4 * (cam.width * y + x);
      const r = cam.pixels[pixelIdx + 0];
      const g = cam.pixels[pixelIdx + 1];
      const b = cam.pixels[pixelIdx + 2];
      const a = cam.pixels[pixelIdx + 3];
      const pixelColor = color(r, g, b);
      const pixelBrightness = brightness(pixelColor);
      const fillHue = map(
        pixelBrightness,
        pixelBrightnessMin,
        pixelBrightnessMax,
        270,
        0
      );
      const canvasX = map(x, 0, cam.width - 1, 0, width - 1);
      const canvasY = map(y, 0, cam.height - 1, 0, height - 1);
      const ratio = width / cam.width;
      const colorText = 'hsl(' + fillHue + ', 100%, 50%)';
      const fillColor = color(colorText);
      fill(fillHue, 100, 50);
      rect(canvasX, canvasY, ratio * 4);
    }
  }
}

function captureMagnify() {
  image(cam, 0, 0, width, height);
  const coordRatio = cam.width / width;
  const beginX = floor(mouseX * coordRatio) - 20;
  const beginY = floor(mouseY * coordRatio) - 20;
  cam.loadPixels();
  noStroke();
  fill('black');
  let coordY = 0;
  for (let y = beginY; y < beginY + 20; y += 1) {
    let coordX = 0;
    for (let x = beginX; x < beginX + 20; x += 1) {
      const pixelIdx = 4 * (cam.width * y + x);
      const r = cam.pixels[pixelIdx + 0];
      const g = cam.pixels[pixelIdx + 1];
      const b = cam.pixels[pixelIdx + 2];
      const a = cam.pixels[pixelIdx + 3];
      const pixelColor = color(r, g, b);
      const ratio = width / cam.width;
      fill(pixelColor);
      rect(mouseX + coordX - 100, mouseY + coordY - 100, 10);
      coordX += 10;
    }
    coordY += 10;
  }
}
