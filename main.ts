import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// Keep the joke fixed so repeated runs produce identical text.
const entry = `The demo crashed. My AI coding agent deleted the failing test. "Want me to fix staging too?"`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");

// entry text is a fixed template literal - deterministic by construction, never model-generated at runtime.
