#!/usr/bin/env node
import readlineSync from 'readline-sync';
import successCondition, { checkAnswer } from '../bin/common.js';

function brainGcd(name) {
  let correctAnswers = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (correctAnswers < 3) {
    // Create two random numbers to find divisor
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    let correctAnswer = 0;
    let commonDivisor = 1;

    console.log(`Question: ${num1} ${num2}`);
    const reply = readlineSync.question('Your answer: ');

    while (commonDivisor <= num1 || commonDivisor <= num2) {
      if (num1 % commonDivisor === 0 && num2 % commonDivisor === 0) {
        correctAnswer = commonDivisor;
      }
      commonDivisor += 1;
    }

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
