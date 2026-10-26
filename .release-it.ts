import { releaseItConfig } from "@adamhl8/configs"

const config = releaseItConfig({
  hooks: {
    "after:bump": ["bun scripts/version-bump.ts ${version}"],
  },
  github: {
    assets: ["dist/main.js", "manifest.json"],
  },
})

export default config
