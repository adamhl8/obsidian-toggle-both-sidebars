import { Plugin } from "obsidian"

// oxlint-disable-next-line import/no-default-export
export default class ToggleBothSidebars extends Plugin {
  public override onload() {
    this.addCommand({
      id: "toggle-both-sidebars",
      name: "Toggle both sidebars",
      callback: () => {
        const { leftSplit } = this.app.workspace
        const { rightSplit } = this.app.workspace
        const isEitherOpen = !(leftSplit.collapsed && rightSplit.collapsed)
        if (isEitherOpen) {
          leftSplit.collapse()
          rightSplit.collapse()
        } else {
          leftSplit.expand()
          rightSplit.expand()
        }
      },
    })
  }
}
