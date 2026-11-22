import { writeFileSync, mkdirSync } from 'fs';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';
const outputPath = `${outputDir}/entry.txt`;
const text = "The quilt your grandmother made is heavier than you remember, and it settles over you like a hand. The house ticks around you, the kettle sighs in the kitchen, and for a little while nothing in the world needs you.";

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, text, 'utf8');
} catch (e) {
  process.exit(1);
}
