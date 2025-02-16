from rest_framework import serializers
from .models import Role, Specialization, Staff

# Serializers
class StaffRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

class StaffSpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    role = serializers.PrimaryKeyRelatedField(queryset=Role.objects.all())  # Use ID
    specialization = serializers.PrimaryKeyRelatedField(queryset=Specialization.objects.all())

    class Meta:
        model = Staff
        fields = '__all__'

class StaffListSerializer(serializers.ModelSerializer):
    role = serializers.PrimaryKeyRelatedField(queryset=Role.objects.all())

    class Meta:
        model = Staff
        fields = ['first_name', 'role', 'email', 'mobile_number']
