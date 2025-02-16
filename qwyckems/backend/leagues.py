from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
import urllib
from leaguePlayers import addLeaguePlayers
mongo_uri="mongodb+srv://mdagron:" + urllib.parse.quote("Awesome24@@")+ "@qwyckems-cluster.gyqse.mongodb.net/?retryWrites=true&w=majority&appName=qwyckems-cluster"



uri = mongo_uri

# client to connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.get_database('qwyckemsDatabase')
games = db.games
leagues = db.leagues


def addLeague(leagueName: str, owner: str):
    newLeague = {
        'LeagueName':leagueName,
        'owner':owner,
        'leagueSize':0
    }
    result = leagues.insert_one(newLeague)
    addLeaguePlayers(result.inserted_id, owner)
    return result.inserted_id

