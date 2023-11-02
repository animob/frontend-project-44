import getRangeRandomNumber from '../utils.js';
import runGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const num = getRangeRandomNumber(0, 100);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainEven = () => {
  runGame(task, getRound);
};

export default runBrainEven;
