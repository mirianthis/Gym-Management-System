from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MemberListCreateView, MemberViewSet

router = DefaultRouter()
router.register(r'members', MemberViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('members/', MemberListCreateView.as_view(), name='members-list')
]
