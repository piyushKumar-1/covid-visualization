from django.db import models

class database(models.Model):
    index = models.AutoField(primary_key=True)
    Country = models.CharField(max_length=50)
    Total_Cases = models.IntegerField()
    New_Cases = models.IntegerField()
    Total_Deaths = models.IntegerField()
    New_Deaths = models.IntegerField()
    Total_Recovered = models.IntegerField()
    Active_Cases = models.IntegerField()
    Critical = models.IntegerField()
    Tot_Cases_pm = models.IntegerField()
    Deaths_pm = models.IntegerField()
    Total_Tests = models.IntegerField()
    Tests_pm = models.IntegerField()


class daily(models.Model):
    index = models.AutoField(primary_key=True)
    location = models.CharField(max_length=50)
    date = models.DateField(auto_now_add=True)
    total_cases = models.IntegerField()
    new_cases = models.IntegerField()
    total_deaths = models.IntegerField()
    new_deaths = models.IntegerField()














