#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame, { roundsCount } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

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

const getRound = () => {
  const num1 = getRangeRandomNumber(0, 100);
  const num2 = getRangeRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const answer = runDivisorLogic(num1, num2);
  return [question, answer];
};

function runBrainGcd() {
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    // Create two random numbers to find divisor
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    questionAnswerArr[0].push(`${num1} ${num2}`);
    const correctAnswer = runDivisorLogic(num1, num2);
    questionAnswerArr[1].push(correctAnswer);
  }

  runGame(task, questionAnswerArr);
}

export default runBrainGcd;
