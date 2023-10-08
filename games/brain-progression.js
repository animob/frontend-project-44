#!/usr/bin/env node
import readlineSync from 'readline-sync';
import successCondition, { checkAnswer } from '../bin/common.js';

function brainProgression(name) {
  let correctAnswers = 0;

  console.log('What number is missing in the progression?');

  while (correctAnswers < 3) {
    const numeros = [];

    const numArrLength = 10;
    const numStart = Math.round(Math.random() * 100);
    const numProgression = Math.round(Math.random() * 10);
    const numIndexX = Math.round(Math.random() * (numArrLength - 1));

    for (let i = 0; i < numArrLength; i += 1) {
      numeros[i] = numStart + numProgression * i;
    }

    const correctAnswer = numeros[numIndexX];
    numeros[numIndexX] = '..';

    const separator = ' ';
    const numerosLine = numeros.join(separator);

    console.log(`Question: ${numerosLine}`);
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

export default brainProgression;
