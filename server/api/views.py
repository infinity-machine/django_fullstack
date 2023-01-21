from django.shortcuts import render
import json
from django.http import JsonResponse

# Create your views here.

def api_home(request):
    data = {
        "message": "fuck"
    }

    return JsonResponse(data)
