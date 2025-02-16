from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
import urllib
mongo_uri="mongodb+srv://mdagron:" + urllib.parse.quote("Awesome24@@")+ "@qwyckems-cluster.gyqse.mongodb.net/?retryWrites=true&w=majority&appName=qwyckems-cluster"



uri = mongo_uri

# client to connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.get_database('qwyckemsDatabase')
games = db.games


def addGame(week: int, year: int, awayTeam: str, homeTeam: str):
    newGame = {
        'week' : week,
        'year' : year,
        'awayTeam' : awayTeam,
        'homeTeam' : homeTeam,
    }
    result = games.insert_one(newGame)
    return result.inserted_id


