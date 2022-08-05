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
        "employee_number",
        "id"

    ]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id",
    ]


class AutoVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "name"
    ]


class SalesListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "sales_person",
        "customer",
        "price",
        "vin",
    ]
    encoders = {"vin": AutoVODetailEncoder(), "customer": CustomerListEncoder(
    ), "sales_person": SalesPersonDetailEncoder()}


@require_http_methods(["GET"])
def api_list_AutomovileVOs(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutoVODetailEncoder)


@require_http_methods(["GET", "POST"])
def api_list_sales(request, sales_person_id=None):
    if request.method == "GET":
        if sales_person_id is None:
            sale = SalesRecord.objects.all()

            return JsonResponse(
                {"sales_record": sale},
                encoder=SalesListEncoder)

        else:
            sales = SalesRecord.objects.filter(sales_person=sales_person_id)
            return JsonResponse({"sales_record": sales}, encoder=SalesListEncoder,)

    else:
        content = json.loads(request.body)

        try:

            auto_vin = content["vin"]
            automobile = AutomobileVO.objects.get(vin=auto_vin)

            # obj, created = SalesRecord.objects.get_or_create(vin=automobile)
            # try:

            # if created:
            #     return JsonResponse({"message": "Vehicle already sold."})

            content["vin"] = automobile

            salesPerson = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=salesPerson)
            content["sales_person"] = sales_person

            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Vehicle id, Sales person id, or customer id"},
                status=400,
            )

        # obj, created = SalesRecord.objects.get_or_create(**content)
        try:
            sale = SalesRecord.objects.get(vin=automobile)
            return JsonResponse({"message": "Vin already in record"})
        except:
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
                {"sales_persons": sales_person},
                encoder=SalesPersonDetailEncoder,)

    else:
        content = json.loads(request.body)
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
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )
