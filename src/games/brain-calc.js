#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRangeRandomNumber from '../../bin/utils.js';
import successCondition, {
  greet, writeTask, checkAnswer, mathCalculator,
} from '../../bin/common.js';

function brainCalc() {
  const name = greet();
  let correctAnswers = 0;

  writeTask('What is the result of the expression?');

  while (correctAnswers < 3) {
    // Create two random numbers for calculator
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    const correctAnswer = mathCalculator(num1, num2, name);

    const reply = readlineSync.question('Your answer: ');

    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === Number(reply)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  successCondition(correctAnswers, name);
}

export default brainCalc;
