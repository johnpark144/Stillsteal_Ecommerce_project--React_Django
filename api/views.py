from rest_framework.response import Response   
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .serializers import ProductsSerializer, CreateUserSerializer, CartSerializer
from .models import Products, Cart

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/products/',
            'method': 'GET',
            'body': None,
            'description': 'all products in "stillsteal" ecommerce site'
        },
        {
            'Endpoint': '/products/id',
            'method': 'GET',
            'body': None,
            'description': 'single product'
        },
        {
            'Endpoint': '/createuser/',
            'method': 'POST',
            'description': 'Signup'
        },
        {
            'Endpoint': '/token/',
        },
        {
            'Endpoint': '/token/refresh',
        }
    ]
    return Response(routes)

# User Login, Token
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Signup
@api_view(['POST'])
def createUser(request):
    if request.method == 'POST':
        data = request.data
        username = data['username']
        
        if User.objects.filter(username=username).exists():
            return Response(status=400, data=dict(message="Beacuase the user already exists"))

        user = User.objects.create(
            username = username,
            password = make_password(data['password']),
            email = data['email'],
        )

        serialzer = CreateUserSerializer(user, many=False)
        return Response(serialzer.data)

# cartList
@api_view(['GET','POST'])
def cartList(request):
    if request.method == 'GET':
        cart = Cart.objects.all()
        serialzer = CartSerializer(cart, many=True) # many=True 여러개 serialize
        return Response(serialzer.data)

    if request.method == 'POST':
        data = request.data
        username = data['username']
        cartList = data['cartList']

        # If there is Cartlist already, delete it
        if Cart.objects.filter(username=User.objects.get(username=username)).exists():
            cart = Cart.objects.filter(username=User.objects.filter(username=username)[0])[0]
            cart.delete()

        # Create New cartlist
        cart = Cart.objects.create(
            username=User.objects.filter(username=username)[0],
            cartList=cartList,
        )
        serialzer = CartSerializer(cart, many=False)
        return Response(serialzer.data)

# Products
@api_view(['GET'])
def getProducts(request):
    if request.method == 'GET':
        notes = Products.objects.all().order_by('-created')
        serialzer = ProductsSerializer(notes, many=True)
        return Response(serialzer.data)

# Products Detail
@api_view(['GET'])
def getProduct(request, pk):
    if request.method == 'GET':
        notes = Products.objects.get(id=pk)
        serialzer = ProductsSerializer(notes, many=False)
        return Response(serialzer.data)
 
