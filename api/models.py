from django.db import models
from django.contrib.auth.models import User

class Products(models.Model):
    name = models.TextField()
    price = models.CharField(max_length=20)
    prevPrice = models.CharField(max_length=20, null=True, blank=True)
    image = models.TextField()
    CHOICES = (("MENS", "mens"),("WOMENS", "womens"),("FOOD", "food"),("FUNITURE", "funiture"),("DIGITAL", "digital"))
    category = models.CharField(max_length=20, choices=CHOICES)
    CHOICES2 = (("1", "1"),("1.5", "1.5"),("2", "2"),("2.5", "2.5"),("3", "3"),
    ("3.5", "3.5"),("4", "4"),("4.5", "4.5"),("5", "5"))
    star =  models.CharField(max_length=20, choices=CHOICES2)
    color = models.CharField(max_length=20, null=True, blank=True)
    eta = models.CharField(max_length=20)
    hotDeal =  models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name[0:50] 

class Cart(models.Model):
    username = models.TextField()
    cartList = models.TextField()