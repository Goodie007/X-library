from django.shortcuts import render
from .serializers import BookSerializer
from rest_framework import generics
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from .models import Book


# Create your views here.
def bookList(request):
	if request.method == 'GET':
		book_list = Book.objects.all()
		serializer = BookSerializer(book_list, many=True)
		return JsonResponse(serializer.data, safe=False)


	elif request.method == 'POST':
		data = JSONParser().parse(request)
		serializer = BookSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data, status=201)
		return JsonResponse(serializer.errors, status=400)