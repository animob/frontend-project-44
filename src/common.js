#!/usr/bin/env node
import getRangeRandomNumber from './utils.js';

const analyzeOneNumber = (func, roundsCount) => {
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    questionAnswerArr[0].push(getRangeRandomNumber(0, 100));
    const result = func(questionAnswerArr[0][i]);
    questionAnswerArr[1].push(result);
  }

  return questionAnswerArr;
};

export default analyzeOneNumber;
