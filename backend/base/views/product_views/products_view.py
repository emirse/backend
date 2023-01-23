
from rest_framework.response import Response
from base.models import Product
from base.serializer import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.exceptions import APIException, AuthenticationFailed



class get_product(APIView):

    def get(self, request):
      
        product = Product.objects.all()
        serializer = ProductSerializer(product)

        return Response(serializer.data)


class get_product(APIView):

    def get(self, request,slug):
     
        product = Product.objects.get(slug=slug)
        serializer = ProductSerializer(product)
    
        return Response(serializer.data)
        