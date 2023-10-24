#!/usr/bin/env node
import runGame, { analyzeOneNumber } from '../../bin/common.js';

const commonEvenLogic = (num) => {
  let correctAnswer = '';

  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

function runBrainEven() {
  const textTask = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questionAnswerArr = analyzeOneNumber(commonEvenLogic);

  runGame(textTask, questionAnswerArr);
}

export default runBrainEven;
