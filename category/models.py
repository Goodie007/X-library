from django.db import models



# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField()
    parent = models.ForeignKey('self', blank=True, null=True, related_name='child', on_delete=models.CASCADE) 



    def save(self):
        	super().save()