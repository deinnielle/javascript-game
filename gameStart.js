// Start / game on / game over / reset function
function gameOn() {
  character.show();
  character.update();
  platformsDraw();
  sideEnemiesDraw();
  topEnemiesDraw();
  moveCharacter();
  scoreDOM();
  gemTaken();
}

function gameOver() {
  gameState = "GAMEOVER";
  if (score > 0) {
    console.log(score);

    sessionStorage.setItem(Date.now(), score);
  }
  score = 0;
}

function reset() {
  score = 0;
  jumps = [];
  platforms = [];
  sideEnemies = [];
  topEnemies = [];
  character.x = width / 2;
}
