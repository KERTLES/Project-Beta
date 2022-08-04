from django.urls import path 
from .views import customer_list_view, salesPerson_list_view

urlpatterns = [
    path("customers/", customer_list_view, name="list_customers"),
    path("salesmen/", salesPerson_list_view, name="list_salesmen")
]