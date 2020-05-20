// Start / game on / game over / reset function

function startGame() {
  fill(255);
  textAlign(CENTER);
  text("WELCOME TO THE PIRATE GAME", width / 2, height / 2);
  text("PRESS ENTER TO START", width / 2, height / 2 + 20);
}
function gameOn() {
  character.show();
  character.update();
  platformsDraw();
  sideEnemiesDraw();
  topEnemiesDraw();
  moveCharacter();
  console.log(`Score: ${score - 2}`);
}

function gameOver() {
  gameState = "GAMEOVER";
  fill(255);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  text("PRESS ENTER TO START", width / 2, height / 2 + 20);
}

function gameMode() {
  if (keyIsDown("13")) {
    if (gameState === "START") {
      gameState = "GAMEON";
    } else if (gameState === "GAMEOVER") {
      gameState = "GAMEON";
    }
  }
}
function reset() {
  score = 0;
  jumps = [];
  platforms = [];
  sideEnemies = [];
  topEnemies = [];
  character.x = 500;
}

/////////////////////////////////
