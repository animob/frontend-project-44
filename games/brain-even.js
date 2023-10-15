#!/usr/bin/env node
import readlineSync from 'readline-sync';
import successCondition, { writeTask, commonEvenLogic, checkAnswer } from '../bin/common.js';

function brainEven(name) {
  let correctAnswers = 0;

  writeTask('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswers < 3) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const reply = readlineSync.question('Your answer: ');

    const correctAnswer = commonEvenLogic(num, correctAnswers);

    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === reply) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  successCondition(correctAnswers, name);
}

export default brainEven;
