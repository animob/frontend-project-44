#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRangeRandomNumber from './utils.js';

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

const successCondition = (correctAnswers, name) => {
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

const createProgression = (numArrLength) => {
  const numeros = [];
  const numStart = getRangeRandomNumber(0, 100);
  const numProgression = getRangeRandomNumber(0, 10);

  for (let i = 0; i < numArrLength; i += 1) {
    numeros.push(numStart + numProgression * i);
  }

  return numeros;
};

export {
  greet, writeTask, getReply, checkAnswer,
  createProgression,
};

export default successCondition;
