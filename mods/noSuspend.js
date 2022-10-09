// Author: GooseterV
// Description: This mod will prevent your account from getting suspended.
// Title: No Suspend
module.exports = {
	dependencies: [],
	styles: false,
	opens: XMLHttpRequest.prototype.open,
	run: () => {
		console.log("Running anti-suspend script");
		let non_proxied = this.opens;
		XMLHttpRequest.prototype.open = () => {
			arguments[1].includes("suspend-me") ? false : non_proxied.apply(this, arguments);
		};
	},
	clear: () => {
		console.log("Cleaning up and removing anti-suspend");
		XMLHttpRequest.prototype.open = this.opens;
	}
};