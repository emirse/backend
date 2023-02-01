from django.contrib.auth.models import User
from base.serializer import UserSerializer, UserDetailUpdateSerializer
from base.authentication import create_access_token, create_refresh_token, decode_access_token, decode_refresh_token
from rest_framework import status
from rest_framework.authentication import get_authorization_header
from rest_framework.response import Response
from rest_framework.exceptions import APIException, AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404


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


class RefreshAPIView(APIView):
    def post(self, request):
        id = decode_refresh_token(request.data['refresh'])
        access_token = create_access_token(id)
        return Response({
            'token': access_token
        })


class UserDetailUpdateAPIView(APIView):

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
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        user = self.get_object(request)
        if request.data['username'] == "":
            request.data['username'] = user.email
        serializer = UserDetailUpdateSerializer(user, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
