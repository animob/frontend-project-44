#!/usr/bin/env node
import readlineSync from 'readline-sync';

import getRangeRandomNumber from './utils.js';

const roundsCount = 3;

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const writeTask = (message) => {
  console.log(message);
};

const getReply = () => readlineSync.question('Your answer: ');

const finishTask = (correctAnswers, name) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const checkAnswer = (correctAnswer, reply, name) => {
  if (correctAnswer === Number(reply) || correctAnswer === reply) {
    console.log('Correct!');
  } else {
    console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

const analyzeOneNumber = (func) => {
  const questionAnswerArr = [[], []];

  for (let i = 0; i < roundsCount; i += 1) {
    questionAnswerArr[0].push(getRangeRandomNumber(0, 100));
    const result = func(questionAnswerArr[0][i]);
    questionAnswerArr[1].push(result);
  }

  return questionAnswerArr;
};

const runGame = (textTask, questionAnswerArr) => {
  const name = greet();
  writeTask(textTask);
  let correctAnswers = 0;
  let i = 0;
  while (correctAnswers < roundsCount && i < roundsCount) {
    console.log(`Question: ${questionAnswerArr[0][i]}`);
    const correctAnswer = questionAnswerArr[1][i];
    const reply = getReply();
    checkAnswer(correctAnswer, reply, name, correctAnswers);
    if (String(correctAnswer) === String(reply)) {
      correctAnswers += 1;
    } else {
      break;
    }
    i += 1;
  }

  finishTask(correctAnswers, name);
};

export {
  greet, writeTask, getReply, checkAnswer, finishTask, analyzeOneNumber, roundsCount,
};

export default runGame;