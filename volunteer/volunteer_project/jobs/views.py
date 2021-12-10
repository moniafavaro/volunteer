from rest_framework.response import Response
from rest_framework.views import APIView
from volunteers.models import Volunteer
from volunteers.serializers import VolunteerSerializer
from .serializers import JobSerializer
from django.http import HttpResponse
from rest_framework import status
from .models import Job

class JobDetailView(APIView):
    def delete(self, request, pk):
        try:
            job = Job.objects.get(id=pk)
            job.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        job = Job.objects.get(id=pk)
        updated_job = JobSerializer(job, data=request.data, partial=True)
        if updated_job.is_valid():
            updated_job.save()
            return Response(updated_job.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_job.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        job = Job.objects.get(id=pk)
        serialized_job = JobSerializer(job)
        return Response(serialized_job.data, status=status.HTTP_200_OK)

class JobListView(APIView):
    def post(self, request):
        job = JobSerializer(data=request.data)
        if job.is_valid():
            job.save()
            return Response(job.data, status=status.HTTP_201_CREATED)
        else:
            return Response(job.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request):
        params = request.GET
        if 'closed' in params.keys():
            closed = params['closed']
            jobs = Job.objects.filter(closed=closed)
            serialized_jobs = JobSerializer(jobs, many=True)
            return Response(serialized_jobs.data, status=status.HTTP_200_OK)
        else:
            jobs = Job.objects.all()
            serialized_jobs = JobSerializer(jobs, many=True)
            return Response(serialized_jobs.data, status=status.HTTP_200_OK)

class JobVolunteerView(APIView):
    def get(self, request, pk):
        volunteers = Volunteer.objects.filter(id=pk)
        serialized_volunteers = VolunteerSerializer(volunteers, many=True)
        return Response(serialized_volunteers.data, status=status.HTTP_200_OK)