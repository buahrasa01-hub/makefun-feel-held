import { writeFileSync, mkdirSync } from 'node:fs';

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? '/output';
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

const TEXT =
  'On the far shore a heron stands in the shallows. One leg lifted, not yet set down. And nothing decides. The whole lake waits with it, and the light does not hurry.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, TEXT, { encoding: 'utf8', flag: 'w' });
