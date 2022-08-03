from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number", "id"]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer",
        "time",
        "date",
        # 'datetime', 
        "technician",
        "reason",
        "vip",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            technicians,
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            technicians = Technician.objects.create(**content)
            return JsonResponse(
                technicians,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response



@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            appointments,
            encoder=AppointmentEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_number=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
               {"message": "Invalid employee number"},
               status=400, 
            )
        appointments = Appointment.objects.create(**content)
        return JsonResponse(
            appointments,
            encoder=AppointmentEncoder,
            safe=False,
        )