from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import JobSerializer
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from .models import Job

class JobListView(APIView):
    def get(self, request):
        jobs = Job.objects.all()
        serialized_jobs = JobSerializer(jobs, many=True)
        return Response(serialized_jobs.data, status=status.HTTP_200_OK)