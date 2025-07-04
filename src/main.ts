import { Plugin } from "obsidian"

// biome-ignore lint/style/noDefaultExport: needs to be default
export default class ToggleBothSidebars extends Plugin {
  public override onload() {
    this.addCommand({
      id: "toggle-both-sidebars",
      name: "Toggle both sidebars",
      callback: () => {
        const leftSplit = this.app.workspace.leftSplit
        const rightSplit = this.app.workspace.rightSplit
        const isEitherOpen = !(leftSplit.collapsed && rightSplit.collapsed)
        isEitherOpen ? leftSplit.collapse() : leftSplit.expand()
        isEitherOpen ? rightSplit.collapse() : rightSplit.expand()
      },
    })
  }
}
