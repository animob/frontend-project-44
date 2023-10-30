#!/usr/bin/env node
import runGame, { roundsCount } from '../index.js';
import analyzeOneNumber from '../common.js';

const runIsPrimeLogic = (num) => {
  let isPrime = true;
  let correctAnswer = '';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

function runBrainPrime() {
  const textTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionAnswerArr = analyzeOneNumber(runIsPrimeLogic, roundsCount);

  runGame(textTask, questionAnswerArr);
}

export default runBrainPrime;
