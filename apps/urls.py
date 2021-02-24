from django.urls import path
from apps.views import RankingView 

app_name = 'apps'
urlpatterns = [
    path('<ticker>/', RankingView.as_view(), name='ranking'),
]