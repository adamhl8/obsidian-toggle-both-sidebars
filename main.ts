import { Plugin } from "obsidian";

export default class ToggleBothSidebars extends Plugin {
	async onload() {
		this.addCommand({
			id: "toggle-both-sidebars",
			name: "Toggle both sidebars",
			callback: () => {
				const leftSplit = this.app.workspace.leftSplit;
				const rightSplit = this.app.workspace.rightSplit;
				const isEitherOpen = !(
					leftSplit.collapsed && rightSplit.collapsed
				);

				isEitherOpen ? leftSplit.collapse() : leftSplit.expand();
				isEitherOpen ? rightSplit.collapse() : rightSplit.expand();
			},
		});
	}
}
