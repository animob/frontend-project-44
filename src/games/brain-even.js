#!/usr/bin/env node
import getRangeRandomNumber from '../../bin/utils.js';
import successCondition, {
  greet, writeTask, getReply, commonEvenLogic, checkAnswer,
} from '../../bin/common.js';

function brainEven() {
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

  successCondition(correctAnswers, name);
}

export default brainEven;
