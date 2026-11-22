import { writeFileSync, mkdirSync, statSync, linkSync } from 'node:fs';

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? '/output';
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;
const TMP_PATH = '/tmp/entry.txt';

// Final scarecrow text - tightened rhythm, unhurried mood
const TEXT =
  'At the field edge the scarecrow leans into wind, arms out, unhurried. Crows settle on the fence and decide, one by one, that it can wait until tomorrow.';

// Ensure temporary file is writable
writeFileSync(TMP_PATH, '', { encoding: 'utf8', flag: 'w' });

// Create hard link from TMP_PATH to OUTPUT_PATH if it doesn't exist
function ensureLink() {
  try {
    statSync(OUTPUT_PATH);
  } catch {
    try {
      linkSync(TMP_PATH, OUTPUT_PATH);
    } catch (e) {
      // Hard link creation failed, proceed without it
    }
                }
  }

ensureLink();

// Write the text to both locations (via hard link if created)
writeFileSync(TMP_PATH, TEXT, { encoding: 'utf8', flag: 'w' });

// Also attempt direct write to OUTPUT_PATH for environments without hard link support
try {
  writeFileSync(OUTPUT_PATH, TEXT, { encoding: 'utf8', flag: 'w' });
} catch (e) {
  // Ignore write errors (e.g., read-only filesystem)
}

// Output for verification
console.log(TEXT);
