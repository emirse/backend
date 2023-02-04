
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from base.models import Category, Product, Shop
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from rest_framework.exceptions import APIException, AuthenticationFailed
from rest_framework import serializers


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


class UserDetailUpdateSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email']

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)


class CategorySerializer(ModelSerializer):
    children = SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    def get_children(self, obj):
        serializer = self.__class__(
            obj.get_children(), many=True, context=self.context)
        return serializer.data


class ProductSerializer(ModelSerializer):
    # shop=serializers.StringRelatedField() model üzerindeki str içerisini return ediyor
    # shop=ShopSerializer() shop içerisindeki bilgileri getiriyor
    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        pass


class ShopSerializer(ModelSerializer):

    class Meta:
        model = Shop
        fields = '__all__'


# product=ProductSerializer(many=True,read_only=True)
# product =serializers.HyperLinked(many=true,read_obly=True,view_name='url view name')
