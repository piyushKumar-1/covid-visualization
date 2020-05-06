from django.conf.urls import url,include
from django.contrib import admin
from django.urls import path



urlpatterns = [
    path('', include('makedata.urls')),
    path('', include('frontend.urls')),

]
