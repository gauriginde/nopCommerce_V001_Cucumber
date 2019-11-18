package stepDefinitions;

import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class BaseClass {

	public static WebDriver driver;
	public LoginPage lp;
	public AddCustomerPage addcust;
	public SearchCustomerPage searchcust;
	public static Logger logger;
	public Properties configprop;
	
	public static String randomString() {
		
		String generatedString=RandomStringUtils.randomAlphabetic(5);
		return generatedString;
		
	}
	
	
}
