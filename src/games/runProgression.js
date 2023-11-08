import getRangeRandomNumber from '../utils.js';
import runGame from '../index.js';

const task = 'What number is missing in the progression?';
const length = 10;

const createProgression = (start, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const getRound = () => {
  const start = getRangeRandomNumber(0, 100);
  const step = getRangeRandomNumber(0, 10);

  const indexX = getRangeRandomNumber(0, length - 1);

  const progression = createProgression(start, step, length);
  const answer = String(progression[indexX]);
  progression[indexX] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

const runBrainProgression = () => {
  runGame(task, getRound);
};

export default runBrainProgression;
