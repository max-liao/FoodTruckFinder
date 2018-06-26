# FoodTruckFinder

GTCBC Project 2:  Food Truck App

Group Members: Max Liao, Carrie Kordys and Thomas Brown

Overview: The application displays the locations and information for a database of food trucks. The app will help users locate these mobile vendors by displaying the food trucks on Google Maps. The app also allows users to add new food trucks or update the location of an existing food truck.

Details: The application will be powered by [`React`] and will use react-router-dom to handle the server routes. [`MySQL`]Database will include a list of food trucks with the following properties {id, name, cuisine, menu/prices, current location and time of last update}. [`Twitter`] will be used to pull tweets from trucks that are being followed. A [`Google Maps`] view will display each food truck as a pin based off its location property and will show the time of last update. Clicking the pin shows the truck's information above the map. Tweets are also displayed when the respective truck marker is clicked on the map. 