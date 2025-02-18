from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StaffListViewSet, StaffRoleViewSet, StaffSpecializationViewSet, StaffViewSet

# Using DefaultRouter to automatically generate URLs for ViewSets
router = DefaultRouter()
router.register(r'staff-members', StaffViewSet, basename='staff-members')
router.register(r'staff-list', StaffListViewSet, basename='staff-list')
router.register(r'roles', StaffRoleViewSet, basename='role')
router.register(r'specializations', StaffSpecializationViewSet, basename='specialization')

urlpatterns = [
    path('', include(router.urls)),  # This will handle CRUD for /staff/
]
