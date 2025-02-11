from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InstallmentPlanViewSet, MembershipCategoryViewSet, MembershipViewSet

# Using DefaultRouter to automatically generate URLs for ViewSets
router = DefaultRouter()
router.register(r'memberships', MembershipViewSet, basename='membership')
router.register(r'categories', MembershipCategoryViewSet, basename='category')
router.register(r'installments', InstallmentPlanViewSet, basename='installment')

urlpatterns = [
    path('', include(router.urls)),  # Includes all ViewSet routes
]


