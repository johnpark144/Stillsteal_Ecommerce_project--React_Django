from django.contrib import admin
from .models import Products, Cart

class ProductsAdmin(admin.ModelAdmin):
    search_fields = ['name'] 

class CartAdmin(admin.ModelAdmin):
    search_fields = ['userName'] 

admin.site.register(Products, ProductsAdmin)
admin.site.register(Cart, CartAdmin)