from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient
import urllib
from bson.objectid import ObjectId

mongo_uri="mongodb+srv://mdagron:" + urllib.parse.quote("Awesome24@@")+ "@qwyckems-cluster.gyqse.mongodb.net/?retryWrites=true&w=majority&appName=qwyckems-cluster"



uri = mongo_uri

# client to connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.get_database('qwyckemsDatabase')
leagues = db.leagues
leaguePlayers = db.leaguePlayers

def rerankLeague(leagueID: ObjectId):
    leagueList = list(leaguePlayers.find({'leagueID':leagueID}))
    originalLength = len(leagueList)
    while len(leagueList) > 0:
        currentRank = originalLength - len(leagueList) + 1
        highestScore = -1
        for item in leagueList:
            if item["totalScore"] > highestScore:
                highestScore = item["totalScore"]
        leaguePlayers.update_many({'totalScore': highestScore}, { '$set': {'ranking': currentRank}})
        secondList = leagueList.copy()
        for item2 in secondList:
            if item2["totalScore"] == highestScore:
                leagueList.remove(item2)


        



    for leaguePlayer in leagueList:
        leaguePlayers.update_one({'_id':leaguePlayer["_id"]}, { '$set': {'ranking':leaguePlayer["ranking"]}})

def addLeaguePlayers(leagueID: ObjectId, playerID: str):

    league = leagues.find_one({'_id':leagueID})
    originalSize = league["leagueSize"]
    newLeaguePlayer = {
        'leagueID':leagueID,
        'playerID':playerID,
        'totalScore':0,
        'ranking':originalSize + 1
    }
    result = leaguePlayers.insert_one(newLeaguePlayer)
    leagues.update_one({'_id':leagueID}, {'$set': {'leagueSize': originalSize + 1}})
    rerankLeague(leagueID)
    return result.inserted_id
