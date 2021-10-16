from django.db import models
from PIL import Image

# Create your models here.
class Book(models.Model):
	pdf = models.FileField(upload_to='books/pdf')
	cover = models.ImageField(upload_to='books/cover', null=True, blank=True)
	title = models.CharField(max_length=50)
	author = models.CharField(max_length=50)
	genre = models.CharField(max_length=50)
	slug = models.SlugField(null=True)
	description = models.TextField(max_length=150)
	date = models.DateTimeField()

	
	def save(self):
		super().save()