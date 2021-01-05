from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response
from api import models

class HappyView(TemplateView):
    template_name = 'pages/home.html'


class HelloView(APIView):
    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

class TickerView(APIView):
    def get(self, request, format=None):
        tickers = [item.ticker for item in models.Ticker.objects.all()] #[user.username for user in User.objects.all()]
        return Response(tickers)

#class HelloView(TemplateView):
#    template_name = 'pages/about.html'