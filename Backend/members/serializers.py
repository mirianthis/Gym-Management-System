from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class MemberListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['member_id', 'first_name', 'inquiry_date', 'trial_end_date']
