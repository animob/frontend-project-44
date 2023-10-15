#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRangeRandomNumber from '../bin/utils.js';
import successCondition, { writeTask, checkAnswer, commonDivisorLogic } from '../bin/common.js';

function brainGcd(name) {
  let correctAnswers = 0;

  writeTask('Find the greatest common divisor of given numbers.');

  while (correctAnswers < 3) {
    // Create two random numbers to find divisor
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    console.log(`Question: ${num1} ${num2}`);
    const reply = readlineSync.question('Your answer: ');

    const correctAnswer = commonDivisorLogic(num1, num2);

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
