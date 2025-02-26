"""
URL configuration for gym_management_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.http import HttpResponseRedirect
from django.urls import path, include
from django.conf.urls.static import static
from gym_management_system import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/members/', include('members.urls')),
    path('api/membership/', include('membership.urls')),
    path('api/staff/', include('staff.urls')),
    path('api/settings/', include('settings.urls')),
    path('api/authentication/', include('authentication.urls')),

]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)