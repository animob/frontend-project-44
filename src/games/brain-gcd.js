#!/usr/bin/env node
import getRangeRandomNumber, { roundsCount } from '../../bin/utils.js';
import runGame from '../../bin/common.js';

const commonDivisorLogic = (num1, num2) => {
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
  const questionArr = [];
  const correctAnswerArr = [];

  for (let i = 0; i < roundsCount; i += 1) {
    // Create two random numbers to find divisor
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    questionArr.push(`${num1} ${num2}`);
    const correctAnswer = commonDivisorLogic(num1, num2);
    correctAnswerArr.push(correctAnswer);
  }

  runGame(textTask, questionArr, correctAnswerArr);
}

export default runBrainGcd;
