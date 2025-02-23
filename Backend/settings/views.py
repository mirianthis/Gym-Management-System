from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import GymSettings
from .serializers import GymSettingsSerializer

class GymSettingsViewSet(viewsets.ModelViewSet):
    queryset = GymSettings.objects.all()
    serializer_class = GymSettingsSerializer

    def create(self, request, *args, **kwargs):
        """Handles creating or updating GymSettings (only one instance should exist)."""
        gym_settings = GymSettings.objects.first()
        serializer = self.get_serializer(gym_settings, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK if gym_settings else status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def list(self, request, *args, **kwargs):
        """Returns the single GymSettings instance if it exists."""
        gym_settings = GymSettings.objects.first()
        
        if gym_settings:
            serializer = self.get_serializer(gym_settings)
            return Response(serializer.data)
        
        return Response({"detail": "Gym settings not found."}, status=status.HTTP_404_NOT_FOUND)
