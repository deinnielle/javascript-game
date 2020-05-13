let bg;
let character;
let platform;
let bgImage;
let boatImage;
let enemies = [];
let sideEnemies = [];
const sideEnemyPosition = [-50, 1074];
const distance = 30;

function preload() {
  bgImage = loadImage("/img/bg.jpg");
  boatImage = loadImage("/img/boat.png");
  pirate = loadImage("/img/pirate.png");
  fire = loadImage("/img/fire.gif");
}

function setup() {
  let myCanvas = createCanvas(1024, 576);
  myCanvas.parent("myContainer");
  character = new Character();
  platform = new Platform();
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
  platform.show();

  if (
    Math.abs(character.y - platform.y) < distance &&
    Math.abs(character.x - platform.x) < distance
  ) {
    character.stop(platform.y);
  } else {
    character.setGravity();
  }

  // if (enemies.length === 0) {
  //   for (let i = 0; i < randomEmenies(); i++) {
  //     enemies.push(new TopEnemy());
  //   }
  // }

  // if (sideEnemies.length === 0) {
  //   for (let i = 0; i < randomEmenies(); i++) {
  //     let position = Math.floor(Math.random() * 2);
  //     sideEnemies.push(new SideEnemy(sideEnemyPosition[position], position));
  //   }
  // }

  // if (enemies.length !== 0) {
  //   for (let i = 0; i < enemies.length; i++) {
  //     enemies[i].show();
  //     enemies[i].down();

  //     if (
  //       Math.abs(enemies[i].y - character.y) < distance &&
  //       Math.abs(enemies[i].x - character.x) < distance
  //     ) {
  //       gameOver();
  //     }

  //     if (enemies[i].y > 700) {
  //       enemies.splice(i, 1);
  //     }
  //   }
  // }

  // if (sideEnemies.length !== 0) {
  //   for (let i = 0; i < sideEnemies.length; i++) {
  //     sideEnemies[i].show();

  //     if (sideEnemies[i].direction === 0) {
  //       sideEnemies[i].right();
  //     } else {
  //       sideEnemies[i].left();
  //     }

  //     if (
  //       Math.abs(sideEnemies[i].y - character.y) < distance &&
  //       Math.abs(sideEnemies[i].x - character.x) < distance
  //     ) {
  //       gameOver();
  //     }

  //     if (sideEnemies[i].direction === 0 && sideEnemies[i].x > 1100) {
  //       sideEnemies.splice(i, 1);
  //     } else if (sideEnemies[i].direction === 1 && sideEnemies[i].x < -100) {
  //       sideEnemies.splice(i, 1);
  //     }
  //   }
  // }

  if (keyIsDown("37")) {
    character.left();
  }

  if (keyIsDown("39")) {
    character.right();
  }
}

function randomEmenies() {
  return Math.floor(Math.random() * 8 + 2);
}

function gameOver() {
  noLoop();
}
