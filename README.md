# project-REST-rant-

REST-Rant is an app where users can review restaurants.

## User Stories

A user should be able to see a list of restaurants that have been reviewed. 

A user should be able to create new place that hasn't been listed previously in the platform.

The user should be able to click on restaurants and see details of a particular place. The user should be able to make changes of a particular place and a form should exist. 

The user should be given the option to delete a place.

The user should have options to comment or delete a comment about a particular place.

A 404 page should be posted if any of the routes does not apply. 

Method Path Purpose

GET / Home page

GET/ places Places index page

POST/places Create new place

GET/places/new Form page for creating a new place

GET/places/:id Details about a particular place

PUT/places/:id Update a particular place

GET/places/:id/edit Form page for editing an existing place

DELETE/places/:id Delete a particular place

POST/places/:id/rant Create a rant (comment) about a particular place

DELETE/places/:id/rant/:rantId Delete a rant (comment) about a particular place

GET * 404 page (matches any route not defined above)

