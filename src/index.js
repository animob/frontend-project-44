#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const roundsCount = 3;

const runGame = (task, getRound) => {
  let correctAnswers = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(task);

  while (correctAnswers < roundsCount) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    correctAnswers += 1;
  }

  if (correctAnswers === roundsCount) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
