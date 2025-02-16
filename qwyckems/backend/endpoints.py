from flask import Flask, request, jsonify
from markupsafe import escape
from bson.json_util import dumps
from flask_cors import CORS
from json import loads
app = Flask(__name__)
CORS(app)

from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
import urllib
mongo_uri="mongodb+srv://mdagron:" + urllib.parse.quote("Awesome24@@")+ "@qwyckems-cluster.gyqse.mongodb.net/?retryWrites=true&w=majority&appName=qwyckems-cluster"



uri = mongo_uri

# client to connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.get_database('qwyckemsDatabase')
gameDB = db.games
player = db.players
leaguePlayer = db.leaguePlayers

from players import addPlayer
from games import addGame
from picks import *

@app.route("/<week_number>/week")
def getWeek(week_number: str):
    var = list(gameDB.find({'week':week_number}))
    return jsonify(loads(dumps(var)))

@app.route('/login/<username>', methods=['GET','POST'])
def login(username):
    newUser = addPlayer(username)
    if request.method == 'POST':
        newUser = addPlayer(username)
        if newUser == 0:
            return jsonify({'response':'fuck it we ball'})
        return jsonify(loads(dumps(list(player.find_one({'playerID':username})))))
    else:
        return jsonify(loads(dumps(list(leaguePlayer.find({'username':username})))))

# To get data:
# json_data 

@app.route('/<username>/leagues')
def getLeaguesFromUsername(username):
    var = list(leaguePlayer.find({'playerID':username}))
    return jsonify(loads(dumps(var)))

@app.route('/admin/<team1>/<team2>/<week>/<year>')
def game(team1, team2, week,year):
    addGame(week, year, team1, team2)
    return jsonify({"response":"ok"})

@app.route('/admin/addWins/<gameID>/<winningTeam>')
def addWins(gameID, winningTeam):
    adminRealWinner(gameID, winningTeam)
    return jsonify({"response":'ok'})

@app.route('/login/<username>/<gameID>/<prediction>')
def addPrediction(username, gameID, prediction):
    addPick(username, gameID, prediction)
    return jsonify({'response':'ok'})

@app.route('/rankings/<leagueID>')
def pullRankings(leagueID):
    orderedList = list()
    orderedList.append(leaguePlayer.find({'ranking':1}))
    orderedList.append(leaguePlayer.find({'ranking':2}))
    orderedList.append(leaguePlayer.find({'ranking':3}))
    return jsonify(loads(dumps(orderedList)))


    
if __name__ == '__main__':
    app.run(debug = True)