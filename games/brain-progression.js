#!/usr/bin/env node
import readlineSync from 'readline-sync';

function brainProgression(name) {
  let correctAnswers = 0;

  console.log('What number is missing in the progression?');

  while (correctAnswers < 3) {
    const numeros = [];

    const numArrLength = 10;
    const numStart = Math.round(Math.random() * 100);
    const numProgression = Math.round(Math.random() * 10);
    const numIndexX = Math.round(Math.random() * 10);

    for (let i = 0; i < numArrLength; i += 1) {
      numeros[i] = numStart + numProgression * i;
    }

    const numHiding = numeros[numIndexX];
    numeros[numIndexX] = '..';

    const separator = ' ';
    const numerosLine = numeros.join(separator);

    console.log(`Question: ${numerosLine}`);
    const reply = readlineSync.question('Your answer: ');

    if (numHiding === Number(reply)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${numHiding}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default brainProgression;
