#!/usr/bin/env node
import successCondition, {
  greet, writeTask, getReply, checkAnswer, createProgression,
} from '../../bin/common.js';

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
