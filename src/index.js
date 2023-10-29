#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (textTask, questionAnswerArr) => {
  let correctAnswers = 0;

  // greet
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(textTask);

  let i = 0;
  while (correctAnswers < roundsCount && i < roundsCount) {
    console.log(`Question: ${questionAnswerArr[0][i]}`);
    const correctAnswer = questionAnswerArr[1][i];

    // answer from user
    const reply = readlineSync.question('Your answer: ');

    // check answer
    if (correctAnswer === Number(reply) || correctAnswer === reply) {
      console.log('Correct!');
    } else {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }

    // increase correctAnswer counter
    if (String(correctAnswer) === String(reply)) {
      correctAnswers += 1;
    } else {
      break;
    }
    i += 1;
  }

  // finish task
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { roundsCount };

export default runGame;
