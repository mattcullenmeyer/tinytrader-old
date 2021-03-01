from django.urls import path
from apps.views import RankingView, ReactView

app_name = 'apps'
urlpatterns = [
    path('react/', ReactView.as_view(), name='react'),
    path('<ticker>/', RankingView.as_view(), name='ranking'),
]