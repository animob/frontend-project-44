#!/usr/bin/env node
import readlineSync from 'readline-sync';
import successCondition, { checkAnswer } from '../bin/common.js';

function brainCalc(name) {
  let correctAnswers = 0;

  console.log('What is the result of the expression?');

  while (correctAnswers < 3) {
    // Create two random numbers for calculator
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    // Create random sign for calculator
    const signs = ['+', '-', '*'];
    const randomIndex = Math.round(Math.random() * (signs.length - 1));
    const randomSign = signs[randomIndex];
    let correctAnswer = 0;

    switch (randomSign) {
      case '+':
        console.log(`Question: ${num1} + ${num2}`);
        correctAnswer = num1 + num2;
        break;
      case '-':
        console.log(`Question: ${num1} - ${num2}`);
        correctAnswer = num1 - num2;
        break;
      case '*':
        console.log(`Question: ${num1} * ${num2}`);
        correctAnswer = num1 * num2;
        break;
      default:
        console.log(`Let's try again, ${name}!`);
    }

    const reply = readlineSync.question('Your answer: ');

    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === Number(reply)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  successCondition(correctAnswers, name);
}

export default brainCalc;
