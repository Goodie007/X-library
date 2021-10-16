from rest_framework import serializers
from  .models import Book


class BookSerializer(serializers.ModelSerializer):
	class Meta:
		model = Book
		fields = ['pdf', 'cover', 'title', 'author', 'genre', 'description', 'slug'] 