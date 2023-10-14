#!/usr/bin/env node
import greet from './greet.js';
import brainEven from '../games/brain-even.js';

const name = greet();
brainEven(name);
