// Author: GooseterV
// Description: A template mod.
// Title: Template Mod
module.exports = {
	dependencies: [], // required mods needed for run
	styles: true, // if false it will NOT search for a {mod}.css file
	run: () => {
		console.log("RUNNING FROM MOD: TEMPLATE");
	}, // your run script, this will happen on eval
	clear: () => {
		console.log("CLEANING FROM TEMPLATE MOD");
	}, // the cleanup function 
};