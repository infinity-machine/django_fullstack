import pymongo
# 'mongodb+srv://shlermBOT:password12345@cluster0.gybf2ep.mongodb.net/dj_fs'
# 'mongodb+srv://shlermBOT:password12345@cluster0.gybf2ep.mongodb.net/test'
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client.dj_fs
people = db['people']

person = {
    'name': 'steve',
    'age': 40
}

x = people.insert_one(person)