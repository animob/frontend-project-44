#!/usr/bin/env node
import getRangeRandomNumber from '../../bin/utils.js';
import finishTask, {
  greet, writeTask, getReply, checkAnswer,
} from '../../bin/common.js';

const commonEvenLogic = (num) => {
  let correctAnswer = '';

  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

function runBrainEven() {
  const name = greet();
  let correctAnswers = 0;

  writeTask('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswers < 3) {
    const num = getRangeRandomNumber(0, 100);
    console.log(`Question: ${num}`);

    const correctAnswer = commonEvenLogic(num, correctAnswers);
    const reply = getReply();
    checkAnswer(correctAnswer, reply, name, correctAnswers);

    if (correctAnswer === reply) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  finishTask(correctAnswers, name);
}

export default runBrainEven;
