from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes, name='getRoutes'),
    path('products/', views.getProducts, name='getProducts'),
    path('products/<int:pk>', views.getProduct, name='getProduct'),
    path('cartlist/', views.cartList, name='cartList'),

    path('createuser/', views.createUser, name='createUser'),
    path('token/', MyTokenObtainPairView.as_view(), name='tokenObtainPair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='tokenRefresh'),
]
