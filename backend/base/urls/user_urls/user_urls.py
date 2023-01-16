"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
<<<<<<< HEAD
from django.contrib import admin
from django.urls import path, include
from base.views.user_views.user_views import get_user_profile, update_user_profile, register_user
from base.serializer import MyTokenObtainPairView
urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='MyTokenObtainPairView'),
    path('register/', register_user, name='register-user'),
    path('profile/<str:pk>', get_user_profile, name='user-profile'),
    path('profile/update/', update_user_profile, name='update-user-profile'),
=======

from django.urls import path
from base.views.user_views.user_views import RegisterAPIView, LoginAPIView, UserAPIView, RefreshAPIView,UserUpdateAPIView
urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='MyTokenObtainPairView'),
    path('register/', RegisterAPIView.as_view(), name='register-user'),
    path('profile/', UserAPIView.as_view(), name='user-profile'),
    path('refresh/', RefreshAPIView.as_view(), name='token_refresh'),
    path('profile/update', UserUpdateAPIView.as_view(), name='update-profile'),
>>>>>>> df0ee14 (fix)
]
