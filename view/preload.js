const fs = require('fs');
const init = fs.readFileSync('./view/init.js', 'utf8');
const mods = JSON.parse(fs.readFileSync("./mods.json", "utf8"));
let e = setInterval(() => {
	if (document.body) {
		if (Array.from(document.body.children).filter(e => e.localName === "script").length < 35 &&
			document.location.toString().includes("dashboard")) return;
		clearInterval(e);
		window.MODS = [];
		const styles = document.createElement("style");
		const EMLGUI = document.createElement("div");
		const stylesToString = (s)=>Object.entries(s).map(([key, value]) => key + ": " + value).join("; ");
		styles.id = "b-emulator-styles";
		styles.innerHTML = "";
		styles.innerHTML += ".modButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:#fff;transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.modButton:hover{background-color:#fff;color:#9a49aa}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:#7a039d;box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:#fff}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.modList::-webkit-scrollbar{width:10px}.modList::-webkit-scrollbar-track{background:#9a49aa}.modList::-webkit-scrollbar-thumb{background:#7b3a88}.modList::-webkit-scrollbar-thumb:hover{background:#700087}.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:white}.cheatInput::placeholder{color:#fff}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}";
		
		EMLGUI.id = "EML-GUI";
		EMLGUI.style = stylesToString({
			display: 'block',
			top: '0',
			left: '0',
			height: '100%',
			overflowY: 'hidden',
			overflowX: 'hidden',
			position: 'absolute',
			width: '100%',
			backgroundColor: 'rgb(11, 194, 207)',
			visibility: 'visible',
			"z-index": 999,
		});
		let container = document.createElement("div");
		container.style = stylesToString({
			width: '100%',
			height: '100%',
			position: 'relative',
			outline: '3px solid #3a3a3a',
			borderRadius: '20px',
			overflow: 'hidden',
		});
		let background = document.createElement("div");
		background.style = stylesToString({
			display: 'block',
			top: '0',
			left: '0',
			height: '100%',
			overflowY: 'hidden',
			overflowX: 'hidden',
			position: 'absolute',
			width: '100%',
			backgroundColor: 'rgb(11, 194, 207)',
			visibility: 'visible',
		});
		let background2 = document.createElement("div");
		background2.style = stylesToString({
			"background-image": 'url(/65a43218fd1cabe52bdf1cda34613e9e.png)',
			display: 'block',
			height: '200%',
			position: 'absolute',
			width: '200%',
			top: '50%',
			left: '50%',
			backgroundPositionX: '-100px',
			backgroundPositionY: '-100px',
			backgroundSize: '550px',
			visibility: 'visible',
			transform: 'translate(-50%,-50%) rotate(15deg)',
			appearance: 'none',
			opacity: '0.175',
		});
		console.log(background2.style.backgroundImage)
		let midbarText = document.createElement("div");
		//midbarText.style = stylesToString()
		background.appendChild(background2);
		container.appendChild(background);
		EMLGUI.appendChild(container);
		let scriptBase = document.location.toString().includes("https://dashboard.blooket.com") ?
			`http://localhost:5500/scripts/` : (document.location.toString().includes("https://play.blooket.com") ?
				`http://localhost:5500/play-scripts/` : `http://localhost:5500/id-scripts/`);
		const locScript = document.createElement("script");
		locScript.id = "locScript";

		window.open = function () {
			console.log(arguments[0])
			location.href = arguments[0];
			return;
		};
		locScript.innerHTML = init;
		for (let script of Array.from(document.body.children).filter(e => e.localName === "script")) {
			if (script.outerHTML.includes("main~")) {
				let src = `${scriptBase}${script.src.replace('https://dashboard.blooket.com/', '').replace('https://id.blooket.com/', '').replace('https://play.blooket.com/', '').split('?')[0]}`;
				console.log(`Loaded script: ${script.src}`);
				script.src = src;
				script.remove();
				fetch(src, {
					method: "GET"
				}).then(r => r.text()).then(t => eval(t));
			};
		};
		document.body.appendChild(locScript);
		for (let mod of mods) {
			let m = require(`../mods/${mod}`);
			window.MODS.push(m);
			if (m.styles) styles.innerHTML += fs.accessSync(`./mods/${mod}.css`, fs.R_OK) ? fs.readFileSync(`./mods/${mod}.css`, "utf8") : "";
			m.run();
		};
		document.head.insertBefore(styles, document.head.children[1]);
		document.body.appendChild(EMLGUI);
	};
}, 0);