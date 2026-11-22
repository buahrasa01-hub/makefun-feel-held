import { writeFileSync, mkdirSync } from 'node:fs';

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? '/output';
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

const TEXT =
  'On the far shore a heron stands in the shallows, one leg lifted, not yet deciding, and the whole lake waits with it.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, TEXT, { encoding: 'utf8', flag: 'w' });
