Feature: Customers

Background: These are the common steps
Given User launches chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/admin"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And Click on Login
Then User can view Dashboard

@sanity
Scenario: Add a new customer
When User clicks on customers menu
And click on customers menu item
And click on Add new button
Then user can view new customer page
When User enter customer info
And click on Save button
Then User can view confirmation message "The new customer has been added successfully."
And Close Browser

@sanity
Scenario: Search Customer by email id
When User clicks on customers menu
And click on customers menu item
And Enter customer email
And Click Search button
Then User should be found in Search table
And Close Browser

@regression
Scenario: Search Customer by first name and last name
When User clicks on customers menu
And click on customers menu item
And Enter customer firstname and lastname
And Click Search button
Then User Name should be found in Search table
And Close Browser