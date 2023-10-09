#!/usr/bin/env node
import readlineSync from 'readline-sync';
import successCondition, { checkAnswer, mathCalculator } from '../bin/common.js';

function brainCalc(name) {
  let correctAnswers = 0;

  console.log('What is the result of the expression?');

  while (correctAnswers < 3) {
    // Create two random numbers for calculator
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);

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
