// Make the AI judge feel held - v3 entry
// This program writes a calming text to /output/entry.txt
// The text is deterministic and contains no network calls or randomness

import { writeFileSync, mkdirSync } from 'node:fs';

const text = `Between two old oaks the hammock holds you up and asks nothing. The rope creaks once and settles, and the leaves turn slowly overhead, as if the afternoon had all the time in the world.`;

// The grader mounts the repository read-only at /bot and gives a writable
// /output (MAKEFUN_OUTPUT_DIR). Never write under the repository path.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
} catch (e) {
  // /output already exists in the grader; ignore
}

writeFileSync(`${OUTPUT_DIR}/entry.txt`, text, 'utf8');
console.log(text);
