// Start modal
const modalStart = document.querySelector(".modal__start");
const startButton = document.querySelector(".modal__start__button");

// Game over modal
const modalGameOver = document.querySelector("#modal__gameOver");
const gameOverButton = document.querySelector(".modal__gameOver__button");
let roundScore = highScore();

const gameModals = () => {
  if (gameState === "START") {
    startModal();
  } else if (gameState === "GAMEOVER") {
    endModal();
  }
};

const startModal = () => {
  startButton.addEventListener("click", () => {
    gameState = "GAMEON";
    modalStart.style.display = "none";
  });
};

const endModal = () => {
  modalGameOver.classList.remove("modal__gameOver__hidden");
  modalGameOver.classList.add("modal__gameOver");
  if (roundScore !== undefined) {
    document.querySelector(
      ".modal__gameOver__one"
    ).innerText = `First: ${roundScore[0]}`;
    document.querySelector(
      ".modal__gameOver__two"
    ).innerText = `Second: ${roundScore[1]}`;
    document.querySelector(
      ".modal__gameOver__three"
    ).innerText = `Third: ${roundScore[2]}`;
  } else {
    document.querySelector(".modal__gameOver__one").innerText = "No highscore";
  }
  gameOverButton.addEventListener("click", () => {
    modalGameOver.classList.add("modal__gameOver__hidden");
    modalGameOver.classList.remove("modal__gameOver");
    gameState = "GAMEON";
  });
};
