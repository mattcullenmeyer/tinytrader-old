from django.urls import path
from api.views import HappyView, HelloView, TickerView

app_name = 'api'
urlpatterns = [
	path('happy/', HappyView.as_view(), name='happy'),
	path('hello/', HelloView.as_view(), name='hello'),
	path('ticker/', TickerView.as_view(), name='ticker'),
]