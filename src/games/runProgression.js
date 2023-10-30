#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame, { roundsCount } from '../index.js';

const textTask = 'What number is missing in the progression?';

const createProgression = (numArrLength) => {
  const numeros = [];
  const numStart = getRangeRandomNumber(0, 100);
  const numProgression = getRangeRandomNumber(0, 10);

  for (let i = 0; i < numArrLength; i += 1) {
    numeros.push(numStart + numProgression * i);
  }

  return numeros;
};

const getRound = () => {
  const numArrLength = 10;
  const numIndexX = getRangeRandomNumber(0, numArrLength - 1);

  const numerosArr = createProgression(numArrLength);
  const answer = numerosArr[numIndexX];
  numerosArr[numIndexX] = '..';

  const separator = ' ';
  const question = numerosArr.join(separator);

  return [question, answer];
};

function runBrainProgression() {
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
