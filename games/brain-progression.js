#!/usr/bin/env node
import readlineSync from 'readline-sync';
import successCondition, { checkAnswer, createProgression } from '../bin/common.js';

function brainProgression(name) {
  let correctAnswers = 0;

  console.log('What number is missing in the progression?');

  while (correctAnswers < 3) {
    const numArrLength = 10;
    const numIndexX = Math.round(Math.random() * (numArrLength - 1));

    const numerosArr = createProgression(numArrLength);
    const correctAnswer = numerosArr[numIndexX];
    numerosArr[numIndexX] = '..';

    const separator = ' ';
    const numerosLine = numerosArr.join(separator);

    console.log(`Question: ${numerosLine}`);
    const reply = readlineSync.question('Your answer: ');

    checkAnswer(correctAnswer, reply, name);

    if (correctAnswer === Number(reply)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  successCondition(correctAnswers, name);
}

export default brainProgression;
