from django.urls import path 
from .views import customer_list_view, salesPerson_list_view, api_list_sales, api_list_AutomovileVOs

urlpatterns = [
    path("customers/", customer_list_view, name="list_customers"),
    path("salesmen/", salesPerson_list_view, name="list_salesmen"),
    path("sales/", api_list_sales, name="list_sales"),
    path("sales/<int:sales_person_id>/", api_list_sales, name="list_sales_record"),
    path("automobilevo/", api_list_AutomovileVOs, name="list_AutoVOs")
]