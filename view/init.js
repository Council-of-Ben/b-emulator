window.hooked = {}; // hook function accessor

function log(str, n1, n2) {
	if (n1 && n2) console.log(`%c[${n1}/${n2}] ${str}`, "color: #7799ff");
	else console.log("%c[LOG] " + str, "color: #7799ff;");
};

function getBuildId() {
	return document.head.querySelector("[data-build-id]").getAttribute("data-build-id");
};

function getWebpackCache(id=null) {
	const c = window.webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache;
	return !id?c:c[id];
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

function getWebpackArrayCache() {
	return Object.values(getWebpackCache()).filter(x=>x.exports?.a instanceof Array);
};

function getWebpackStringCache() {
	return Object.values(getWebpackCache()).filter(x=>typeof x.exports==="string");
};

function searchWebpackCache(cache, q="") {
	return cache.filter(x=>x.exports.toString().includes(q));
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

const axios = () => Object.values(getWebpackCache()).filter(x=>x.exports?.a?.get)[3].exports.a;

function reactHandler(path="#app > div > div") {
	return Object.values(document.querySelector(path))[1].children[0]._owner;
};

function reactEventHandler() {
	let react = Object.values(document.querySelector("#body"))[0].stateNode;
	return react[Object.keys(react).filter(x => x.includes("reactInternalInstance"))].return.stateNode;
};

function setState(path="#app > div > div", state={}) {
	return reactHandler(path).stateNode.setState(state);
};


function Hook(objectName, dataLink, thisLink) {
	Object.defineProperty(Object.prototype, objectName, {
		get: function () {
			Reflect.defineProperty(this, objectName, {
				get: function () {
					return window.hooked[dataLink];
				},
				set: function (d) {
					window.hooked[dataLink] = d;
				},
				enumerable: true
			});
			if (thisLink) {
				window.hooked[thisLink] = this;
			}
			return window.hooked[dataLink];
		},
		set: function (d) {
			Reflect.defineProperty(this, objectName, {
				get: function () {
					return window.hooked[dataLink];
				},
				set: function (d) {
					window.hooked[dataLink] = d;
				},
				enumerable: true
			});
			if (thisLink) {
				window.hooked[thisLink] = this;
			}
			window.hooked[dataLink] = d;
		}
	});
};