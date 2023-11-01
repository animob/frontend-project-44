#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame from '../index.js';

const signs = ['+', '-', '*'];
const task = 'What is the result of the expression?';

const calculate = (num1, num2, randomSign) => {
  switch (randomSign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Something wrong with the game. Please, choose another game!';
  }
};

const getRound = () => {
  const num1 = getRangeRandomNumber(0, 100);
  const num2 = getRangeRandomNumber(0, 100);
  const index = getRangeRandomNumber(0, signs.length - 1);
  const sign = signs[index];
  const question = `${num1} ${sign} ${num2}`;
  const answer = calculate(num1, num2, sign);
  return [question, answer];
};

function runBrainCalc() {
  runGame(task, getRound);
}

export default runBrainCalc;
