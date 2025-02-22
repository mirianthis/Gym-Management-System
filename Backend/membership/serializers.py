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

        category, _ = MembershipCategory.objects.get_or_create(name=category_name) if category_name else (None, None)
        
        if installment_plan_name:
            duration, duration_type = installment_plan_name.split()
            installment_plan, _ = InstallmentPlan.objects.get_or_create(duration_number=int(duration), duration_type=duration_type)
            installment_plan_name = f"{installment_plan.duration_number} {installment_plan.duration_type}"

        membership = Membership.objects.create(
            category=category.name if category else None,  # Save category name
            installment_plan=installment_plan_name,  # Save installment_plan as string
            **validated_data
        )
        return membership

    def update(self, instance, validated_data):
        category_name = validated_data.pop('category', None)
        installment_plan_name = validated_data.pop('installment_plan', None)

        if category_name:
            instance.category = MembershipCategory.objects.get_or_create(name=category_name)[0].name
        if installment_plan_name:
            duration, duration_type = installment_plan_name.split()
            plan, _ = InstallmentPlan.objects.get_or_create(duration_number=int(duration), duration_type=duration_type)
            instance.installment_plan = f"{plan.duration_number} {plan.duration_type}"

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class MembershipListSerializer(serializers.ModelSerializer):
    installment_plan = serializers.CharField()  # Store installment plan as a string

    class Meta:
        model = Membership
        fields = ['id', 'name', 'period', 'installment_plan', 'signup_fee']

    def update(self, instance, validated_data):
        # Handle installment plan update
        installment_plan_name = validated_data.get('installment_plan')
        if installment_plan_name:
            try:
                duration, duration_type = installment_plan_name.split()
                installment_plan, _ = InstallmentPlan.objects.get_or_create(
                    duration_number=int(duration), duration_type=duration_type
                )
                instance.installment_plan = f"{installment_plan.duration_number} {installment_plan.duration_type}"
            except ValueError:
                raise serializers.ValidationError({"installment_plan": "Invalid format. Expected format: '<number> <type>' (e.g., '6 Months')"})

        # Handle other fields
        instance.name = validated_data.get('name', instance.name)
        instance.period = validated_data.get('period', instance.period)
        instance.signup_fee = validated_data.get('signup_fee', instance.signup_fee)
        
        instance.save()
        return instance
