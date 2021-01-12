from rest_framework import viewsets
from api import models
from api import serializers
from rest_framework.permissions import IsAuthenticated

# https://www.django-rest-framework.org/api-guide/viewsets/

class TickerViewSet(viewsets.ModelViewSet):
    queryset = models.Ticker.objects.all()
    serializer_class = serializers.TickerSerializer

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

class MetricViewSet(viewsets.ModelViewSet):
    queryset = models.Metric.objects.all()
    serializer_class = serializers.MetricSerializer