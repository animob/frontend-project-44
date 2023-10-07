#!/usr/bin/env node
import greeting from './greeting.js';
import brainProgression from '../games/brain-progression.js';

const name = greeting();
brainProgression(name);
