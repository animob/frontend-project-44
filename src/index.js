#!/usr/bin/env node
import runBrainEven from './games/brain-even.js';
import runBrainCalc from './games/brain-calc.js';
import runBrainGcd from './games/brain-gcd.js';
import runBrainProgression from './games/brain-progression.js';
import runBrainPrime from './games/brain-prime.js';

const run = () => {
  runBrainEven();
  runBrainCalc();
  runBrainGcd();
  runBrainProgression();
  runBrainPrime();
};

run();
