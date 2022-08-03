from urllib import request
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from django.http import JsonResponse
from .models import SalesPerson, Customer, AutomobileVO
# Create your views here.


class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number"

    ]


class CostumerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]


@require_http_methods(["GET", "POST"])
def salesPerson_list_view(request, auto_vin=None):
    if request.method == "GET":
        if auto_vin is None:
            sales_person = SalesPerson.objects.all()

            return JsonResponse(
                {"sales person": sales_person},
                encoder=SalesPersonDetailEncoder,)

    else:
        content = json.loads(request.body)

        # auto_vin = content["vin"]
        # autoMobile = AutomobileVO.objects.get(vin = auto_vin)
        # content["automobile"] = autoMobile
        # employeeNum = content["employee_number"]
        employee = SalesPerson.objects.create(**content)
        return JsonResponse(
            employee,
            encoder=SalesPersonDetailEncoder,
            safe=False)



@require_http_methods(["POST", "GET"])
def customer_list_view(request):
    if request.method == "GET":
        constumers = Customer.objects.all()
        return JsonResponse(
            {"constumers": constumers},
            encoder=CostumerListEncoder,
        )
    else:
        content = json.loads(request.body)
        costumers = Customer.objects.create(**content)
        return JsonResponse(
            constumers,
            encoder=CostumerListEncoder,
            safe=False,
        )
