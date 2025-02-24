from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GymSettingsViewSet, check_settings_exists

# Create a router and register the viewset
router = DefaultRouter()
router.register(r'settings', GymSettingsViewSet, basename='settings')

urlpatterns = [
    path('', include(router.urls)),  # Includes all routes from the router
    path('check/', check_settings_exists, name='check-settings'),  # Manually register the function-based view
]
