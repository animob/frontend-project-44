#!/usr/bin/env node
import getRangeRandomNumber from '../../bin/utils.js';
import successCondition, {
  greet, writeTask, getReply, checkAnswer,
} from '../../bin/common.js';

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

function brainGcd() {
  const name = greet();
  let correctAnswers = 0;

  writeTask('Find the greatest common divisor of given numbers.');

  while (correctAnswers < 3) {
    // Create two random numbers to find divisor
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    console.log(`Question: ${num1} ${num2}`);

    const correctAnswer = commonDivisorLogic(num1, num2);
    const reply = getReply();
    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === Number(reply)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  successCondition(correctAnswers, name);
}

export default brainGcd;
