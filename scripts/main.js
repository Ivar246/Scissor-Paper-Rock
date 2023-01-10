import { mapper } from "./query.js";

const { Rock, Paper, Scissor } = mapper;

export const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) return Rock;
  else if (randomValue < 0.67) return Paper;
  return Scissor;
};

export const getWinner = function (c, p) {
  return c === p
    ? "draw"
    : (p === Rock && c === Scissor) ||
      (p === Paper && c === Rock) ||
      (p === Scissor && c === Paper)
    ? "player"
    : "computer";
};
