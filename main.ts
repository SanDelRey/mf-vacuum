// the bounty's single line lives in entry.txt; this program just emits it.
import { mkdirSync, writeFileSync } from 'node:fs';
const LINE = 'It was under the couch. I assumed jurisdiction.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE.trim()}\n`);
