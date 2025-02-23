from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GymSettingsViewSet

# Create a router and register the viewset
router = DefaultRouter()
router.register(r'settings', GymSettingsViewSet, basename='settings')

urlpatterns = [
    path('', include(router.urls)),  # Includes all routes from the router
]
