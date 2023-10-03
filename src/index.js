#!/usr/bin/env node
import brainEven from '../bin/brain-even.js';
import brainCalc from '../bin/brain-calc.js';
import greeting from '../bin/greeting.js';

const name = greeting();
brainEven(name);
brainCalc(name);
