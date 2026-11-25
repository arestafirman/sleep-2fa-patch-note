import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "v3.0.0, build 4821: Sleep now requires two-factor authentication. Your pillow approves each dream in 3–5 business days.";

const outputDir = process.env.OUTPUT_DIR ?? "./output";
mkdirSync(outputDir, { recursive: true });
// Write exactly, no trailing newline — byte-identical every run.
writeFileSync(join(outputDir, "entry.txt"), LEAD, "utf8");
