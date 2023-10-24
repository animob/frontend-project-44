#!/usr/bin/env node
import getRangeRandomNumber, { roundsCount } from '../../bin/utils.js';
import runGame from '../../bin/common.js';

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
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    questionAnswerArr[0].push(getRangeRandomNumber(0, 100));
    const result = commonEvenLogic(questionAnswerArr[0][i]);
    questionAnswerArr[1].push(result);
  }

  runGame(textTask, questionAnswerArr);
}

export default runBrainEven;
