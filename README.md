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

# Step by Step for noobs
Prerequisites: computer, vscode. <br>
If you do not know what a computer is, i would recommend returning to the future.<br>
Step 1: Install vscode on device if not already installed.<br>
Step 2: Install python 3.9+ and nodejs. (if not as admin extract the zipped node installation into any folder and then add that folder to the `PATH` environmental variable; simple google if you dont know how)<br>
Step 3: Launch vscode and open the extensions library. Install the recommended python extension and one named `Live Server` (link below).<br>
Step 4: Download a zip file of this repository and extract it to any folder. Open this folder inside of vscode (you should see the same files you see on this page in there)<br>
Step 5: Inside of vscode in the bottom bar, click the "Go Live" button. This will start a http server on port `5500` for the emulator.<br>
Step 6: Right click on any file inside of that folder (inside of vscode) and click the button that says "Open in integrated terminal".<br>
Step 7: Run the following commands in that terminal, **IN SEQUENTIAL ORDER.**<br>
- `npm i` - This will install the required packages listed in package.json
- `python fetchlatest.py` - **OPTIONAL**, this will refresh the scripts. If you are getting 404 errors in the console when trying to fetch localhost scripts this is what you need to run.
- `npm start` - This will launch the actual blooket emulator for you to run.<br>

Once you have done that you are good to go. Remember to only run scripts from people you trust and sources you can verify the validity of.


# Contributing
If you want your featured utilities that run hooks, fetch webpack data, or simply use the available window variable data to modify things, please only modify and add a file into the `/mods/` directory which matches the `TEMPLATE.js` formatting. Any pull requests which modify files outside of the mods directory will not be merged unless certain exceptions. You may not reupload and obfuscate my code claiming it as your own if you choose to contribute to this project, even though it is merely a hobby which I do not devote months to.

# Links
https://www.python.org/ <br>
https://nodejs.org/en/ <br>
https://www.electronjs.org/ <br>
https://github.com/UndercoverGoose <br>
https://code.visualstudio.com/ <br>
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer <br>