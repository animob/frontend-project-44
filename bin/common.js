#!/usr/bin/env node

const successCondition = (correctAnswers, name) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default successCondition;
