const rawVersion = process.argv.at(2)
if (!rawVersion) {
  console.error("usage: version-bump <version>")
  process.exit(1)
}

const version = rawVersion.replace(/^v/v, "")
const manifestPath = "manifest.json"
const manifest = await Bun.file(manifestPath).text()
const updated = manifest.replace(/(?<="version":\s*)"[^"]*"/v, `"${version}"`)
await Bun.write(manifestPath, updated)
console.info(`manifest.json version -> ${version}`)
