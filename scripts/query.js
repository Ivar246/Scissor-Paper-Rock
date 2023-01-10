import { getComputerChoice, getWinner } from "./main.js";

const start = document.querySelector(".btn");
const home = document.querySelector(".home");
const gameView = document.querySelector(".hidden");
const inputs = document.querySelectorAll(".choice");
const display = document.querySelector(".display");
const messagebox = document.querySelector(".message");
const heading = document.querySelector("h1");

export const mapper = {
  Rock: "R",
  Scissor: "S",
  Paper: "P",
};

inputs.forEach((el) => {
  el.addEventListener("mousedown", (e) => {
    let userInput = e.target.value;
    let computerChoice = getComputerChoice();
    let winner = getWinner(computerChoice, userInput);
    let message;
    if (userInput === computerChoice) message = "Draw";
    else message = `${winner === "player" ? "You" : winner} won the game.`;
    display.innerHTML = `
    <li>Player: ${userInput}</li>
    <li>Computer: ${computerChoice}</li>
    `;
    messagebox.innerText = message;
    el.classList.add("click");
  });
  el.addEventListener("mouseup", () => el.classList.remove("click"));
});

function toGameOverView() {
  if (home.classList.contains("home")) {
    home.classList.remove("home");
    home.classList.add("hidden");
    gameView.classList.add("game-view");
    heading.innerText = "Let's Play";
  }
}

start.addEventListener("click", toGameOverView);