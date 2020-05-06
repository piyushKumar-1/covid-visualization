from django.conf.urls import url
from django.urls import path
from . import views
app_name = "makedata"


urlpatterns = [

    path('all/<c_name>', views.allk, name='allk'),
    path('datar/<k>', views.datar, name='datar'),
]
