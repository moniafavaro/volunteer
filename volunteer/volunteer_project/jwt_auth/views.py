from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from django.conf import settings
import jwt

User = get_user_model()

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        print('request ---->', request.data)
        if serializer.is_valid():
            print('entrou?')
            serializer.save()
            return Response({'message': 'Registration successful'})
        return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):
    def get_user(self, username):
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise PermissionDenied({'message', 'Invalid credentials'})

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = self.get_user(username)

        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})
        
        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'userId': user.id, 'username': username, 'message': f'Welcome back {user.username}'})