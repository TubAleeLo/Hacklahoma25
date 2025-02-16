from flask import Flask, request, jsonify
from markupsafe import escape
from bson.json_util import dumps
from json import loads
app = Flask(__name__)

from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
import urllib
mongo_uri="mongodb+srv://mdagron:" + urllib.parse.quote("Awesome24@@")+ "@qwyckems-cluster.gyqse.mongodb.net/?retryWrites=true&w=majority&appName=qwyckems-cluster"



uri = mongo_uri

# client to connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.get_database('qwyckemsDatabase')
games = db.games
player = db.players
leaguePlayer = db.leaguePlayers

from players import addPlayer
from games import addGame
from picks import *

@app.route("/<username>/leagues/<leagueID>/week/<week_number>")
def getWeek(week_number):
    return games.find({'week':week_number})

@app.route('/login/<username>', methods=['GET','POST'])
def login(username):
    if request.method == 'POST':
        return addPlayer(username)
    else:
        return jsonify(loads(dumps(player.find_one({'username':username}))))

# To get data:
# json_data 

@app.route('/<username>/leagues')
def getLeaguesFromUsername(username):
    var = list(leaguePlayer.find({'playerID':username}))
    return jsonify(loads(dumps(var)))

@app.route('/admin/<team1>/<team2>/<week>')
def game(team1, team2, week):
    return addGame(week, team1, team2)

@app.route('/admin/addWins/<gameID>/<winningTeam>')
def addWins(gameID, winningTeam):
    adminRealWinner(gameID, winningTeam)
    return jsonify({"response":'ok'})

@app.route('/login/<username>/<gameID>/<prediction>')
def addPrediction(username, gameID, prediction):
    return addPick(username, gameID, prediction)

@app.route('/league/<leagueID>')
def pullRankings(leagueID):
    orderedList = list()
    orderedList.append(leaguePlayer.find({'ranking':1}))
    orderedList.append(leaguePlayer.find({'ranking':2}))
    orderedList.append(leaguePlayer.find({'ranking':3}))
    return orderedList


    
if __name__ == '__main__':
    app.run(debug = True)