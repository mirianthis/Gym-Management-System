from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StaffListViewSet, StaffRoleViewSet, StaffSpecializationViewSet, StaffViewSet

# Using DefaultRouter to automatically generate URLs for ViewSets
router = DefaultRouter()
router.register(r'staff', StaffViewSet, basename='staff')
router.register(r'roles', StaffRoleViewSet, basename='role')
router.register(r'specializations', StaffSpecializationViewSet, basename='specialization')

urlpatterns = [
    path('', include(router.urls)),  # This will handle CRUD for /staff/
    path('staff-list/', StaffListViewSet.as_view(), name='staff-list'),  # Custom staff list view
]
