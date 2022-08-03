from django.db import models

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)




class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=200, unique=True)
   


class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    customer = models.CharField(max_length=200)
    date = models.DateField()
    time = models.TimeField()
    technician = models.ForeignKey(Technician, related_name="appointments", on_delete=models.CASCADE)
    reason = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)