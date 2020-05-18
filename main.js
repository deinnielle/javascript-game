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
// this.x = 500;
// this.y = 450;
// const platformRandomXPosition = [500, 500, 500, 500, 500];
const platformRandomXPosition = [100, 300, 500];
const platformRandomYPosition = [450, 350, 250];
// const platformRandomYPosition = [450, 450, 450, 450];
const distanceEnemies = 30;
const distancePlatforms = 30;
let onPlatform = false;
let currentPlatform;

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
  // sideEnemiesDraw();
  // topEnemiesDraw();
  moveCharacter();
}

function platformsDraw() {
  if (platforms.length === 0) {
    for (let i = 0; i < 4; i++) {
      // let platformXPosition = Math.floor(Math.random() * 4);
      // let platformYPosition = Math.floor(Math.random() * 3);
      platforms.push(
        new Platform(platformRandomXPosition[i], platformRandomYPosition[i])
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
        currentPlatform = platforms[i];
        onPlatform = true;
        // console.log(
        //   Math.abs(character.y - currentPlatform.y) > 40 &&
        //     Math.abs(character.x - currentPlatform.x) > 40
        // );
      }
      // } else {
      //   character.resetGravity();
      // }
    }

    if (onPlatform) {
      if (
        Math.abs(character.y - currentPlatform.y) > distancePlatforms &&
        Math.abs(character.x - currentPlatform.x) > distancePlatforms
      ) {
        console.log(currentPlatform.x);

        character.resetGravity();
        onPlatform = false;
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
