#from rest_framework import viewsets
#from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

#from api import models
#from .models import Ticker
#from api import serializers
#from .serializers import TickerSerializer

# https://www.django-rest-framework.org/api-guide/viewsets/

class HelloView(APIView):
    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

#class TickerViewSet(viewsets.ModelViewSet):
#class TickerViewSet(generics.ListAPIView):
#class TickerViewSet(viewsets.APIView):
	#serializer_class = serializers.TickerSerializer
	#serializer_class = TickerSerializer
	#queryset = models.Ticker.objects.all()
	#queryset = Ticker.objects.all()
	#def get(self, request):
	#	content = {'message': 'Hello, Matt'}
	#	return Response(content)

from django.views.generic import ListView, DetailView
from django.shortcuts import render

from blog.models import Post


class BlogListView(ListView):
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    template_name = 'blog/blog_list.html'