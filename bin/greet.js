#!/usr/bin/env node
import readlineSync from 'readline-sync';

function greet() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

export default greet;
