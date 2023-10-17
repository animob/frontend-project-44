#!/usr/bin/env node
import getRangeRandomNumber from '../../bin/utils.js';
import successCondition, {
  greet, writeTask, getReply, checkAnswer,
} from '../../bin/common.js';

const commonIsPrimeLogic = (digit) => {
  let isPrime = true;
  let correctAnswer = '';

  for (let i = 2; i < digit; i += 1) {
    if (digit % i === 0) {
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

function brainPrime() {
  const name = greet();
  let correctAnswers = 0;

  writeTask('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (correctAnswers < 3) {
    const digit = getRangeRandomNumber(0, 100);

    console.log(`Question: ${digit}`);

    const correctAnswer = commonIsPrimeLogic(digit);
    const reply = getReply();
    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === reply) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  successCondition(correctAnswers, name);
}

export default brainPrime;
