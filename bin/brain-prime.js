#!/usr/bin/env node
import greeting from './greeting.js';
import brainPrime from '../games/brain-prime.js';

const name = greeting();
brainPrime(name);
