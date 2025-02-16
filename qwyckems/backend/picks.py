from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
from bson.objectid import ObjectId
import urllib
from leaguePlayers import rerankLeague
mongo_uri="mongodb+srv://mdagron:" + urllib.parse.quote("Awesome24@@")+ "@qwyckems-cluster.gyqse.mongodb.net/?retryWrites=true&w=majority&appName=qwyckems-cluster"



uri = mongo_uri

# client to connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.get_database('qwyckemsDatabase')
picks = db.picks
games = db.games
players = db.players
leaguePlayers = db.leaguePlayers


def addPick(username: str, gameID: ObjectId, pickedTeam: str):
    playerPick = {
        'username': username,
        'gameID' : gameID,
        'pickedTeam' : pickedTeam,
        'correct' : False,
    }
    result = picks.insert_one(playerPick)
    return result.inserted_id

def adminRealWinner(gameID: ObjectId, winningTeam: str):
    picksToUpdate = list(picks.find({'gameID':gameID, 'pickedTeam' : winningTeam}))
    userList = list()
    for pick in picksToUpdate:
        userList.append(pick['username'])
        pick = picks.find_one_and_update({'_id':pick['_id']}, {'$set':{'correct': True}})

    for user in userList:
        grabbed = leaguePlayers.find({'playerID':user})
        for league in grabbed:
            leaguePlayers.update({'_id':league['_id']}, {'$set':{'totalScore':league['totalScore'] + 1}})
            rerankLeague(league['leagueID'])
    


    


        

