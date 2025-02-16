from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
import urllib
mongo_uri="mongodb+srv://mdagron:" + urllib.parse.quote("Awesome24@@")+ "@qwyckems-cluster.gyqse.mongodb.net/?retryWrites=true&w=majority&appName=qwyckems-cluster"



uri = mongo_uri

# client to connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.get_database('qwyckemsDatabase')
players = db.players


def addPlayer(username: str):
    newPlayer = {
        'username' : username,
    }
    if players.count_documents({'username':username}) == 0:
        players.insert_one(newPlayer)
        return 1
    return 0
