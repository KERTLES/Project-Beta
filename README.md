# CarCar

Team:

* Kurt Greenacre - Service
* Kelly Jiang - Sales

## Design


## Service microservice

Explain your models and integration with the inventory
microservice, here.



## Sales microservice

Explain your models and integration with the inventory
microservice, here.

1. Set up different views needed to list and create automobiles in Inventory.
2. Automobile has foreign key to the vehicle model, and vehicle model has a foreign key to the manufacturer. 
3. Create a object of each in database to start working on Sales Microservice.
4. Sales microservices - broken down into 4 models; Customer, Sales Person, Sale Record, and Automobile Value object to the autombileInventory model. The first 3 are entites and have ids. The last one is just a value object that keeps track of polled Vin data.  
5. Sales, Services, and Invetory are each independent services with their own bounded contexts. Sales and Inventory are microservices that must poll for data from the inventory database when needed.  
6. Create Sales model. Configure urls, update installed apps. 
7. Add models (Customer, Sales Record, and Sales Person) And add properties
8. Create an admin for each model, migrate, and set up insomnia. 
9. Set up list + post view for each model. 
10. Create automobileVO and set up poll
11. Poll for Vin from Inventory Api and stored it in Value object 
12. Use Vin to create sales records and filter Vin numbers for get and post methods. A car can only be sold once. 
13. Create forms and list components in react for all views set up in insomnia.
14. Edit app and nav page. 
15. Git push/merge 
16. Resolve conflicts
17. General page outline for forms: set states, load data with component did mount and the url, return and render views.
18. Remember to import react and explort component
19. Load into Apps.js
20. Trouble shoot
21. Create drop down for sales record and filter by employee id. 

Sketch - see seperate



