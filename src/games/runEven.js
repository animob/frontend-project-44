#!/usr/bin/env node
import runGame, { roundsCount } from '../index.js';
import analyzeOneNumber from '../common.js';

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

  const questionAnswerArr = analyzeOneNumber(commonEvenLogic, roundsCount);

  runGame(textTask, questionAnswerArr);
}

export default runBrainEven;
