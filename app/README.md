# Walrus Renting Group -  Renting Application Website
## Team T07-05 - Members
Angeline Tran - angeline.tran@ucalgary.ca
Ella Tomlinson - ella.tomlinson@ucalgary.ca
Eric Wong - eric.wong3@ucalgary.ca
Nicole Zacaruk - nicole.zacaruk@ucalgary.ca
Risat Haque - risat.haque@ucalgary.ca

## Overview
The goal of our system is to provide an overall improvement in experience between renters and landlords compared to existing applications. 

### Building and Running the App
The most recent working version of the main branch can be accessed at [https://walrus-renting-group.vercel.app/](https://walrus-renting-group.vercel.app/)

To run the app locally:
First, install npm [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Run the app in development mode using the following:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features Implemented
- Property search bar with search functionality 
    - Can search properties based on location, # of baths and beds, and price
    - Additional searching filters also implemented which includes price range, type of home, and miscellaneous such as utilities or pet-friendly
- Favourites Option
    - Users can favourite any listings of interest to save for future reference
    - Can be used to cross-compare listings
- Landlord Dashboard
    - Different home page view for landlord users
    - Ability to list a new property as a landlord
    - Ability to edit or delete an existing property as a landlord
    - Ability to view other properties not of your own
- Map feature to view the general location of a property
- Profile Page
    - Landlord user types will display their properties and also have the ability to create a new property listing from here as well
    - Ability to edit personal profile information
- Messaging Terminal
    - Ability to contact landlord directly from their listing or through the messages icon on the page header
    - Popup notification to indicate when a new message has been received
- Calendar View
    - Ability to select available times to schedule a viewing as a landlord by clicking on time blocks
    - Ability to view a landlord's calendar as a renter to coordinate availabilities

## Walkthrough
We will be walking through two types of situations depending on if the user is a landlord or a renter

# Landlord Creating a New Property Listing Walkthrough:
1. Landlord logs in to the website by clicking on the `Login` button on the header with the login information `Username: resaLmother@email.com, Password: pass`
2. Landlord clicks on the `Create a Property` button on their dashboard to begin a new property listing
3. Landlord enters the corresponding information within the modal and clicks on `Next Page` when everything has been entered
4. Process is repeated until the last page, where Landlord selects availability on their calendar `Monday (11:30-14:30), Wednesday (13:00-17:00), Thursday (8:00-11:00)`
5. Landlord clicks on the `Submit` button to finish their listing

# Renter Inquiring Landlord About a Property Walkthrough:
1. Renter logs in to the website by clicking on the `Login` button on the header with the login information `Username: poteR@email.com, Password: pass`
2. Renter searches for a property in the `Glen` area for the `Where` section of the search bar, as well as `3 beds` and `3 baths`
3. Renter uses the `Additional Filters` to search for properties `between $1000/month and $2500/month` using the `Price Range` slider filter
4. Renter clicks on the `See Properties` button to view the filtered properties
5. Renter clicks on a property card to view further details
6. Renter clicks on the  `Click for Gallery` button to view more photos of the property 
7. Renter then clicks on the `Contact Landlord` button to message the landlord
8. Renter clicks on the calendar icon to view the landlord's availability to schedule a viewing
9. Renter sends a message to the landlord to book a viewing at an available time