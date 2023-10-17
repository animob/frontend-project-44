#!/usr/bin/env node
import getRangeRandomNumber from '../../bin/utils.js';
import successCondition, {
  greet, writeTask, getReply, checkAnswer,
} from '../../bin/common.js';

const createProgression = (numArrLength) => {
  const numeros = [];
  const numStart = getRangeRandomNumber(0, 100);
  const numProgression = getRangeRandomNumber(0, 10);

  for (let i = 0; i < numArrLength; i += 1) {
    numeros.push(numStart + numProgression * i);
  }

  return numeros;
};

function brainProgression() {
  const name = greet();
  let correctAnswers = 0;

  writeTask('What number is missing in the progression?');

  while (correctAnswers < 3) {
    const numArrLength = 10;
    const numIndexX = Math.round(Math.random() * (numArrLength - 1));

    const numerosArr = createProgression(numArrLength);
    const correctAnswer = numerosArr[numIndexX];
    numerosArr[numIndexX] = '..';

    const separator = ' ';
    const numerosLine = numerosArr.join(separator);

    console.log(`Question: ${numerosLine}`);

    const reply = getReply();
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
