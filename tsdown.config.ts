import { tsdownConfig } from "@adamhl8/configs"
import { defineConfig } from "tsdown"

const config = tsdownConfig({
  entry: "./src/main.ts",
  platform: "node",
  format: "cjs",
  outExtensions: () => ({ js: ".js" }),
  external: ["obsidian"],
  copy: [
    {
      from: "./manifest.json",
      to: "./dist/manifest.json",
    },
  ],
  unbundle: false,
  dts: false,
  attw: false,
} as const)

export default defineConfig(config)
