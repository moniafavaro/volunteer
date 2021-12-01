from rest_framework.response import Response
from .serializers import CompanySerializer
from rest_framework.views import APIView
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from .models import Company

class CompanyListView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serialized_companies = CompanySerializer(companies, many=True)
        return Response(serialized_companies.data, status=status.HTTP_200_OK)