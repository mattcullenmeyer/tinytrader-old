from django.urls import path
from blog.views import BlogListView, BlogDetailView

app_name = 'blog'
urlpatterns = [
    path('blog/', BlogListView.as_view(), name='blog'),
    path('<slug:slug>/', BlogDetailView.as_view(), name='post'),
]
