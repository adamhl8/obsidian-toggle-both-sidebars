import { tsdownBundleConfig } from "@adamhl8/configs"
import { defineConfig } from "tsdown"

const config = tsdownBundleConfig({
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
})

export default defineConfig(config)
