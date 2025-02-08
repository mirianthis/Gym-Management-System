from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MemberListCreateView, MemberViewSet

router = DefaultRouter()
router.register(r'members', MemberViewSet)

urlpatterns = [
    path('', include(router.urls)),  # This will handle the /members/ endpoint with viewset.
    path('members/', MemberListCreateView.as_view(), name='members-list')  # If you want to keep this as well for manual view.
]
