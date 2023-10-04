#!/usr/bin/env node
import greeting from './greeting.js';
import brainCalc from '../games/brain-calc.js';

const name = greeting();
brainCalc(name);
