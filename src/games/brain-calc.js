#!/usr/bin/env node
import getRangeRandomNumber from '../../bin/utils.js';
import finishTask, {
  greet, writeTask, getReply, checkAnswer,
} from '../../bin/common.js';

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

function runBrainCalc() {
  const name = greet();
  let correctAnswers = 0;

  writeTask('What is the result of the expression?');

  while (correctAnswers < 3) {
    // Create two random numbers for calculator
    const num1 = getRangeRandomNumber(0, 100);
    const num2 = getRangeRandomNumber(0, 100);

    const correctAnswer = mathCalculator(num1, num2, name);
    const reply = getReply();
    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === Number(reply)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  finishTask(correctAnswers, name);
}

export default runBrainCalc;
