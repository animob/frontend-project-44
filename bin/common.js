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

const commonDivisorLogic = (num1, num2) => {
  let commonDivisor = 1;
  let result = 1;

  while (commonDivisor <= num1 || commonDivisor <= num2) {
    if (num1 % commonDivisor === 0 && num2 % commonDivisor === 0) {
      result = commonDivisor;
    }
    commonDivisor += 1;
  }

  return result;
};

const commonEvenLogic = (num) => {
  let correctAnswer = '';

  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const commonIsPrimeLogic = (digit) => {
  let isPrime = true;
  let correctAnswer = '';

  for (let i = 2; i < digit; i += 1) {
    if (digit % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
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
  greet, writeTask, getReply, checkAnswer, commonDivisorLogic, commonEvenLogic,
  commonIsPrimeLogic, createProgression,
};

export default successCondition;
