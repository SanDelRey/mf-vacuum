import { mkdirSync, writeFileSync } from 'node:fs';
// the robot vacuum explains the sock
const EXCUSE = 'It was under the couch. I assumed jurisdiction.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${EXCUSE}\n`);
