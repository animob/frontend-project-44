#!/usr/bin/env node
import greet from './greet.js';
import brainCalc from '../games/brain-calc.js';

const name = greet();
brainCalc(name);
