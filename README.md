# CarCar

Instructions: 
1. clone 
2. In cloned directory, have Docker desktop open.
3. run docker compose build. 
4. Run Docker compose up. 
5. Go to http://localhost:3000/ once server finishes setting up. 

Team:

* Kurt Greenacre - Service
* Kelly Jiang - Sales

## Design


## Service microservice

Explain your models and integration with the inventory
microservice, here.

There are three models Technician, Appointment, and AutomobileVO. Technician contains the name of the employee and the employees number. 
The Appointment model has a vin, customer name, date of service, time of service, the technician, the reason for service, vip, and appointment status. In Appointment the technician is related to the Technician model with a ForeignKey to allow you to select a technician when creating a new service appointment. Vip is a boolean value that is used to determine if a customer is a VIP. Status is also a boolean value to determine the status of appointment for the cancle and finish buttons.
The AutomobileVO is the link between the service microservice and the Automobile model in the inventory micrservice. They are conected by poller in the service microservice. The only thing taken from Automobile in the inventory microservice for the AutomobileVO model was the vin. The vin in AutomobileVO is then used to compare to the vin in Appointment to detrmine if a customer is a VIP.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.



1. Set up different views needed to list and create automobiles in Inventory. And make sure that there is an object for each model created in the database. 
2. Automobile has foreign key to the vehicle model, and vehicle model has a foreign key to the manufacturer. So 
3. Create a object of each in database to start working on Sales Microservice.
4. Sales microservices - broken down into 4 models; Customer, Sales Person, Sale Record, and AutomobileVO for polling from Automobile model in Inteventory. The first 3 are entites and have ids. The last one is just a value object that keeps track of polled Vin data.  
5. Sales, Services, and Invetory are independent services with their own bounded contexts. Sales and Inventory are microservices that must poll for data from the Inventory service database when needed.  
6. Created Sales model. Configured urls, Updated installed apps and required CORs permissions. 
7. Added models (Customer, Sales Record, and Sales Person) And properties
8. Created an admin for each model, migrate, and set up insomnia. 
9. Set up list + post view for each model. 
10. Create automobileVO and set up poll
11. Poll for Vin from Inventory Api and store in vin the automobileVO model. 
12. Use Vin to create sales records and filter Vin numbers for get and post methods. Need to filter by filter by individual vehicle number because each car can only be sold once.
13. Create forms and list components in react for all views set up in insomnia.
14. Edit app and nav page each time a component class is created. 
15. Git push/merge 
16. Resolve conflicts
18. Remember to import react and export component
19. Load into Apps.js each time. 
20. Trouble shoot
21. Created List of sales records filtered by employee id. Created list of all sales, CreateSale form, CreateCustomer form, and CreateSalesPerson form.  

Sketch for Sales microservice. 
- https://excalidraw.com/#json=jI9x8lJjzK1lHMUb7hFqT,HLQst6ji-O3tNmsEUKC3vA

Bounded contexts: - sales, services, and Inventory 
- Reason: Each model in each service do not require any data from each other services except for the automobile Vin number so it makes sense to make them individual contexts. 

- Aggregate for sales microservice: SalesRecord, Customer, automobileVO, and SalesPerson. 
- SalesRecord is final product we see, maintains consistency, and prevents duplicates of objects in database by checking the Vin. Which is why it's labled as aggregate root. 
- Value objects: AutomobileVO, because its identifier is the vin polled from Inventory service. 
- Entities: Customer + Sales person. Both have unique ids/identifiers and can't be defined by property alone. 




