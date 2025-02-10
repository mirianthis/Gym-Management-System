from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from .models import Member
from .serializers import MemberSerializer, MemberListSerializer

# ViewSet for standard CRUD operations
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

# Class-Based View for listing only specific fields
class MemberListView(ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberListSerializer
