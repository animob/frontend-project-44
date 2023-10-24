#!/usr/bin/env node
import getRangeRandomNumber, { roundsCount } from '../../bin/utils.js';
import runGame from '../../bin/common.js';

const commonIsPrimeLogic = (num) => {
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
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    questionAnswerArr[0].push(getRangeRandomNumber(0, 100));
    const result = commonIsPrimeLogic(questionAnswerArr[0][i]);
    questionAnswerArr[1].push(result);
  }

  runGame(textTask, questionAnswerArr);
}

export default runBrainPrime;
