from django.urls import path
from .views import HomeView, AboutView, RankingView 

app_name = 'pages'
urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('about/', AboutView.as_view(), name='about'),
    path('<ticker>/', RankingView.as_view(), name='ranking'),
]