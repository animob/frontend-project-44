#!/usr/bin/env node
import getRangeRandomNumber from '../utils.js';
import runGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const num = getRangeRandomNumber(0, 100);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

function runBrainPrime() {
  runGame(task, getRound);
}

export default runBrainPrime;
