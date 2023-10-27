#!/usr/bin/env node
import runBrainEven from './games/runEven.js';
import runBrainCalc from './games/runCalc.js';
import runBrainGcd from './games/runGcd.js';
import runBrainProgression from './games/runProgression.js';
import runBrainPrime from './games/runPrime.js';

const run = () => {
  runBrainEven();
  runBrainCalc();
  runBrainGcd();
  runBrainProgression();
  runBrainPrime();
};

run();
