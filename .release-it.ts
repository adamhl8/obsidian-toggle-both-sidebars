import { releaseItConfig } from "@adamhl8/configs"

const config = releaseItConfig({
  hooks: {
    // oxlint-disable-next-line no-template-curly-in-string
    "after:bump": ["nub version-bump.ts ${version}"],
  },
})

export default config
