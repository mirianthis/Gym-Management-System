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
    category = MembershipCategorySerializer()  # Nested category
    installment_plan = InstallmentPlanSerializer()  # Nested installment plan

    class Meta:
        model = Membership
        fields = '__all__'
