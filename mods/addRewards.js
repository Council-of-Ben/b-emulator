// Author: GooseterV
// Description: This mod will give you 500 tokens and 300 xp.
// Title: Add Rewards
module.exports = {
	dependencies: [],
	styles: false,
	run: () => {
		axios().get("https://dashboard.blooket.com/api/users/verify-session").then(d=>{
			let n = document.createElement('iframe');
			document.body.append(n);
			window.alert = n.contentWindow.alert.bind(window);
			n.remove();
			try {
				axios().put("https://dashboard.blooket.com/api/users/add-rewards",{name:d.data.name,addedTokens:500,addedXp:300});
				alert('Added Rewards!');
			} catch (err) {
				alert('An error occurred!');
				console.log('err ', err);
			};
		});
	},
	clear: () => {}
};