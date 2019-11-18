Feature: Login
@sanity
Scenario: Successful login with vaid credentials
Given User launches chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/admin"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And Click on Login
Then Page title should be "Dashboard / nopCommerce administration"
When User clicks on Log out link
Then Page title should be "Your store. Login"
And Close Browser

@regression
Scenario Outline: Successful login with vaid credentials
Given User launches chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/admin"
And User enters Email as "<email>" and Password as "<password>"
And Click on Login
Then Page title should be "Dashboard / nopCommerce administration"
When User clicks on Log out link
Then Page title should be "Your store. Login"
And Close Browser

Examples:
|email|password|
|admin@yourstore.com|admin|
|aa@aa.com|admin|