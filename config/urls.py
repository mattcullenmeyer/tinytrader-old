from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    # Django admin
    path('admin/', admin.site.urls),

    # User management
    path('', include('allauth.urls')), 

    # Local apps
    path('', include('pages.urls')),
    path('', include('api.urls')),
    path('', include('blog.urls')),

    # https://www.django-rest-framework.org/topics/api-clients/#javascript-client-library
    path('docs/', include_docs_urls(title='My API service'), name='api-docs'),
]
