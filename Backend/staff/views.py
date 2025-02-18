from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from .models import Role, Specialization, Staff
from rest_framework.decorators import action
from .serializers import StaffListSerializer, StaffRoleSerializer, StaffSerializer, StaffSpecializationSerializer

# ViewSets
class StaffRoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = StaffRoleSerializer

class StaffSpecializationViewSet(viewsets.ModelViewSet):
    queryset = Specialization.objects.all()
    serializer_class = StaffSpecializationSerializer

class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

    @action(detail=True, methods=['post'])
    def add_role(self, request, pk=None):
        staff = self.get_object()
        role_name = request.data.get('name')
        role, created = Role.objects.get_or_create(name=role_name)
        staff.role = role
        staff.save()
        return Response({'status': 'Staff role added'})

    @action(detail=True, methods=['post'])
    def add_specialization(self, request, pk=None):
        staff = self.get_object()
        specialization_name = request.data.get('name')
        specialization, created = Specialization.objects.get_or_create(name=specialization_name)
        staff.specialization = specialization
        staff.save()
        return Response({'status': 'Staff specialization added'})
    
class StaffListViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffListSerializer