#!/usr/bin/env node
import getRangeRandomNumber from '../../bin/utils.js';
import successCondition, {
  greet, writeTask, getReply, commonIsPrimeLogic, checkAnswer,
} from '../../bin/common.js';

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
