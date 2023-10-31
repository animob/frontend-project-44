#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame, { roundsCount } from '../index.js';
import analyzeOneNumber from '../common.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getRound = () => {
  const num = getRangeRandomNumber(0, 100);
  const question = `${num}`;
  const answer = runIsPrimeLogic(num);
  return [question, answer];
};

function runBrainPrime() {
  const questionAnswerArr = analyzeOneNumber(runIsPrimeLogic, roundsCount);

  runGame(task, questionAnswerArr);
}

export default runBrainPrime;
