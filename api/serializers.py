from rest_framework import serializers
#from api import models
from . import models

# https://www.django-rest-framework.org/api-guide/serializers

class TickerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ticker
        #fields = '__all__'
        fields = ('id', 'ticker',)
