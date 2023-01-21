from django.shortcuts import render
import json
from django.http import JsonResponse
import pymongo
# 'mongodb+srv://shlermBOT:password12345@cluster0.gybf2ep.mongodb.net/dj_fs'
# 'mongodb+srv://shlermBOT:password12345@cluster0.gybf2ep.mongodb.net/test'
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client.dj_fs
col = db['people']

person = {
    'name': 'steve',
    'age': 40
}

# Create your views here.

# def api_home(request):
#     data = {
#         "message": "fuck"
#     }

#     return JsonResponse(data)

def index(request):
    print(request)
    data = {
        "message": "fuck"
    }

    return JsonResponse(data)