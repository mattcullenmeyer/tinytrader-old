from rest_framework import viewsets, permissions
from api import models
from api import serializers


# https://www.django-rest-framework.org/api-guide/viewsets/
# https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/

class TickerViewSet(viewsets.ModelViewSet):
    queryset = models.Ticker.objects.all()
    serializer_class = serializers.TickerSerializer
    lookup_field = 'ticker'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class SectorViewSet(viewsets.ModelViewSet):
    queryset = models.Sector.objects.all()
    serializer_class = serializers.SectorSerializer

class IndustryViewSet(viewsets.ModelViewSet):
    queryset = models.Industry.objects.all()
    serializer_class = serializers.IndustrySerializer

class SizeViewSet(viewsets.ModelViewSet):
    queryset = models.MarketCapSize.objects.all()
    serializer_class = serializers.SizeSerializer

class MetadataViewSet(viewsets.ModelViewSet):
    queryset = models.Metadata.objects.all()
    serializer_class = serializers.MetadataSerializer
    lookup_field = 'ticker'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filterset_fields = '__all__' # https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend

class MetricViewSet(viewsets.ModelViewSet):
    queryset = models.Metric.objects.all()
    serializer_class = serializers.MetricSerializer
    lookup_field = 'ticker'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    #filterset_fields = '__all__'