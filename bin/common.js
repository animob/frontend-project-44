#!/usr/bin/env node

const successCondition = (correctAnswers, name) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const checkAnswer = (correctAnswer, reply, name) => {
  if (correctAnswer === Number(reply)) {
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

export { checkAnswer, mathCalculator, commonDivisorLogic };

export default successCondition;
