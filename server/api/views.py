from api import serialize
from api.models import UserModel
from api.serialize import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class UsersTable(APIView):
    def get(self, request):
        print(request)
        userObj = UserModel.objects.all()
        serialized = UserSerializer(userObj, many = True)
        return Response(serialized.data)
    
    def post(self, request):
        serializeObj = UserSerializer(data = request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)

class UsersDelete(APIView):
    def post(self, request, pk):
        try:
            userObj = UserModel.objects.get(pk = pk)
        except:
            return Response('BOI NOT FOUND IN DATABASE')
        userObj.delete()
        return Response(200)