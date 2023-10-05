#!/usr/bin/env node
import greeting from './greeting.js';
import brainGcd from '../games/brain-gcd.js';

const name = greeting();
brainGcd(name);
