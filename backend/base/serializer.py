<<<<<<< HEAD
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import serializers
from base.models import Product
=======

from django.contrib.auth.models import User
>>>>>>> df0ee14 (fix)
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from base.models import Category
<<<<<<< HEAD


class CategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
=======
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from rest_framework.exceptions import APIException, AuthenticationFailed


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):

        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CategorySerializer(ModelSerializer):
    children = SerializerMethodField()
>>>>>>> df0ee14 (fix)

    class Meta:
        model = Category
        fields = '__all__'

    def get_children(self, obj):
        serializer = self.__class__(
            obj.get_children(), many=True, context=self.context)
        return serializer.data
<<<<<<< HEAD


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'last_name', 'username', 'email', 'name', 'isAdmin']

    def get_id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        print(serializer)
        for k, v in serializer.items():
            data[k] = v
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
=======
>>>>>>> df0ee14 (fix)
