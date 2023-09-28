#!/usr/bin/env node
import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

function evenNumGame() {
  let correctAnswers = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswers < 3) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const reply = readlineSync.question('Your answer: ');

    if (num % 2 === 0 && reply === 'yes') {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (num % 2 !== 0 && reply === 'no') {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (reply !== 'yes' && reply !== 'no') {
      console.log('You may have made a typo, please try again.');
      break;
    } else if (num % 2 === 0 && reply === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

const name = greeting();
evenNumGame(name);
