let character;
let platform;
let bgImage;
let boatImageRight;
let boatImageLeft;
let pirate;
let fire;
let gem;
let platformImg;
let topEnemies = [];
let sideEnemies = [];
let platforms = [];
let score = 0;
let jumps = [];
let gameState = "START";
let levels = 0;
let activeGem;
const sideEnemyRandomYPosition = [-50, 1074];
const platformRandomXPosition = [100, 300, 500, 700, 800, 900];
const platformRandomYPosition = [400, 300, 200, 100];
const distanceEnemies = 30;
const distancePlatforms = 43;

function preload() {
  bgImage = loadImage("/img/bg.jpg");
  boatImageRight = loadImage("/img/boat-right.png");
  boatImageLeft = loadImage("/img/boat-left.png");
  pirate = loadImage("/img/pirate.png");
  fire = loadImage("/img/attack.gif");
  platformImg = loadImage("/img/brown_rock.png");
  bgImage = loadImage("/img/bg.jpg");
  boatImage = loadImage("/img/boat.png");
  pirate = loadImage("/img/pirate.png");
  fire = loadImage("/img/attack.gif");
  platformImg = loadImage("/img/brown_rock.png");
  gem = loadImage("/img/gem.gif");
}

function setup() {
  let myCanvas = createCanvas(1024, 576);
  myCanvas.parent("myContainer");
  character = new Character();
}

function draw() {
  background(bgImage);
  gameModals();

  if (gameState == "GAMEON") {
    gameOn();
  }

  if (gameState == "GAMEOVER") {
    gameOver();
    reset();
  }
}

///////////////////////// Move functions
function keyPressed() {
  if (keyIsDown("38")) {
    if (jumps.length <= 2) {
      character.jump();
      jumps.push(1);
    } else {
      jumps = [];
    }
  }
}

function moveCharacter() {
  if (keyIsDown("37")) {
    character.left();
    jumps = [];
  }

  if (keyIsDown("39")) {
    character.right();
    jumps = [];
  }
}

///////////////////////// Platforms

function platformsDraw() {
  if (platforms.length === 0) {
    for (let i = 0; i < randomObjects(); i++) {
      let platformXPosition = Math.floor(Math.random() * 5);
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
        character.stop(platforms[i].y - distancePlatforms);
      }
    }
  }
}

function keyPressed() {
  if (keyIsDown("38")) {
    if (jumps.length <= 2) {
      character.jump();
      jumps.push(1);
    } else {
      jumps = [];
    }
  }
}

function moveCharacter() {
  if (keyIsDown("37")) {
    character.left(boatImageLeft);
    jumps = [];
  }

  if (keyIsDown("39")) {
    character.right(boatImageRight);
    jumps = [];
  }
}

function sideEnemiesDraw() {
  if (sideEnemies.length === 0) {
    for (let i = 0; i < randomObjects(); i++) {
      let direction = Math.floor(Math.random() * 2);
      sideEnemies.push(
        new SideEnemy(sideEnemyRandomYPosition[direction], direction, levels)
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

function topEnemiesDraw() {
  if (topEnemies.length === 0) {
    levels++;
    for (let i = 0; i < randomObjects(); i++) {
      topEnemies.push(new TopEnemy(levels));
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

function randomObjects() {
  return Math.floor(Math.random() * 8 + 2);
}

///////////////////////// Gem functions
function randomGem() {
  let x = 30 + Math.floor(Math.random() * 940);
  let y = 200 + Math.floor(Math.random() * 310);

  for (let i = 0; i < platforms.length; i++) {
    if (
      Math.abs(y - platforms[i].y) < distanceEnemies &&
      Math.abs(x - platforms[i].x) < distanceEnemies
    ) {
      x = x + 50;
      y = y + 50;
    }
  }

  if (activeGem === undefined) {
    activeGem = new Gem(x, y);
  }
}

function gemTaken() {
  randomGem();
  if (activeGem !== undefined) {
    activeGem.show();
    if (
      Math.abs(activeGem.y - character.y) < distanceEnemies &&
      Math.abs(activeGem.x - character.x) < distanceEnemies
    ) {
      score++;
      activeGem = undefined;
      randomGem();
    }
  }
}

function highScore() {
  let sessionStorageSorted = [];
  if (sessionStorage.length !== 0) {
    for (let i = 0; i < sessionStorage.length; i++) {
      sessionStorageSorted[i] = sessionStorage.getItem(sessionStorage.key(i));
    }
    return sessionStorageSorted
      .sort((a, b) => {
        return b - a;
      })
      .splice(0, 3);
  } else {
    return sessionStorageSorted;
  }
}
