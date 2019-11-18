$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6094956500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "These are the common steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 86765900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5618412600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 300489700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 11713260900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 22804400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add a new customer",
  "description": "",
  "id": "customers;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User clicks on customers menu",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on customers menu item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user can view new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_customers_menu()"
});
formatter.result({
  "duration": 53405200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_customers_menu_item()"
});
formatter.result({
  "duration": 7111110600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 4056529200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_view_new_customer_page()"
});
formatter.result({
  "duration": 5125700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_customer_info()"
});
formatter.result({
  "duration": 525883800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Save_button()"
});
formatter.result({
  "duration": 1396849700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 36
    }
  ],
  "location": "LoginSteps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "duration": 168373100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 595097100,
  "status": "passed"
});
formatter.before({
  "duration": 5052638800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "These are the common steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 1033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4885579400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 160223500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 3129921500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 7749300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search Customer by email id",
  "description": "",
  "id": "customers;search-customer-by-email-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User clicks on customers menu",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on customers menu item",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter customer email",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click Search button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be found in Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_customers_menu()"
});
formatter.result({
  "duration": 67564300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_customers_menu_item()"
});
formatter.result({
  "duration": 5804854100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_customer_email()"
});
formatter.result({
  "duration": 133171300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_Search_button()"
});
formatter.result({
  "duration": 116884700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_found_in_Search_table()"
});
formatter.result({
  "duration": 5069715000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 602309400,
  "status": "passed"
});
formatter.before({
  "duration": 5048658300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "These are the common steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 925500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5015395600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 195721000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 2072598100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 6503300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search Customer by first name and last name",
  "description": "",
  "id": "customers;search-customer-by-first-name-and-last-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User clicks on customers menu",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "click on customers menu item",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter customer firstname and lastname",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click Search button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Name should be found in Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_customers_menu()"
});
formatter.result({
  "duration": 86734800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_customers_menu_item()"
});
formatter.result({
  "duration": 5727787100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_customer_firstname_and_lastname()"
});
formatter.result({
  "duration": 137480700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_Search_button()"
});
formatter.result({
  "duration": 159685300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Name_should_be_found_in_Search_table()"
});
formatter.result({
  "duration": 5080615600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 587245900,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5095089800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful login with vaid credentials",
  "description": "",
  "id": "login;successful-login-with-vaid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 1603300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4876007000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 166382200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 1694100800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 30890800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Log_out_link()"
});
formatter.result({
  "duration": 4081049600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 35113400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 631515700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Successful login with vaid credentials",
  "description": "",
  "id": "login;successful-login-with-vaid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login;successful-login-with-vaid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "login;successful-login-with-vaid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 26,
      "id": "login;successful-login-with-vaid-credentials;;2"
    },
    {
      "cells": [
        "aa@aa.com",
        "admin"
      ],
      "line": 27,
      "id": "login;successful-login-with-vaid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5086599800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Successful login with vaid credentials",
  "description": "",
  "id": "login;successful-login-with-vaid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 869300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5036729900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 182288000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 1864916900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 21456300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Log_out_link()"
});
formatter.result({
  "duration": 60149500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"/logout\"\u003e...\u003c/a\u003e is not clickable at point (404, 25). Other element would receive the click: \u003cdiv id\u003d\"ajaxBusy\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d78.0.3904.97)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-RTF2S31\u0027, ip: \u0027192.168.0.25\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:59653}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90), userDataDir\u003dC:\\WINDOWS\\TEMP\\scoped_dir13084_28970}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d78.0.3904.97, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: cb3336b8d72e45fac71f69d313b2d666\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor11.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pageObjects.LoginPage.clickLogout(LoginPage.java:49)\r\n\tat stepDefinitions.LoginSteps.user_clicks_on_Log_out_link(LoginSteps.java:103)\r\n\tat ✽.When User clicks on Log out link(Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 5039107500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successful login with vaid credentials",
  "description": "",
  "id": "login;successful-login-with-vaid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Email as \"aa@aa.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 866300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4775394800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aa@aa.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 50
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 255189000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 365436800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 69516800,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinitions.LoginSteps.page_title_should_be(LoginSteps.java:93)\r\n\tat ✽.Then Page title should be \"Dashboard / nopCommerce administration\"(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});