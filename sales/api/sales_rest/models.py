from django.db import models

class SalesRecord(models.Model):
    vin = models.OneToOneField("AutomobileVO", related_name='+', on_delete=models.PROTECT)
    sales_person = models.ForeignKey("SalesPerson", related_name="SalesRecord", on_delete=models.PROTECT)
    customer = models.ForeignKey("Customer", related_name="+", on_delete=models.PROTECT)
    price = models.PositiveBigIntegerField()


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)



class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=200)
    # phone_number = models.CharField(max_length=200)