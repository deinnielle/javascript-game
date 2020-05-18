let character;
let platform;
let bgImage;
let boatImage;
let pirate;
let fire;
let topEnemies = [];
let sideEnemies = [];
const sideEnemyRandomYPosition = [-50, 1074];
let platforms = [];
const platformRandomXPosition = [100, 100, 100, 100, 100];
// const platformRandomXPosition = [100, 300, 500, 700, 900];
// const platformRandomYPosition = [450, 350, 250, 150];
const platformRandomYPosition = [300, 300, 300, 300];
const distanceEnemies = 30;
const distancePlatforms = 40;

function preload() {
  bgImage = loadImage('/img/bg.jpg');
  boatImage = loadImage('/img/boat.png');
  pirate = loadImage('/img/pirate.png');
  fire = loadImage('/img/fire.gif');
}

function setup() {
  let myCanvas = createCanvas(1024, 576);
  myCanvas.parent('myContainer');
  character = new Character();
}

function draw() {
  background(bgImage);
  character.show();
  character.move();
  platformsDraw();
  sideEnemiesDraw();
  topEnemiesDraw();
  moveCharacter();
}

function platformsDraw() {
  if (platforms.length === 0) {
    for (let i = 0; i < randomObjects(); i++) {
      let platformXPosition = Math.floor(Math.random() * 4);
      let platformYPosition = Math.floor(Math.random() * 3);
      platforms.push(
        new Platform(
          platformRandomXPosition[platformXPosition],
          platformRandomYPosition[platformYPosition]
        )
      );
    }
  }

  if (platforms.length !== 0) {
    for (let i = 0; i < platforms.length; i++) {
      platforms[i].show();
      if (
        Math.abs(character.y - platforms[i].y) < distancePlatforms &&
        Math.abs(character.x - platforms[i].x) < distancePlatforms
      ) {
        character.stop(platforms[i].y);
      } else {
        character.resetGravity();
      }
    }
  }
}

function keyPressed() {
  if (keyIsDown('38')) {
    character.jump();
  }
}

function moveCharacter() {
  if (keyIsDown('37')) {
    character.left();
  }

  if (keyIsDown('39')) {
    character.right();
  }
}

function topEnemiesDraw() {
  if (topEnemies.length === 0) {
    for (let i = 0; i < randomObjects(); i++) {
      topEnemies.push(new TopEnemy());
    }
  }

  if (topEnemies.length !== 0) {
    for (let i = 0; i < topEnemies.length; i++) {
      topEnemies[i].show();
      topEnemies[i].down();

      if (
        Math.abs(topEnemies[i].y - character.y) < distanceEnemies &&
        Math.abs(topEnemies[i].x - character.x) < distanceEnemies
      ) {
        gameOver();
      }

      if (topEnemies[i].y > 700) {
        topEnemies.splice(i, 1);
      }
    }
  }
}

function sideEnemiesDraw() {
  if (sideEnemies.length === 0) {
    for (let i = 0; i < randomObjects(); i++) {
      let direction = Math.floor(Math.random() * 2);
      sideEnemies.push(
        new SideEnemy(sideEnemyRandomYPosition[direction], direction)
      );
    }
  }

  if (sideEnemies.length !== 0) {
    for (let i = 0; i < sideEnemies.length; i++) {
      sideEnemies[i].show();

      if (sideEnemies[i].direction === 0) {
        sideEnemies[i].right();
      } else {
        sideEnemies[i].left();
      }

      if (
        Math.abs(sideEnemies[i].y - character.y) < distanceEnemies &&
        Math.abs(sideEnemies[i].x - character.x) < distanceEnemies
      ) {
        gameOver();
      }

      if (sideEnemies[i].direction === 0 && sideEnemies[i].x > 1100) {
        sideEnemies.splice(i, 1);
      } else if (sideEnemies[i].direction === 1 && sideEnemies[i].x < -100) {
        sideEnemies.splice(i, 1);
      }
    }
  }
}

function randomObjects() {
  return Math.floor(Math.random() * 8 + 2);
}

function gameOver() {
  noLoop();
}
