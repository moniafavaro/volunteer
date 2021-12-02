from rest_framework.response import Response
from jobs.models import Job
from jobs.serializers import JobSerializer
from .serializers import VolunteerSerializer
from rest_framework.views import APIView
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from .models import Volunteer

class VolunteerDetailView(APIView):
    def delete(self, request, pk):
        try:
            volunteer = Volunteer.objects.get(id=pk)
            volunteer.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        volunteer = Volunteer.objects.get(id=pk)
        updated_volunteer = VolunteerSerializer(volunteer, data=request.data)
        if updated_volunteer.is_valid():
            updated_volunteer.save()
            return Response(updated_volunteer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_volunteer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        volunteer = Volunteer.objects.get(id=pk)
        serialized_volunteer = VolunteerSerializer(volunteer)
        return Response(serialized_volunteer.data, status=status.HTTP_200_OK)

class VolunteerListView(APIView):
    def post(self, request):
        volunteer = VolunteerSerializer(data=request.data)
        if volunteer.is_valid():
            volunteer.save()
            return Response(volunteer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(volunteer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request):
        volunteers = Volunteer.objects.all()
        serialized_volunteers = VolunteerSerializer(volunteers, many=True)
        return Response(serialized_volunteers.data, status=status.HTTP_200_OK)

class VolunteerJobView(APIView):
    def get(self, request, pk):
        jobs = Job.objects.filter(volunteer=pk)
        serialized_jobs = JobSerializer(jobs, many=True)
        return Response(serialized_jobs.data, status=status.HTTP_200_OK)