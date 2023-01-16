
from rest_framework.response import Response
from base.models import Category
from base.serializer import CategorySerializer
from rest_framework.decorators import api_view
from rest_framework import generics
<<<<<<< HEAD



class get_category(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
=======
from django.views.decorators.csrf import csrf_exempt


class get_category(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
 
>>>>>>> df0ee14 (fix)
    def list(self, request, *args, **kwargs):
        qs = self.get_queryset().get_descendants(include_self=True).get_cached_trees()
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)
        