from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response

class HappyView(TemplateView):
    template_name = 'pages/home.html'


class HelloView(APIView):
    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

#class HelloView(TemplateView):
#    template_name = 'pages/about.html'