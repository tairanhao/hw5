function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  for (var i = 10; i <= width; i = i + 10) {
    line(width/2, 0, i, width);
  }
}
