from django.shortcuts import render
from .serializers import CategorySerializer
from rest_framework import generics
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from .models import Category


# Create your views here.
def categoryList(request):
	if request.method == 'GET':
		category_list = Category.objects.all()
		serializer = CategorySerializer(category_list, many=True)
		return JsonResponse(serializer.data, safe=False)


	elif request.method == 'POST':
		data = JSONParser().parse(request)
		serializer = CategorySerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data, status=201)
		return JsonResponse(serializer.errors, status=400)