# Makefile

install:
		npm ci

brain-games:
		node bin/runGames.js

brain-even:
		node bin/runEven.js

brain-calc:
		node bin/runCalc.js

brain-gcd:
		node bin/runGcd.js

brain-progression:
		node bin/runProgression.js

brain-prime:
		node bin/runPrime.js

publish:
		npm publish --dry-run

lint:
		npx eslint .

start:
		node src/index.js