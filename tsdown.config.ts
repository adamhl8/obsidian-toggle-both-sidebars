import { tsdownConfig } from "@adamhl8/configs"
import { defineConfig } from "tsdown"

const config = tsdownConfig({
  entry: "./src/main.ts",
  platform: "node",
  format: "cjs",
  outExtensions: () => ({ js: ".js" }),
  deps: { neverBundle: ["obsidian"] },
  copy: [
    {
      from: "./manifest.json",
      to: "./dist/",
    },
  ],
  unbundle: false,
  dts: false,
  attw: false,
})

export default defineConfig(config)
