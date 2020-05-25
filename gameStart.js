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
  levels = 0;
  character.x = width / 2;
}
