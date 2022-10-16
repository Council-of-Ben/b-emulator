// Author: GooseterV
// Description: This mod can show you other peoples blooks.
// Title: Blook Viewer
module.exports = {
	dependencies: [],
	styles: false,
	author: "Goose V",
	name: "View Blooks",
	description: "This mod can show you other peoples blooks.",
	image: "https://media.blooket.com/image/upload/v1661496296/Media/uiTest/Blooks_Unlocked.svg",
	inputs: [{
		name: "Username",
		type: "string",
	}],
	run: (user) => {
		axios().get(`https://dashboard.blooket.com/api/users?name=${user}`).then(d=>{
            try {
                if (document.location.href==="https://dashboard.blooket.com/blooks") setState({blookData:d.data.unlocks});
            } catch (err) {
                console.log("Something went wrong inside of mod 'Blook Viewer'", err);
            };
		});
	},
};