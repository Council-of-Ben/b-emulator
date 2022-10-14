const fs = require('fs');
const init = fs.readFileSync('./view/init.js', 'utf8');
const mods = JSON.parse(fs.readFileSync("./mods.json", "utf8"));
console.log("loading preload")
let e = setInterval(() => {
	if (document.body) {
		if (Array.from(document.body.children).filter(e => e.localName === "script").length < 31 &&
			document.location.toString().includes("dashboard")) return;
		clearInterval(e);
		window.MODS = [];
		const styles = document.createElement("style");
		const EMLGUI = document.createElement("div");
		const stylesToString = (elem, styles = {}) => Object.entries(styles).forEach(
			([key, value]) => (elem.style[key] = value)
		);
		styles.id = "b-emulator-styles";
		styles.innerHTML = "";
		styles.innerHTML += ".modButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:#fff;transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.modButton:hover{background-color:#fff;color:#9a49aa}.modInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:#7a039d;box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:#fff}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.modList::-webkit-scrollbar{width:10px}.modList::-webkit-scrollbar-track{background:#9a49aa}.modList::-webkit-scrollbar-thumb{background:#7b3a88}.modList::-webkit-scrollbar-thumb:hover{background:#700087}.scriptButton:hover{filter:brightness(120%)}.modInput{max-width:200px;border:none;border-radius:7px;caret-color:white}.modInput::placeholder{color:#fff}.modInput:focus,select:focus{outline:0}.modInput::-webkit-inner-spin-button,.modInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.modInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}";

		EMLGUI.id = "EML-GUI";
		stylesToString(EMLGUI, {
			top: (window.innerHeight - 600) / 2 + 'px',
			left: (window.innerWidth - 1000) / 2 + 'px',
			position: 'fixed',
			height: '80%',
			width: '80%',
			maxHeight: '600px',
			maxWidth: '1000px',
			zIndex: '999',
			display: 'none',
		});
		let container = document.createElement("div");
		stylesToString(container, {
			width: '100%',
			height: '100%',
			position: 'relative',
			outline: '3px solid #3a3a3a',
			borderRadius: '20px',
			overflow: 'hidden',
		});
		let background = document.createElement("div");
		stylesToString(background, {
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
		stylesToString(background2, {
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
		let infobox = document.createElement("div");
		stylesToString(infobox, {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: '8px',
			position: 'absolute',
			left: '220px',
			top: '0',
			visibility: 'visible',
			zIndex: '5',
			height: '52px',
			width: '335px',
			backgroundColor: '#9a49aa',
			boxShadow: 'inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)',
			borderBottomRightRadius: '10px',
			color: 'white',
			fontFamily: 'Nunito, sans-serif',
			fontWeight: '700',
			userSelect: 'text',
		});
		infobox.innerHTML = `Ctrl + H to toggle<br>Click and drag here.`;
		let active = false;
		let currentX;
		let currentY;
		let initialX;
		let initialY;
		let xOffset = 0;
		let yOffset = 0;
		function dragStart(e) {
			if (e.type === "touchstart") {
				initialX = e.touches[0].clientX - xOffset;
				initialY = e.touches[0].clientY - yOffset;
			} else {
				initialX = e.clientX - xOffset;
				initialY = e.clientY - yOffset;
			};

			if (e.target === infobox) {
				active = true;
			};
		};

		function dragEnd(e) {
			initialX = currentX;
			initialY = currentY;

			active = false;
		};

		function drag(e) {
			if (active) {

				e.preventDefault();

				if (e.type === "touchmove") {
					currentX = e.touches[0].clientX - initialX;
					currentY = e.touches[0].clientY - initialY;
				} else {
					currentX = e.clientX - initialX;
					currentY = e.clientY - initialY;
				};

				xOffset = currentX;
				yOffset = currentY;

				setTranslate(currentX, currentY, EMLGUI);
			};
		};

		function setTranslate(xPos, yPos, el) {
			el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
		};
		infobox.addEventListener("mousedown", dragStart, false);
		infobox.addEventListener("mouseup", dragEnd, false);
		infobox.addEventListener("mousemove", drag, false);
		let modList = document.createElement("div");
		modList.classList.add("modList");
		stylesToString(modList, {
			overflowY: 'scroll',
			backgroundColor: '#9a49aa',
			boxShadow: 'inset -10px 0 rgb(0 0 0 / 20%)',
			zIndex: '5',
			width: '220px',
			position: 'absolute',
			top: '0',
			left: '0',
			height: '100%',
			fontFamily: 'Titan One',
			color: 'white',
			fontSize: '40px',
			textAlign: 'center',
			paddingTop: '20px',
			userSelect: 'none',
			padding: '20px 10px 20px 0',
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: 'column',
		});
		modList.innerHTML = `<span style="text-shadow: 1px 1px rgb(0 0 0 / 40%)">Mods</span>`;
		let bigButton1 = document.createElement('a');
		bigButton1.classList.add("bigButton");
		stylesToString(bigButton1, {
			cursor: 'pointer',
			display: 'block',
			fontFamily: 'Titan One',
			margin: '20px auto 10px',
			position: 'relative',
			transition: '.25s',
			textDecoration: 'none',
			userSelect: 'none',
			visibility: 'visible',
		});

		bigButton1.target = '_blank';
		bigButton1.relList.add('noopener');
		bigButton1.relList.add('noreferrer');
		bigButton1.href = '';
		bigButton1.innerHTML = '\n        <div style="background: rgba(0,0,0,.25); border-radius: 5px; display: block; width: 100%; height: 100%; left: 0; top: 0; position: absolute; transform: translateY(2px); width: 100%; transition: transform .6s cubic-bezier(.3,.7,.4,1)"></div>\n        <div style="background-color: rgb(11, 194, 207); filter: brightness(.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px;"></div>\n        <div style="font-weight: 400; background-color: rgb(11, 194, 207); color: white; display: flex; flex-direction: row; align-items: center; justify-content: center; text-align: center; padding: 5px; border-radius: 5px; transform: translateY(-4px); transition: transform .6s cubic-bezier(.3,.7,.4,1)">\n        <div style="font-family: Titan One, sans-serif; color: white; font-size: 26px; text-shadow: 2px 2px rgb(0 0 0 / 20%); height: 40px; padding: 0 15px; display: flex; flex-direction: row; align-items: center; justify-content: center">\n            <svg style="filter: drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 -1 21 16">\n                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>\n            </svg>\n            Discord\n        </div>\n        </div>\n        ';

		const content = document.createElement("div");
		stylesToString(content, {
			position: "absolute",
			bottom: "50px",
			right: "50px",
			left: "270px",
			top: "97px"
			// display: "flex",
			// alignItems: "stretch,
			// margin: "50px",
			// backgroundColor: "#8000ff"
		});

		container.appendChild(content);
		modList.appendChild(bigButton1);
		container.appendChild(modList);
		container.appendChild(infobox);
		background.appendChild(background2);
		container.appendChild(background);
		EMLGUI.appendChild(container);

		function addMod(mod, img, mods) {
			const button = document.createElement("div");
			button.classList.add("modButton");
			button.innerHTML = (typeof img == "string" ? `<img style="height: 30px; margin-right: 5px" src="${img}">` : img) + mod;
			modList.appendChild(button);
			button.onclick = () => setMods(button.innerText, mods);
			return button.onclick;
		};
		let currentMod;
		async function setMods(mod, scripts) {
			currentMod = [mod, scripts];
			const header = document.createElement("div");
			stylesToString(header, {
				boxSizing: "border-box",
				display: "block",
				height: "45px",
				left: "-10px",
				padding: "4px 4px 8px",
				position: "absolute",
				top: "-28px",
				backgroundColor: "#ef7426",
				boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",
				borderRadius: "7px"
			});

			const headerText = document.createElement("div");
			stylesToString(headerText, {
				alignItems: "center",
				boxSizing: "border-box",
				display: "flex",
				height: "100%",
				justifyContent: "center",
				padding: "0 15px",
				width: "100%",
				fontFamily: "Titan One, sans-serif",
				fontSize: "26px",
				fontWeight: "400",
				textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
				color: "white",
				background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
				borderRadius: "5px"
			});

			const mods = document.createElement("div");
			stylesToString(mods, {
				alignItems: "center",
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "space-evenly",
				padding: "20px 5px 20px",
				position: "relative",
				width: "100%",
				fontFamily: "Nunito, sans-serif",
				fontWeight: "400",
				color: "white",
				backgroundColor: "#40115f",
				boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
				borderRadius: "7px"
			});
			headerText.innerText = `${mod}`;
			header.appendChild(headerText);
			mods.appendChild(header);
			for (let i = 0; i < scripts.length; i++) {
				let {
					name,
					description,
					type,
					inputs,
					enabled,
					run
				} = scripts[i];
				const button = document.createElement("div");
				button.classList.add("scriptButton");
				stylesToString(button, {
					alignItems: "center",
					boxSizing: "border-box",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					margin: "10px",
					padding: "5px 5px 11px",
					position: "relative",
					width: "250px",
					fontFamily: "Nunito, sans-serif",
					fontWeight: "400",
					color: "white",
					backgroundColor: type == "toggle" ? enabled ? "#47A547" : "#A02626" : "#9a49aa",
					boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
					borderRadius: "7px",
					cursor: "pointer",
					transition: "filter .25s"
				});
				// button.innerHTML = `${inputs?.length ? (await Promise.all(
				//     inputs.map(async ({ name, type, options: opts, min, max }) => {
				//         const options = await (typeof opts == "function" ? opts?.().catch(console.warn) : opts);
				//         return type == "options" && options?.length
				//             ? `<select>${options.map(opt => `<option value="${opt?.value || opt}">${opt?.value || opt}</option>`).join('')}</select>`
				//             : `<input class="modInput" ${type == "number" ? `type="number" value="${min != null ? min : 0}"` : ""}${min != null ? ` min="${min}" ` : ""}${max != null ? ` max="${max}" ` : ""}placeholder="${name}" style="text-align: center"></input>`;
				//     })
				// )).join('') : ""}`;
				if (inputs?.length)
					for (let i = 0; i < inputs.length; i++) {
						const {
							name,
							type,
							options: opts,
							min,
							max
						} = inputs[i];
						const options = await (typeof opts == "function" ? opts?.().catch(console.warn) : opts);
						if (type == "options" && options?.length) {
							const select = document.createElement("select");
							options.forEach(opt => {
								const option = document.createElement("option");
								option.value = opt?.value || opt;
								option.innerHTML = opt?.value || opt;
								select.appendChild(option);
							});
							button.appendChild(select);
						} else {
							const input = document.createElement("input");
							input.classList.add("modInput");
							if (type == "number") {
								input.type = "number";
								input.value = min != null ? min : 0;
								input.min = min;
								input.max = max;
							}
							input.placeholder = name;
							input.style.textAlign = "center";
							button.appendChild(input);
						}
					};
				const modName = document.createElement("div");
				modName.classList.add("modName");
				modName.innerHTML = name;
				button.appendChild(modName);
				button.onclick = (function ({
					target
				}) {
					if (target != button && !target.classList.contains("modName")) return;
					run.bind(this)(...[...button.children].map(c => c.type == "number" ? parseInt("0" + c.value) : c.value));
					if (type == "toggle") setMods(mod, scripts);
				}).bind(scripts[i]);
				mods.appendChild(button);
			}
			[...content.children].forEach(x => x.remove());
			content.appendChild(mods);

			/*  scripts
				{
					name: "",
					description: "",
					type: (null | "toggle"),
					inputs: type == null && [{
						name: "",
						type: ("number" | "string" | "options"),
						options: type == "options" && [
							{
								name: "",
								value: undefined
							}
						]
					}],
					enabled: type == "toggle" && Boolean,
					run: function () {}
				}
			*/
		};
		let scripts = [{
			name: "test",
			description: "test",
			image: "/asinsagingias.png",
			type: "toggle",
			inputs: null,
			enabled: true,
			run: function () {
				console.log("hi")
			}
		}];
		for (let s of scripts) {
			addMod(s.name, s.image, scripts);
		};
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
		document.addEventListener("keydown", (event) => {
			if (event.ctrlKey) {
				//event.preventDefault();
				if (event.key.toLowerCase() === "h") {
					EMLGUI.style.display = EMLGUI.style.display === "block" ? "none" : "block";
				};
			};
		})
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