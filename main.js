let bg;
let character;
let bgImage;
let boatImage;

// runs before setup function
function preload() {
  bgImage = loadImage("/img/bg.jpg");
  boatImage = loadImage("/img/boat.png");
}

function setup() {
  let myCanvas = createCanvas(1024, 576);
  myCanvas.parent("myContainer");
  character = new Character();
}

function keyPressed() {
  if (keyCode == 38) {
    character.jump();
  }
}

function draw() {
  background(bgImage);
  character.show();
  character.move();
  if (keyIsDown("37")) {
    character.left();
  }

  if (keyIsDown("39")) {
    character.right();
  }
}
