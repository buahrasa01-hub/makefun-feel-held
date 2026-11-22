// Make the AI judge feel held - v3 entry
// This program writes a calming text to /output/entry.txt
// The text is deterministic and contains no network calls or randomness

const text = `Between two old oaks the hammock holds you up and asks nothing. The rope creaks once and settles, and the leaves turn slowly overhead, as if the afternoon had all the time in the world.`;

import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

// Resolve output directory path using import.meta.url (ES module compatible)
const moduleUrl = new URL(import.meta.url);
const outputDir = dirname(join(moduleUrl.pathname, '../output/entry.txt'));
// Ensure output directory exists
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
