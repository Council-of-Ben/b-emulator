# Blooket-Emulator
An emulator to modify blooket code and make easier utilities with blooket.
## ***BEFORE CONTINUING, PLEASE READ!***<br>
**THIS PROJECT COULD NOT HAVE BEEN DONE WITHOUT BOILERPLATE CODE FROM `UndercoverGoose` AND I WANT TO SAY I AM NOT THE ORIGINAL CREATOR OF THIS IDEA NOR BASIC CODE. A LOT OF IT I HAVE MODIFIED TO SHARE BARELY ANY SEMBLANCE BUT IT USES THE BASE.**

# Startup
First, create a directory and cd to there.<br>
`mkdir b-emulator` -> `cd b-emulator`<br>
Next, install the required packages and refresh all installed scripts.<br>
`npm i` && `python3 fetchlatest.py`<br>
After that, you have a couple options. <br>
1. Install the `Live Server` vscode plugin and run. This will automatically host on port 5500.
2. Host a python http server with `python3 -m http.server 5500`
3. Use any other http serving application/tool to host a server on port `5500` or change the port inside of `view/preload.js` to be yours.

Lastly, you can start the project and run the emulator with npm.<br>
`npm start` || `electron .`

# Contributing
If you want your featured utilities that run hooks, fetch webpack data, or simply use the available window variable data to modify things, please only modify and add a file into the `/mods/` directory which matches the `TEMPLATE.js` formatting. Any pull requests which modify files outside of the mods directory will not be merged unless certain exceptions. You may not reupload and obfuscate my code claiming it as your own if you choose to contribute to this project, even though it is merely a hobby which I do not devote months to.

# Links
https://www.python.org/
https://nodejs.org/en/
https://www.electronjs.org/
https://github.com/UndercoverGoose
https://code.visualstudio.com/
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer