import { getComputerChoice, getWinner } from "./main.js";

const start = document.querySelector(".btn");
const home = document.querySelector(".home");
const gameView = document.querySelector(".hidden");
const inputs = document.querySelectorAll(".choice");
const display = document.querySelector(".display");
const messagebox = document.querySelector(".message");
const heading = document.querySelector("h1");
const body = document.querySelector("body");

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
    <li><span>Player:</span> <span>${userInput}</span></li><br>
    <li><span>Computer:</span> <span>${computerChoice}</span></li>
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
    body.style.backgroundImage =
      "linear-gradient(to right top, rgba(0,0,0,1), rgba(0,0,0,0.6)), url(/image/rockpaper.webp)";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
  }
}

start.addEventListener("click", toGameOverView);
