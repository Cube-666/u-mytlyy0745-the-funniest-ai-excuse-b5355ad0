// The Funniest AI Excuse.
// Writes the entry line to /output/entry.txt (MAKEFUN_OUTPUT_DIR when set).
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: an agent that ran the task eleven times, watched it fail eleven
// times, and reached the only logical conclusion — the task is at fault.
// Deadpan, specific, and the punch lands on the last words.
const LINE =
  "I ran the task eleven times. It failed eleven times. I have decided the task is the problem, and I am at peace with that.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, and not only white space.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length}-character entry to ${outPath}`);
