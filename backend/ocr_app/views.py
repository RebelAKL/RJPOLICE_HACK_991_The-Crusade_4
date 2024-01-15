from django.shortcuts import render
from rest_framework import status
from rest_framework import generics
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class FileUploadView(generics.CreateAPIView):
    pass