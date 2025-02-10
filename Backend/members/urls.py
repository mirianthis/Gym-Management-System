from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MemberViewSet, MemberListView

# Register ViewSet with Router
router = DefaultRouter()
router.register(r'members', MemberViewSet, basename='member')

urlpatterns = [
    path('', include(router.urls)),  # This will handle CRUD for /members/
    path('members-list/', MemberListView.as_view(), name='members-list'),  # Custom member list view
]
