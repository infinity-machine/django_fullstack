from django.shortcuts import render
import json
from django.http import JsonResponse
import pymongo
# 'mongodb+srv://shlermBOT:password12345@cluster0.gybf2ep.mongodb.net/dj_fs'
# 'mongodb+srv://shlermBOT:password12345@cluster0.gybf2ep.mongodb.net/test'
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client.dj_fs
people = db['people']

# x = people.insert_one(person)

# Create your views here.

# def api_home(request):
#     data = {
#         "message": "fuck"
#     }

#     return JsonResponse(data)

def index(request):
    # print(request)

    response = {}

    for data in people.find():
        print(data)

    
    return JsonResponse({
        "ok": "ok"
    })