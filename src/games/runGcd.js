#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame, { roundsCount } from '../index.js';

const runDivisorLogic = (num1, num2) => {
  let commonDivisor = 1;
  let result = 1;

  while (commonDivisor <= num1 || commonDivisor <= num2) {
    if (num1 % commonDivisor === 0 && num2 % commonDivisor === 0) {
      result = commonDivisor;
    }
    commonDivisor += 1;
  }

  return result;
};

function runBrainGcd() {
  const textTask = 'Find the greatest common divisor of given numbers.';
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    // Create two random numbers to find divisor
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    questionAnswerArr[0].push(`${num1} ${num2}`);
    const correctAnswer = runDivisorLogic(num1, num2);
    questionAnswerArr[1].push(correctAnswer);
  }

  runGame(textTask, questionAnswerArr);
}

export default runBrainGcd;
