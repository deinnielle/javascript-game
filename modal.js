// Start modal
const modalStart = document.querySelector(".modal__start");
const startButton = document.querySelector(".modal__start__button");

// Game over modal
const modalGameOver = document.querySelector("#modal__gameOver");
const gameOverButton = document.querySelector(".modal__gameOver__button");

// Score

function scoreDOM() {
  document.querySelector(".score").innerText = `Score: ${score}`;
}

function gameModals() {
  if (gameState === "START") {
    startModal();
  } else if (gameState === "GAMEOVER") {
    endModal();
  }
}

function startModal() {
  startButton.addEventListener("click", () => {
    gameState = "GAMEON";
    modalStart.style.display = "none";
  });
}

function endModal() {
  let highscore = highScore();

  modalGameOver.classList.remove("modal__gameOver__hidden");
  modalGameOver.classList.add("modal__gameOver");

  if (highscore.length !== 0) {
    document.querySelector(".modal__gameOver__one").innerText = `First: ${
      highscore[0] ? highscore[0] : 0
    }`;
    document.querySelector(".modal__gameOver__two").innerText = `Second: ${
      highscore[1] ? highscore[1] : 0
    }`;
    document.querySelector(".modal__gameOver__three").innerText = `Third: ${
      highscore[2] ? highscore[2] : 0
    }`;
  } else {
    document.querySelector(".modal__gameOver__one").innerText = "No highscore";
  }
  gameOverButton.addEventListener("click", () => {
    modalGameOver.classList.add("modal__gameOver__hidden");
    modalGameOver.classList.remove("modal__gameOver");
    gameState = "GAMEON";
  });
}
