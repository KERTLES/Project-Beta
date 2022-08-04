from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from django.http import JsonResponse
from .models import SalesPerson, Customer, AutomobileVO, SalesRecord
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

class AutoVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties =[
        "vin",
        "name"
    ]


class SalesListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "automobile",
        "sales_person",
        "customer",
        "price",
        "vin",
    ]

    encoders = {"vin": AutoVODetailEncoder()}



@require_http_methods(["GET", "POST"])
def api_list_sales(request, sales_person_id=None):
    if request.method == "GET":
        if sales_person_id is None:
            sale = SalesRecord.objects.all()

            return JsonResponse(
                {"Sales Record": sale},
                encoder=SalesListEncoder,)
        else: 
            sales = SalesRecord.objects.filter(sales_person = sales_person_id)
            return JsonResponse({"Sales record": sales}, encoder=SalesListEncoder,)

            

    else:
        content = json.loads(request.body)
        sale = SalesRecord.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SalesListEncoder,
            safe=False)


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
            costumers,
            encoder=CostumerListEncoder,
            safe=False,
        )
