#!/usr/bin/env node
import readlineSync from 'readline-sync';

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

    if (correctAnswer === Number(reply)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default brainCalc;
