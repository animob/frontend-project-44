#!/usr/bin/env node
import greet from './greet.js';
import brainProgression from '../games/brain-progression.js';

const name = greet();
brainProgression(name);
