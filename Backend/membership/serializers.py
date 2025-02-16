from rest_framework import serializers
from .models import InstallmentPlan, Membership, MembershipCategory

# Serializers
class MembershipCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MembershipCategory
        fields = '__all__'

class InstallmentPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstallmentPlan
        fields = '__all__'

class MembershipSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=MembershipCategory.objects.all())  # Use ID
    installment_plan = serializers.PrimaryKeyRelatedField(queryset=InstallmentPlan.objects.all())

    class Meta:
        model = Membership
        fields = '__all__'

class MembershipListSerializer(serializers.ModelSerializer):
    installment_plan = serializers.PrimaryKeyRelatedField(queryset=InstallmentPlan.objects.all())

    class Meta:
        model = Membership
        fields = ['name', 'period', 'installment_plan', 'signup_fee']
