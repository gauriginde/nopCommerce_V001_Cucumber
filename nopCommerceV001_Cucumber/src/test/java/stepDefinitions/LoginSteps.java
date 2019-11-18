package stepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.framework.Assert;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

@SuppressWarnings("deprecation")
public class LoginSteps extends BaseClass {

	@Before
	public void setup() throws IOException {
		
		logger = Logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("log4j.properties");
		configprop=new Properties();
		FileInputStream configPropFile=new FileInputStream("config.properties");
		configprop.load(configPropFile);
		

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//Drivers/chromedriver.exe");
		driver=new ChromeDriver();
		
		logger.info("******************Launching Browser***************");
//		String browser=configprop.getProperty("browser");
//		
//		if(browser=="chrome") {
//		System.setProperty("webdriver.chrome.driver", configprop.getProperty("chromepath"));
//		driver = new ChromeDriver();
//		}
//		
//		if(browser=="firefox") {
//			System.setProperty("webdriver.gecko.driver", configprop.getProperty("firefoxpath"));
//			driver = new FirefoxDriver();
//		}
//		
//		if(browser=="IE") {
//			System.setProperty("webdriver.IE.driver", configprop.getProperty("IEpath"));
//			driver = new InternetExplorerDriver();
//		}
		
		
	}
	
	@Given("^User launches chrome browser$")
	public void user_launches_chrome_browser() {
		
		lp = new LoginPage(driver);
		searchcust = new SearchCustomerPage(driver);
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) {

		logger.info("******************Opening URL***************");
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String password) {
		logger.info("******************Providing username and password***************");
		lp.setUserName(email);
		lp.setPassword(password);
	}

	@When("^Click on Login$")
	public void click_on_Login() {
		logger.info("******************Clicked Login***************");
		lp.clickLogin();

	}

	@Then("^Page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String title) {
		if (driver.getPageSource().contains("Login was unsuccessful")) {
			driver.close();
			logger.info("******************Login Failed***************");
			Assert.assertTrue(false);
		} else {
			Assert.assertEquals(title, driver.getTitle());
			logger.info("******************Login Passed***************");
		}

	}

	@When("^User clicks on Log out link$")
	public void user_clicks_on_Log_out_link() throws InterruptedException {
		lp.clickLogout();
		logger.info("******************Logged out***************");
		Thread.sleep(3000);

	}

	@Then("^Close Browser$")
	public void close_Browser() {
		logger.info("******************QUIT Browser***************");
		driver.quit();
	}

	// -----------------Steps for adding
	// customer------------------------------------------------
	@Then("^User can view Dashboard$")
	public void user_can_view_Dashboard() {
		addcust = new AddCustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", addcust.getPageTitle());
	}

	@When("^User clicks on customers menu$")
	public void user_clicks_on_customers_menu() {
		addcust.clickCustomerMenu();
	}

	@When("^click on customers menu item$")
	public void click_on_customers_menu_item() throws InterruptedException {
		Thread.sleep(5000);
		addcust.clickCustomersMenuItem();
	}

	@When("^click on Add new button$")
	public void click_on_Add_new_button() {
		addcust.clickAddNewCustomer();
	}

	@Then("^user can view new customer page$")
	public void user_can_view_new_customer_page() {
		Assert.assertEquals("Add a new customer / nopCommerce administration", addcust.getPageTitle());
	}

	@When("^User enter customer info$")
	public void user_enter_customer_info() {
		logger.info("******************Adding new customer information***************");
		addcust.setEmail(randomString() + "@gmail.com");
		addcust.setPassword("test123");
		addcust.setFirstName("Kamalabai");
		addcust.setLastName("Sontakke");
		addcust.setGender("Female");
		addcust.setDob("01/01/1990");
		addcust.setCompany("K Company");
		// addcust.setTaxExempt("yes");
		addcust.setAdminComment("Testing testing ....");
	}

	@When("^click on Save button$")
	public void click_on_Save_button() {
		addcust.clickSave();

	}

	@Then("^User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String msg) {
		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
				.contains("The new customer has been added successfully."));
		logger.info("*****************New customer addition successful***************");
	}

	// -----------------Steps for searching
	// customer------------------------------------------------

	@When("^Enter customer email$")
	public void enter_customer_email() {
		logger.info("******************Searching customer by emailid***************");
		searchcust.setEmail("victoria_victoria@nopcommerce.com");
	}

	@When("^Click Search button$")
	public void click_Search_button() {
		searchcust.clickSearch();

	}

	@Then("^User should be found in Search table$")
	public void user_should_be_found_in_Search_table() throws InterruptedException {
		boolean flag = searchcust.searchCustomerByEmail("victoria_victoria@nopcommerce.com");
		Assert.assertEquals(true, flag);

	}

	@When("^Enter customer firstname and lastname$")
	public void enter_customer_firstname_and_lastname() {
		logger.info("******************Searching customer by first and last name***************");
		searchcust.setFirstName("Victoria");
		searchcust.setLastName("Terces");
	}

	@Then("^User Name should be found in Search table$")
	public void user_Name_should_be_found_in_Search_table() throws InterruptedException {
		boolean flag = searchcust.searchCustomerByName("Victoria", "Terces");
		Assert.assertEquals(true, flag);
	}

}
