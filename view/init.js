function log(str, n1, n2) {
	if (n1 && n2) console.log(`%c[${n1}/${n2}] ${str}`, "color: #7799ff");
	else console.log("%c[LOG] " + str, "color: #7799ff;");
};

function getBuildId() {
	return Array.from(document.head.children).map(
		c => c.getAttribute("data-build-id")
	).filter(
		c => c
	)[0];
};

function getWebpackCache() {
	return webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache;
};

function searchWebpackFunctionCache(query="") {
	return Object.values(getWebpackCache()).filter(
		k=>k.exports?.a
	).filter(
		k=>k.exports.a.toString().includes(query)
	);
};

function getWebpackObjectCache() {
	return Object.values(getWebpackCache()).filter(
		k => !(k.exports instanceof Function) 
			&& k.exports instanceof Object 
			&& !(k.exports?.a instanceof Function)
			&& Object.keys(k.exports).length > 0
	);
};

function searchWebpackObjectCache(key="a", nestedKey=null) {
	return getWebpackObjectCache().filter(
		k => nestedKey ? k.exports?.[key]?.[nestedKey] : k.exports?.[key]
	);
};


function getBlookRarity(blook="") {
	return searchWebpackFunctionCache(`return "Common"`)[0].exports.a(blook);
};

function getBlookValue(blook="") {
	return searchWebpackFunctionCache(`return 20;`)[0].exports.a(blook);
};

function getBlookData(blook="") {
	return searchWebpackObjectCache("a", blook)[0].exports.a?.[blook];
};

function getBlooks() {
	return Object.keys(searchWebpackObjectCache("a", "Frog")[0].exports.a);
};

function getTitles() {
	return searchWebpackObjectCache("a", "earlyBird")[0].exports.a;
};

function getClassLocals() {
	return searchWebpackObjectCache("locals").flatMap(
		h=>h.exports.locals
	);
};