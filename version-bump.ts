import { readFileSync, writeFileSync } from "node:fs"
import process from "node:process"

const [rawVersion] = process.argv.slice(2)
if (!rawVersion) {
  console.error("usage: version-bump <version>")
  process.exit(1)
}

const version = rawVersion.replace(/^v/v, "")
const manifestPath = "manifest.json"
const manifest = readFileSync(manifestPath, "utf8")
const updated = manifest.replace(/(?<="version":\s*)"[^"]*"/v, `"${version}"`)
writeFileSync(manifestPath, updated)
console.info(`manifest.json version -> ${version}`)
