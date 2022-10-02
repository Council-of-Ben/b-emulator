const {
	app,
	BrowserWindow,
	BrowserView,
	session
} = require('electron');
const path = require('path');

app.commandLine.appendSwitch('disable-site-isolation-trials');

function createWindow() {
	const mainWindow = new BrowserWindow({
		backgroundColor: "#1f262d",
		width: 1200,
		height: 800,
		title: "Blooket Emulator",
		webSecurity: false,
		webPreferences: {
			sandbox: false,
			contextIsolation: false,
			nodeIntegration: true,
			preload: path.join(__dirname, 'view/preload.js')
		}
	});
	mainWindow.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
		if((details.url.includes("dashboard")||details.url.includes("play.blooket")||details.url.includes("id.blooket")) && details.url.includes("main~")) return callback({ cancel: true });
		callback({
			cancel:false,
			requestHeaders: details.requestHeaders
		});
	});
	mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {

		const headers = Object.fromEntries(Object.entries(details.responseHeaders).filter(header => {
			const status = !/(cross\-origin)|(content\-security)/gi.test(header[0]);
			if (!status) console.log("blocked " + header[0]);
			return status;
		}));
		if (details.url.includes("dashboard") || details.url.includes("github")) 
			headers["access-control-allow-origin"] = ["https://dashboard.blooket.com"];
		if (details.url.includes("blooket.s3.us"))
			headers["access-control-allow-origin"] = ["https://play.blooket.com"];
		callback({
			responseHeaders: headers
		});
	});
	mainWindow.loadURL("https://dashboard.blooket.com/");
}

app.whenReady().then(() => {
	createWindow();
});

app.on('window-all-closed', function () {
	app.quit();
});