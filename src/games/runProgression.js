#!/usr/bin/env node
import getRangeRandomNumber, { roundsCount } from '../../bin/utils.js';
import runGame from '../common.js';

const createProgression = (numArrLength) => {
  const numeros = [];
  const numStart = getRangeRandomNumber(0, 100);
  const numProgression = getRangeRandomNumber(0, 10);

  for (let i = 0; i < numArrLength; i += 1) {
    numeros.push(numStart + numProgression * i);
  }

  return numeros;
};

function runBrainProgression() {
  const textTask = 'What number is missing in the progression?';
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    const numArrLength = 10;
    const numIndexX = Math.round(Math.random() * (numArrLength - 1));

    const numerosArr = createProgression(numArrLength);
    const correctAnswer = numerosArr[numIndexX];
    numerosArr[numIndexX] = '..';

    const separator = ' ';
    const numerosLine = numerosArr.join(separator);

    questionAnswerArr[0].push(numerosLine);
    questionAnswerArr[1].push(correctAnswer);
  }

  runGame(textTask, questionAnswerArr);
}

export default runBrainProgression;
