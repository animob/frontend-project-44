#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { roundsCount } from './utils.js';

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

const runGame = (textTask, questionArr, correctAnswerArr) => {
  const name = greet();
  writeTask(textTask);
  let correctAnswers = 0;
  let i = 0;
  while (correctAnswers < roundsCount && i < roundsCount) {
    const question = questionArr[i];
    console.log(`Question: ${question}`);
    const correctAnswer = correctAnswerArr[i];
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
  greet, writeTask, getReply, checkAnswer, finishTask,
};

export default runGame;
