#!/usr/bin/env node
import greet from './greet.js';
import brainPrime from '../games/brain-prime.js';

const name = greet();
brainPrime(name);
