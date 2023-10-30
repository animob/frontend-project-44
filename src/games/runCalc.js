#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame, { roundsCount } from '../index.js';

const signs = ['+', '-', '*'];
const textTask = 'What is the result of the expression?';

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
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    // Create random sign for calculator
    const randomIndex = Math.round(Math.random() * (signs.length - 1));
    const randomSign = signs[randomIndex];

    questionAnswerArr[0].push(`${num1} ${randomSign} ${num2}`);
    const correctAnswer = calculate(num1, num2, randomSign);
    questionAnswerArr[1].push(correctAnswer);
  }

  runGame(textTask, questionAnswerArr);
}

export default runBrainCalc;
