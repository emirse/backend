from django.contrib.auth.models import User
from base.serializer import ShopSerializer
from base.authentication import create_access_token, create_refresh_token, decode_access_token, decode_refresh_token

from rest_framework.authentication import get_authorization_header
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from rest_framework.exceptions import APIException, AuthenticationFailed
from django.utils.text import slugify
from base.models import Shop


class CreateDetailGetShopAPIView(APIView):
    def get_object(self, request):
        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)
            user = get_object_or_404(User, pk=id)
            return user
        raise AuthenticationFailed('unauthenticated')

    def get(self, request):
        user = self.get_object(request)
        shop = Shop.objects.filter(user=user.id)
        serializer = ShopSerializer(shop, many=True)
        print(serializer.data)
        return Response(serializer.data)

    def post(self, request):
        user = self.get_object(request)
        request.data['user'] = user.id
        request.data['slug'] = slugify(request.data['shop_name'])
        serializer = ShopSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print(serializer.data)
        return Response(serializer.data)
