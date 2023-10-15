#!/usr/bin/env node
import readlineSync from 'readline-sync';
import successCondition, { writeTask, commonIsPrimeLogic, checkAnswer } from '../bin/common.js';

function brainPrime(name) {
  let correctAnswers = 0;

  writeTask('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (correctAnswers < 3) {
    const digit = Math.round(Math.random() * 100);

    console.log(`Question: ${digit}`);
    const reply = readlineSync.question('Your answer: ');

    const correctAnswer = commonIsPrimeLogic(digit);

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
