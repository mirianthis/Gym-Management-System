from django.shortcuts import render
from rest_framework import viewsets
from .models import Member
from .serializers import MemberSerializer
from rest_framework.generics import ListCreateAPIView

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class MemberListCreateView(ListCreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
