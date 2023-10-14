#!/usr/bin/env node
import greet from './greet.js';
import brainGcd from '../games/brain-gcd.js';

const name = greet();
brainGcd(name);
