const fs = require('fs');
const init = fs.readFileSync('./view/init.js', 'utf8');
const mods = JSON.parse(fs.readFileSync("./mods.json", "utf8"));
let e = setInterval(() => {
	if (document.body) {
		if (Array.from(document.body.children).filter(e=>e.localName==="script").length < 35 
			&& document.location.toString().includes("dashboard")) return;
		clearInterval(e);
		window.MODS = [];
		const styles = document.createElement("style");
		styles.id = "b-emulator-styles";
		styles.innerHTML = "";
		let scriptBase = document.location.toString().includes("https://dashboard.blooket.com") ? 
			`http://localhost:5500/scripts/` : (document.location.toString().includes("https://play.blooket.com") ?
			`http://localhost:5500/play-scripts/`: `http://localhost:5500/id-scripts/`);
		const locScript = document.createElement("script");
		for (let mod of mods) {
			let m = require(`../mods/${mod}`);
			window.MODS.push(m);
			if (m.styles) styles.innerHTML += fs.accessSync(`./mods/${mod}.css`, fs.R_OK) ? fs.readFileSync(`./mods/${mod}.css`, "utf8") : "";
			m.run();
		};
		document.head.insertBefore(styles, document.head.children[1]);
		locScript.id = "locScript";
		
		window.open = function () {
			console.log(arguments[0])
			location.href = arguments[0];
			return;
		};
		locScript.innerHTML = init;
		for (let script of Array.from(document.body.children).filter(e=>e.localName==="script")) {
			if (script.outerHTML.includes("main~")) {
				let src = `${scriptBase}${script.src.replace('https://dashboard.blooket.com/', '').replace('https://id.blooket.com/', '').replace('https://play.blooket.com/', '').split('?')[0]}`;
				console.log(`Loaded script: ${script.src}`);
				script.src = src;
				script.remove();
				fetch(src, {method:"GET"}).then(r=>r.text()).then(t=>eval(t));
			};
		};
		document.body.appendChild(locScript);
	};
}, 0);