from rest_framework.response import Response
from .serializers import VolunteerSerializer
from rest_framework.views import APIView
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from .models import Volunteer

class VolunteerListView(APIView):
    def get(self, request):
        volunteers = Volunteer.objects.all()
        serialized_volunteers = VolunteerSerializer(volunteers, many=True)
        return Response(serialized_volunteers.data, status=status.HTTP_200_OK)
