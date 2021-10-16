from django.db import models

# Create your models here.
class Notification(models.Model):
	reciever = models.ForeignKey(User, related_name='notifications')
	sender = models.ForeignKey(User, related_name='sent_notifications', blank=True, null=True)

	objectType = models.ForeignKey(ContentType, blank=True, null=True)
	object_id = models.PositiveIntegerField(blank=True, null=True)
	object = GenericForeignKey('ojectType', 'object_id')

	type = models.CharField(max_length=10, choices=config.NOTIFICATION_TYPE_OPTIONS)
	unread = models.BooleanField(default=True)

	slug = models.SlugField(max_length=255, unique=False, default='notification')

	dateCreated = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True)
	dateModified = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True)