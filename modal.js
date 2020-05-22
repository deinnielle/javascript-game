// Start modal
const modalStart = document.querySelector(".modal__start");
const startButton = document.querySelector(".modal__start__button");

// Game over modal
const modalGameOver = document.querySelector("#modal__gameOver");
const gameOverButton = document.querySelector(".modal__gameOver__button");

const gameModals = () => {
  if (gameState === "START") {
    startButton.addEventListener("click", () => {
      gameState = "GAMEON";
      modalStart.style.display = "none";
    });
  } else if (gameState === "GAMEOVER") {
    modalGameOver.classList.remove("modal__gameOver__hidden");
    modalGameOver.classList.add("modal__gameOver");

    gameOverButton.addEventListener("click", () => {
      modalGameOver.classList.add("modal__gameOver__hidden");
      modalGameOver.classList.remove("modal__gameOver");
      gameState = "GAMEON";
    });
  }
};
