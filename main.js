let bg;
let character;
let bgImage;
let boatImage;
let enemies = [];
// const randomEmenies = Math.floor(Math.random() * 10 + 1);

// runs before setup function
function preload() {
  bgImage = loadImage('/img/bg.jpg');
  boatImage = loadImage('/img/boat.png');
  fishImage = loadImage('/img/fish.jpg');
}

function setup() {
  let myCanvas = createCanvas(1024, 576);
  myCanvas.parent('myContainer');
  character = new Character();
  // enemy = new Enemy();
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

  if (enemies.length !== 0) {
    enemies.forEach(enemy => {
      enemy.show();
      enemy.down();
      enemy.move();
      if (enemy.y > 1500) {
        enemies.splice(enemy, 1);
      }
    });
  }

  if (enemies.length === 0) {
    for (let i = 0; i < randomEmenies(); i++) {
      enemies.push(new Enemy());
    }
  }

  if (keyIsDown('37')) {
    character.left();
  }

  if (keyIsDown('39')) {
    character.right();
  }
}

function randomEmenies() {
  return Math.floor(Math.random() * 8 + 2);
}
