from rest_framework import viewsets
from .models import InstallmentPlan, Membership, MembershipCategory
from rest_framework.decorators import action
from .serializers import InstallmentPlanSerializer, MembershipCategorySerializer, MembershipSerializer

# ViewSets
class MembershipCategoryViewSet(viewsets.ModelViewSet):
    queryset = MembershipCategory.objects.all()
    serializer_class = MembershipCategorySerializer

class InstallmentPlanViewSet(viewsets.ModelViewSet):
    queryset = InstallmentPlan.objects.all()
    serializer_class = InstallmentPlanSerializer

class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.all()
    serializer_class = MembershipSerializer

    @action(detail=True, methods=['post'])
    def add_category(self, request, pk=None):
        membership = self.get_object()
        category_name = request.data.get('name')
        category, created = MembershipCategory.objects.get_or_create(name=category_name)
        membership.category = category
        membership.save()
        return Response({'status': 'Category added'})

    @action(detail=True, methods=['post'])
    def add_installment_plan(self, request, pk=None):
        membership = self.get_object()
        duration = request.data.get('duration')
        plan_type = request.data.get('plan_type')
        plan, created = InstallmentPlan.objects.get_or_create(duration=duration, plan_type=plan_type)
        membership.installment_plan = plan
        membership.save()
        return Response({'status': 'Installment plan added'})