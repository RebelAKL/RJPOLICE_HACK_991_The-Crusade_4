from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework import generics, renderers
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import *
from django.conf import settings

# from ...OCR.ocr import OCR
# Create your views here.


class FileUploadView(generics.CreateAPIView):
    serializer_class = UserUploadedFileSerializer
    renderer_classes = [renderers.JSONRenderer]

    def post(self, request, *args, **kwargs):
        serializer = UserUploadedFileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(
            {"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
        )


class UserUploadedFileView(generics.RetrieveAPIView):
    serializer_class = UserUploadedFileSerializer
    renderer_classes = [renderers.JSONRenderer]

    def get(self, request, *args, **kwargs):
        user_uploaded_file = UserUploadedFile.objects.latest("id")
        relative_file_url = str(user_uploaded_file.file)
        base_url = str(settings.BASE_DIR)
        absolute_url = base_url+"/"+relative_file_url
        print(absolute_url)

        return Response({"url":absolute_url})