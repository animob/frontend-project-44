#!/usr/bin/env node

const writeTask = (message) => {
  console.log(message);
};

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

const mathCalculator = (num1, num2, name) => {
  // Create random sign for calculator
  const signs = ['+', '-', '*'];
  const randomIndex = Math.round(Math.random() * (signs.length - 1));
  const randomSign = signs[randomIndex];
  let result = 0;

  switch (randomSign) {
    case '+':
      console.log(`Question: ${num1} + ${num2}`);
      result = num1 + num2;
      break;
    case '-':
      console.log(`Question: ${num1} - ${num2}`);
      result = num1 - num2;
      break;
    case '*':
      console.log(`Question: ${num1} * ${num2}`);
      result = num1 * num2;
      break;
    default:
      console.log(`Let's try again, ${name}!`);
  }

  return result;
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
  const numStart = Math.round(Math.random() * 100);
  const numProgression = Math.round(Math.random() * 10);

  for (let i = 0; i < numArrLength; i += 1) {
    numeros.push(numStart + numProgression * i);
  }

  return numeros;
};

export {
  writeTask, checkAnswer, mathCalculator, commonDivisorLogic, commonEvenLogic, commonIsPrimeLogic,
  createProgression,
};

export default successCondition;
