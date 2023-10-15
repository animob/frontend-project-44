#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRangeRandomNumber from '../../bin/utils.js';
import successCondition, {
  greet, writeTask, commonEvenLogic, checkAnswer,
} from '../../bin/common.js';

function brainEven() {
  const name = greet();
  let correctAnswers = 0;

  writeTask('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswers < 3) {
    const num = getRangeRandomNumber(0, 100);
    console.log(`Question: ${num}`);
    const reply = readlineSync.question('Your answer: ');

    const correctAnswer = commonEvenLogic(num, correctAnswers);

    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === reply) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  successCondition(correctAnswers, name);
}

export default brainEven;
