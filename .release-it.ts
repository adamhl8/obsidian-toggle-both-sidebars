import { releaseItConfig } from "@adamhl8/configs"

const config = releaseItConfig({
  hooks: {
    // oxlint-disable-next-line no-template-curly-in-string
    "after:bump": ["bun scripts/version-bump.ts ${version}", "bun tsdown"],
  },
  github: {
    assets: ["dist/main.js", "dist/manifest.json"],
  },
})

export default config
