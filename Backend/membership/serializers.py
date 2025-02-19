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
    category_name = serializers.CharField(source='category.name', read_only=True)
    installment_plan_name = serializers.CharField(source='installment_plan.duration_type', read_only=True)

    # For POST/PUT: Accept string names
    category = serializers.CharField(write_only=True)
    installment_plan = serializers.CharField(write_only=True)

    class Meta:
        model = Membership
        fields = '__all__'

    def create(self, validated_data):
        category_name = validated_data.pop('category', None)
        installment_plan_name = validated_data.pop('installment_plan', None)

        category = MembershipCategory.objects.get_or_create(name=category_name)[0] if category_name else None
        installment_plan = InstallmentPlan.objects.get_or_create(name=installment_plan_name)[0] if installment_plan_name else None

        membership = Membership.objects.create(category=category, installment_plan=installment_plan, **validated_data)
        return membership

    def update(self, instance, validated_data):
        category_name = validated_data.pop('category', None)
        installment_plan_name = validated_data.pop('installment_plan', None)

        if category_name:
            instance.category = MembershipCategory.objects.get_or_create(name=category_name)[0]
        if installment_plan_name:
            instance.installment_plan = InstallmentPlan.objects.get_or_create(name=installment_plan_name)[0]

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class MembershipListSerializer(serializers.ModelSerializer):
    installment_plan = serializers.PrimaryKeyRelatedField(queryset=InstallmentPlan.objects.all())

    class Meta:
        model = Membership
        fields = ['name', 'period', 'installment_plan', 'signup_fee']

    def update(self, instance, validated_data):
        # Handle role update by name
        installment_plan_name = self.initial_data.get('installment_plan')
        if installment_plan_name:
            installment_plan, created = InstallmentPlan.objects.get_or_create(name=installment_plan_name)
            instance.installment_plan = installment_plan.name  # Use the role's name instead of the Role instance

        # Handle other fields
        instance.name = validated_data.get('name', instance.name)
        instance.period = validated_data.get('period', instance.period)
        instance.signup_fee = validated_data.get('signup_fee', instance.signup_fee)
        instance.save()
        return instance
