// Start / game on / game over / reset function

// function startGame() {
//   fill(255);
//   textSize(30);
//   textAlign(CENTER);
//   text("WELCOME TO THE PIRATE GAME", width / 2, height / 2);
//   text("PRESS ENTER TO START", width / 2, height / 2 + 20);
// }
function gameOn() {
  character.show();
  character.update();
  platformsDraw();
  sideEnemiesDraw();
  topEnemiesDraw();
  moveCharacter();
  text("SCORE: " + (score - 2), 40, 20);
}

function gameOver() {
  gameState = "GAMEOVER";
  if (score - 2 > 0) {
    sessionStorage.setItem(Date.now(), score - 2);
  }
}

// function gameMode() {
//   if (keyIsDown("13")) {
//     if (gameState === "START") {
//       gameState = "GAMEON";
//     } else if (gameState === "GAMEOVER") {
//       gameState = "GAMEON";
//     }
//   }
// }
function reset() {
  score = 0;
  jumps = [];
  platforms = [];
  sideEnemies = [];
  topEnemies = [];
  character.x = 500;
}

/////////////////////////////////
