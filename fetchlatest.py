import requests
import json
from bs4 import BeautifulSoup
import jsbeautifier
import shutil
import os
try:
	shutil.rmtree('./play-scripts')
	shutil.rmtree('./scripts')
	shutil.rmtree('./id-scripts')
except Exception as e:
	print(e)
os.makedirs("./play-scripts")
os.makedirs("./scripts")
os.makedirs("./id-scripts")
open("view/index.html", "w").write(requests.get("https://dashboard.blooket.com").text)
open("view/id.html", "w").write(requests.get("https://id.blooket.com/login").text)
open("view/play.html", "w").write(requests.get("https://play.blooket.com/play").text)
monsterBrawlMaxLevel = 100
scriptss = {}
def runReplaces(text):
	return text.replace("{slime:{texture:", "window.MonsterBrawlEnemies={slime:{texture:").replace("{tile:{url:i(\"", "window.MonsterBrawlImageData={tile:{url:i(\"").replace('if(this.state.level+1>=60)return this.state.game.instance.events.emit("user-pause"),void this.setState({gameWon:!0,stage:"game over",level:60}', f'if(this.state.level+1>={monsterBrawlMaxLevel})return this.state.game.instance.events.emit("user-pause"),'+'void this.setState({gameWon:!0,stage:"game over",'+f'level:{monsterBrawlMaxLevel}'+'}').replace("var _=new(y((function", "var _=window.MonsterBrawlPlayerVariable=new(y((function").replace('{Toy:{name:"Santa', 'window.GameMetadata={Toy:{name:"Santa').replace('{default:{background:"#fff",', 'window.ThemeColors={default:{background:"#fff",').replace('{"Old Boot":{rarity:', 'window.FishingFrenzyValues={"Old Boot":{rarity:').replace('["password","123456",', 'window.CryptoPasswords=["password","123456",').replace('[{type:"crypto",val:10', 'window.CryptoValues=[{type:"crypto",val:10').replace("{Chick:{strength:", "window.TowerBlookStats={Chick:{strength:").replace('{common:["Chick","Chicken","Cow","Goat","Horse",', 'window.TowerBlooks={common:["Chick","Chicken","Cow","Goat","Horse",').replace('{"Medical Kit":{"', 'window.TowerArtifactStats={"Medical Kit":{"').replace('{common:["Fury Relic","Steel Socks",', 'window.TowerArtifacts={common:["Fury Relic","Steel Socks",').replace('{apiKey:"', 'window.FirebaseApiDetails={apiKey:"').replace('[{type:"toys",', 'window.SantasWorkshopValues=[{type:"toys",').replace('{Toast:{type:"food",', 'window.CafeValues={Toast:{type:"food",').replace('[{xp:5,partType:"glasses",part:9}', 'window.ClassPassItems=[{xp:5,partType:"glasses",part:9}').replace('[{name:"Chick",color:Object(', 'window.FactoryBlookEarnings=[{name:"Chick",color:Object(').replace('{"uncommon-1":{url:"https:', 'window.MarketBlookParticles={"uncommon-1":{url:"https:').replace('[{id:"', 'window.ShopData=[{id:"').replace('{"Ice Monster":{url:"http"', 'window.MarketPackData={"Ice Monster":{url:"http"').replace('function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=!0}', 'function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=!1}')
def fileThing(file, url):
	soup = BeautifulSoup(open(f"view/{file}.html", "r").read(), features="html.parser")
	scripts = soup.findAll("script")
	scr = [s["src"].split("?")[0].split(".")[0] for s in scripts[1:]]
	print(scr)
	scriptss[file] = scr
	if file == "index":
		thing = "scripts/"
	elif file == "id":
		thing = "id-scripts/"
	else:
		thing = "play-scripts/"
	for script in scripts[1:]:
		src = script["src"]
		ss = src.replace('/', '').split('?')[0]
		open(f"{thing}{ss}", "w", encoding="utf-8").write(jsbeautifier.beautify(runReplaces(requests.get(url + src).text)))
			
fileThing("index", "https://dashboard.blooket.com/")
fileThing("id", "https://id.blooket.com/")
fileThing("play", "https://play.blooket.com/")
json.dump(scriptss, open("scripts.json", "w"))