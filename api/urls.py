from django.urls import include, path
#from api.views import HappyView, HelloView, TickerView
from api import views
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

# https://www.django-rest-framework.org/tutorial/quickstart/
router = routers.DefaultRouter()
router.register(r'ticker', views.TickerViewSet, 'ticker')
router.register(r'ticker/<ticker>/', views.TickerViewSet, 'ticker-detail')
router.register(r'sector', views.SectorViewSet, 'sector')
router.register(r'industry', views.IndustryViewSet, 'industry')
router.register(r'size', views.SizeViewSet, 'size')
router.register(r'metadata', views.MetadataViewSet, 'metadata')
router.register(r'metric', views.MetricViewSet, 'metric')
router.register(r'metric/<ticker>/', views.MetricViewSet, 'metric-detail')

app_name = 'api'
urlpatterns = [
	path('api/', include(router.urls)),
	path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]