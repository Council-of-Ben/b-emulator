// Author: GooseterV
// Description: This mod will prevent your account from getting suspended.
// Title: No Suspend
module.exports = {
	dependencies: [],
	styles: false,
	author: "Goose V",
	name: "No-Suspend",
	description: "This mod will prevent your account from getting suspended.",
	image: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Players_Defeated.svg",
	inputs: null,
	opens: XMLHttpRequest.prototype.open,
	run: () => {
		log("Running anti-suspend script");
		let non_proxied = this.opens;
		XMLHttpRequest.prototype.open = () => {
			arguments[1].includes("suspend-me") ? false : non_proxied.apply(this, arguments);
		};
	},
};