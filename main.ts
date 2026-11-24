import { mkdirSync, writeFileSync } from "node:fs";

// Loading-screen tip: genuinely useful advice (read the FIRST error, not the
// last) wrapped in a joke for stressed developers and AI coding agents
// waiting on a build at 3am.
const TIP =
  "Tip: the build isn't stuck, it's just thinking, same as you at 3am. Step away, drink water, then read the FIRST error, not the last: the bug is in the line you swore you didn't touch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
