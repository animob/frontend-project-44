#!/usr/bin/env node
import greeting from '../bin/greeting.js';
import brainEven from '../games/brain-even.js';
import brainCalc from '../games/brain-calc.js';
import brainGcd from '../games/brain-gcd.js';
import brainProgression from '../games/brain-progression.js';
import brainPrime from '../games/brain-prime.js';

const name = greeting();
brainEven(name);
brainCalc(name);
brainGcd(name);
brainProgression(name);
brainPrime(name);
