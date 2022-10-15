// Author: GooseterV
// Description: A template mod.
// Title: Template Mod
module.exports = {
	dependencies: [], // required mods needed for run
	styles: true, // if false it will NOT search for a {mod}.css file
	author: "Goose V",
	name: "Template",
	description: "Template mod used for and example",
	image: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Days.svg",
	inputs: [{
		name: "Test Setting",
		type: "number",
	}], // the inputs and settings config for the mod. see schema below for more info
	run: (value) => {
		console.log(value);
		console.log("RUNNING FROM MOD: TEMPLATE");
	}, // your run script, this will happen on eval
};

/*  schema
	{
        inputs: [{
            name: "",
            type: ("number" | "string" | "options"),
            options: type == "options" && [
                {
                    name: "",
                    value: undefined
                }
            ]
        }],
    }
*/