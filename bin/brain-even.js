#!/usr/bin/env node
import greeting from './greeting.js';
import brainEven from '../games/brain-even.js';

const name = greeting();
brainEven(name);
