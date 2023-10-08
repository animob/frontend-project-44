#!/usr/bin/env node
import readlineSync from 'readline-sync';

function brainPrime(name) {
  let correctAnswers = 0;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (correctAnswers < 3) {
    const digit = Math.round(Math.random() * 100);
    let isPrime = true;

    for (let i = 2; i < digit; i += 1) {
      if (digit % i === 0) {
        isPrime = false;
        break;
      }
    }

    console.log(`Question: ${digit}`);
    const reply = readlineSync.question('Your answer: ');

    if (isPrime === true && reply === 'yes') {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (isPrime === false && reply === 'no') {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (isPrime === true && reply === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      break;
    } else if (isPrime === false && reply === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default brainPrime;
