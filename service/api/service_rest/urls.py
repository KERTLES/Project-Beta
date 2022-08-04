from django.urls import path

from .views import api_list_technicians, api_list_appointments, api_show_appointments, api_appointment_status


urlpatterns = [
    path("technicians/", api_list_technicians, name="api_technicians"),
    path("appointments/", api_list_appointments, name="api_appointments"),
    path("appointments/<int:pk>/", api_show_appointments, name="api_show_appointments"),
    path("appointments/<int:pk>/status/", api_appointment_status, name="api_status_appointment"),
]
