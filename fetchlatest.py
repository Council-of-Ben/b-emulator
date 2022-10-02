import requests
import json
from bs4 import BeautifulSoup
import jsbeautifier
open("view/index.html", "w").write(requests.get("https://dashboard.blooket.com").text)
open("view/id.html", "w").write(requests.get("https://id.blooket.com/login").text)
open("view/play.html", "w").write(requests.get("https://play.blooket.com/play").text)
monsterBrawlMaxLevel = 100
def runReplaces(text):
	return text.replace("{slime:{texture:", "window.MonsterBrawlEnemies={slime:{texture:").replace("{tile:{url:i(\"", "window.MonsterBrawlImageData={tile:{url:i(\"").replace('if(this.state.level+1>=60)return this.state.game.instance.events.emit("user-pause"),void this.setState({gameWon:!0,stage:"game over",level:60}', f'if(this.state.level+1>={monsterBrawlMaxLevel})return this.state.game.instance.events.emit("user-pause"),'+'void this.setState({gameWon:!0,stage:"game over",'+f'level:{monsterBrawlMaxLevel}'+'}').replace("var _=new(v((function", "var _=window.MonsterBrawlPlayerVariable=new(v((function").replace('{Toy:{name:"Santa', 'window.GameMetadata={Toy:{name:"Santa').replace('{default:{background:"#fff",', 'window.ThemeColors={default:{background:"#fff",').replace('{"Old Boot":{rarity:"Trash"', 'window.FishingFrenzyValues={"Old Boot":{rarity:"Trash"')
def fileThing(file, url):
	soup = BeautifulSoup(open(f"view/{file}.html", "r").read())
	scripts = soup.findAll("script")
		#json.dump([s["src"].split("?")[0] for s in scripts[1:]], open("scripts.json", "w"))
	if file == "index":
		thing = "scripts/"
	elif file == "id":
		thing = "id-scripts/"
	else:
		thing = "play-scripts/"
	for script in scripts[1:]:
		src = script["src"]
		open(f"{thing}{src.replace('/', '').split('?')[0]}", "w", encoding="utf-8").write(jsbeautifier.beautify(runReplaces(requests.get(url + src).text)))
	
fileThing("index", "https://dashboard.blooket.com/")
fileThing("id", "https://id.blooket.com/")
fileThing("play", "https://play.blooket.com/")
