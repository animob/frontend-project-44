#!/usr/bin/env node
import getRangeRandomNumber, { roundsCount } from '../utils.js';
import runGame from '../common.js';

const mathCalculator = (num1, num2, randomSign, name) => {
  let result = 0;

  switch (randomSign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log(`Let's try again, ${name}!`);
  }

  return result;
};

function runBrainCalc() {
  const textTask = 'What is the result of the expression?';
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    // Create random sign for calculator
    const signs = ['+', '-', '*'];
    const randomIndex = Math.round(Math.random() * (signs.length - 1));
    const randomSign = signs[randomIndex];

    questionAnswerArr[0].push(`${num1} ${randomSign} ${num2}`);
    const correctAnswer = mathCalculator(num1, num2, randomSign);
    questionAnswerArr[1].push(correctAnswer);
  }

  runGame(textTask, questionAnswerArr);
}

export default runBrainCalc;
