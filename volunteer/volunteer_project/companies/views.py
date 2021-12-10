from rest_framework.response import Response
from jobs.serializers import JobSerializer
from .serializers import CompanySerializer
from rest_framework.views import APIView
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from .models import Company
from jobs.models import Job

class CompanyDetailView(APIView):
    def delete(self, request, pk):
        try:
            company = Company.objects.get(id=pk)
            company.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        company = Company.objects.get(id=pk)
        updated_company = CompanySerializer(company, data=request.data, partial=True)
        if updated_company.is_valid():
            updated_company.save()
            return Response(updated_company.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_company.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):

        company = Company.objects.get(id=pk)
        serialized_company = CompanySerializer(company)
        return Response(serialized_company.data, status=status.HTTP_200_OK)

class CompanyListView(APIView):
    def post(self, request):
        company = CompanySerializer(data = request.data)
        if company.is_valid():
            company.save()
            return Response(company.data, status=status.HTTP_201_CREATED)
        else:
            return Response(company.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request):
        params = request.GET
        if 'userId' in params.keys():
            user_id = params['userId']
            companies = Company.objects.filter(user_id=user_id)
            serialized_companies = CompanySerializer(companies, many=True)
            return Response(serialized_companies.data, status=status.HTTP_200_OK)
        else:
            companies = Company.objects.all()
            serialized_companies = CompanySerializer(companies, many=True)
            return Response(serialized_companies.data, status=status.HTTP_200_OK)

class CompanyJobView(APIView):
    def get(self, request, pk):
        jobs = Job.objects.filter(company_id=pk)
        serialized_jobs = JobSerializer(jobs, many=True)
        return Response(serialized_jobs.data, status=status.HTTP_200_OK)