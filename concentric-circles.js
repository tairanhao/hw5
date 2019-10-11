
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 0; i <= width; i = i + 10) {
    ellipse(height/2, width/2, width-i);
  }
}
