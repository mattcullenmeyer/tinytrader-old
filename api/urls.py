from django.urls import include, path
#from api.views import HappyView, HelloView, TickerView
from api import views
from rest_framework import routers

# https://www.django-rest-framework.org/tutorial/quickstart/
router = routers.DefaultRouter()
router.register(r'ticker', views.TickerViewSet)
router.register(r'sector', views.SectorViewSet)
router.register(r'industry', views.IndustryViewSet)
router.register(r'size', views.SizeViewSet)
router.register(r'metadata', views.MetadataViewSet)
router.register(r'metric', views.MetricViewSet)

app_name = 'api'
urlpatterns = [
	path('', include(router.urls)),
]