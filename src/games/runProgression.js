#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame from '../index.js';

const task = 'What number is missing in the progression?';

const createProgression = (progressionLength) => {
  const progression = [];
  const progressionStart = getRangeRandomNumber(0, 100);
  const progressionStep = getRangeRandomNumber(0, 10);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }

  return progression;
};

const getRound = () => {
  const progressionLength = 10;
  const progressionIndexX = getRangeRandomNumber(0, progressionLength - 1);

  const progression = createProgression(progressionLength);
  const answer = String(progression[progressionIndexX]);
  progression[progressionIndexX] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

function runBrainProgression() {
  runGame(task, getRound);
}

export default runBrainProgression;
