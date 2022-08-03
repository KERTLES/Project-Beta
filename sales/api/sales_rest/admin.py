from django.contrib import admin

# Register your models here.
from .models import Customer, SalesPerson, AutomobileVO, SalesRecord


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass


@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass


@admin.register(SalesRecord)
class SalesRecordAdmin(admin.ModelAdmin):
    pass
