const fs = require("node:fs");
const path = require("node:path");

const LINE = "Wavelorn (n.) \u2014 the wave you give a stranger who was waving at the person behind you.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error("entry must be 1 to 140 characters, got " + LINE.length);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

fs.writeFileSync(outFile, LINE, "utf8");
fs.chmodSync(outFile, 0o644);
