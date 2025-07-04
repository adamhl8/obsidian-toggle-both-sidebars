import * as fs from "node:fs/promises"

await Bun.build({
  entrypoints: ["./src/main.ts"],
  target: "node",
  format: "cjs",
  outdir: "./dist",
  external: ["obsidian"],
})

await fs.cp("./manifest.json", "./dist/manifest.json")
