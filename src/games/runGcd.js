#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame from '../index.js';

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
  runGame(task, getRound);
}

export default runBrainGcd;
