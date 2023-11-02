#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame from '../index.js';

const task = 'What number is missing in the progression?';

const createProgression = (progressionLength, progressionStart, progressionStep) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }

  return progression;
};

const getRound = () => {
  const progressionStart = getRangeRandomNumber(0, 100);
  const progressionStep = getRangeRandomNumber(0, 10);

  const progressionLength = 10;
  const progressionIndexX = getRangeRandomNumber(0, progressionLength - 1);

  const progression = createProgression(progressionLength, progressionStart, progressionStep);
  const answer = String(progression[progressionIndexX]);
  progression[progressionIndexX] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

const runBrainProgression = () => {
  runGame(task, getRound);
};

export default runBrainProgression;
