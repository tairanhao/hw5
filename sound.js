// Sounds Credits
// https://freesound.org/people/cdonahueucsd/sounds/337133/
// https://freesound.org/people/iFrosta/sounds/269583/
// https://freesound.org/people/Avaruusnuija/sounds/476598/
// https://freesound.org/people/murraysortz/sounds/192501/
var sound1;
var sound2;
var sound3;
var sound4;

function preload(){
     soundFormats("wav");
  sound1 = loadSound("1.wav");
  sound2 = loadSound("2.wav");
  sound4 = loadSound("4.wav");
}

function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(255, 255, 255);
  noStroke()

  // Red square
   if (mouseIsPressed && mouseX > 20 && mouseX < 220 && mouseY > 100 && mouseY < 290) {
    sound1.play();
  }
  
  fill(230,10,100);
  rect(20, 100, 220, 190);
 
  // Blue square
   if (mouseIsPressed && mouseX > 320 && mouseX < 400 && mouseY > 210 && mouseY < 320) {
    sound2.play();
  }

  fill(0,90,230);
  rect(320, 210, 100, 110);

  // green square
  if (mouseIsPressed && mouseX > 370 && mouseX < 400 && mouseY > 360 && mouseY < 400) {
    sound4.play();
  }
  fill(25, 140, 0);
  rect(370, 360, 30, 40);

  if (mouseIsPressed && mouseX > 290 && mouseX < 390 && mouseY > 30 && mouseY < 130) {
    sound4.play();
  }
  fill(255, 100, 0);
  rect(290, 30, 100, 100);


  stroke(0);
  strokeWeight(10);
  line(20, 0, 20, 400); // left line  
  line(0, 100, 290, 100); // middle line

  strokeWeight(10);
  line(320, 320, 400, 320); // right line

  line(370, 320, 370, 400); // right line

  strokeWeight(15);
  line(240, 100, 240, 290); // right line

  strokeWeight(10);
  line(365, 360, 400, 360); // bottom

  strokeWeight(15);
  line(20, 30, 390, 30); // top

  strokeWeight(11);
  line(20, 290, 320, 290); // top
  line(315, 130, 315, 325); // top
  line(315, 210, 400, 210); // top

  strokeWeight(28);
  line(400, 0, 400, 210); // top

  strokeWeight(14);
  line(290, 130, 400, 130); // top
  line(290, 25, 290, 137); // top

}
