from django.contrib.auth.models import User
from base.serializer import UserSerializer
from base.authentication import create_access_token, create_refresh_token, decode_access_token, decode_refresh_token

from rest_framework import status
from rest_framework.authentication import get_authorization_header
from rest_framework.response import Response
from rest_framework.exceptions import APIException, AuthenticationFailed
from rest_framework.views import APIView
from rest_framework import exceptions


class RegisterAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginAPIView(APIView):
    def post(self, request):
        user = User.objects.filter(email=request.data['username']).first()

        if not user:
            raise APIException('E-posta adresiniz ve/veya şifreniz hatalı.')
        if not user.check_password(request.data['password']):
            raise APIException('E-posta adresiniz ve/veya şifreniz hatalı.')

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        response = Response()

        response.data = {
            'token': access_token,
            'refresh': refresh_token
        }

        return response


class UserAPIView(APIView):

    def get(self, request):

        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)
            user = User.objects.filter(pk=id).first()
            return Response(UserSerializer(user).data)
        raise AuthenticationFailed('unauthenticated')


class UserUpdateAPIView(APIView):

    def put(self, request):
        user = User.objects.filter(id=request.data['id']).first()

        if not user.check_password(request.data['password']):
            raise APIException('Hatalı Şifre')

        user = request.user
        serializer = UserSerializer(user)
        data = request.data
        user = User.objects.filter().first()
        print(user.last_name)
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        user.email = data['email']
        user.save()

        print(data)

        return Response(serializer.data)


class RefreshAPIView(APIView):
    def post(self, request):
        id = decode_refresh_token(request.data['refresh'])
        access_token = create_access_token(id)
        return Response({
            'token': access_token
        })


"""@api_view(['POST'])



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user_profile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    if data['password'] != '':
        user.password = make_password(data['password'])
    user.save()

    return Response(serializer.data)
"""
