from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Django admin
    path('admin/', admin.site.urls),

    # Local apps
    path('', include('pages.urls')),
    path('', include('blog.urls')),
    path('', include('api.urls')),
]
