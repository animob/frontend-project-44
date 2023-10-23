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
  const questionArr = [];
  const correctAnswerArr = [];
  for (let i = 0; i < roundsCount; i += 1) {
    questionArr.push(getRangeRandomNumber(0, 100));
    const result = commonEvenLogic(questionArr[i]);
    correctAnswerArr.push(result);
  }

  runGame(textTask, questionArr, correctAnswerArr);
}

export default runBrainEven;
