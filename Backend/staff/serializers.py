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
    # For GET: Use related object's name
    role_name = serializers.CharField(source='role.name', read_only=True)
    specialization_name = serializers.CharField(source='specialization.name', read_only=True)

    # For POST/PUT: Accept string names
    role = serializers.CharField(write_only=True)
    specialization = serializers.CharField(write_only=True)

    class Meta:
        model = Staff
        fields = '__all__'

    def create(self, validated_data):
        role_name = validated_data.pop('role', None)
        specialization_name = validated_data.pop('specialization', None)

        role = Role.objects.get_or_create(name=role_name)[0] if role_name else None
        specialization = Specialization.objects.get_or_create(name=specialization_name)[0] if specialization_name else None

        staff = Staff.objects.create(role=role, specialization=specialization, **validated_data)
        return staff

    def update(self, instance, validated_data):
        role_name = validated_data.pop('role', None)
        specialization_name = validated_data.pop('specialization', None)

        if role_name:
            instance.role = Role.objects.get_or_create(name=role_name)[0]
        if specialization_name:
            instance.specialization = Specialization.objects.get_or_create(name=specialization_name)[0]

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class StaffListSerializer(serializers.ModelSerializer):
    role = serializers.CharField(max_length=100)

    class Meta:
        model = Staff
        fields = ['id', 'first_name', 'role', 'email', 'mobile_number']

    def update(self, instance, validated_data):
        # Handle role update by name
        role_name = self.initial_data.get('role')
        if role_name:
            role, created = Role.objects.get_or_create(name=role_name)
            instance.role = role.name  # Use the role's name instead of the Role instance

        # Handle other fields
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.email = validated_data.get('email', instance.email)
        instance.mobile_number = validated_data.get('mobile_number', instance.mobile_number)
        instance.save()
        return instance

