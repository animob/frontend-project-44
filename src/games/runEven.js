#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame, { roundsCount } from '../index.js';
import analyzeOneNumber from '../common.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenLogic = (num) => {
  let correctAnswer = '';

  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const getRound = () => {
  const num = getRangeRandomNumber(0, 100);
  const question = `${num}`;
  const answer = runEvenLogic(num);
  return [question, answer];
};

function runBrainEven() {
  const questionAnswerArr = analyzeOneNumber(runEvenLogic, roundsCount);

  runGame(task, questionAnswerArr);
}

export default runBrainEven;
