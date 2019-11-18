package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class SearchCustomerPage {

	WebDriver scdriver;
	WaitHelper waithelper;
	
	public SearchCustomerPage(WebDriver driver) {
		scdriver=driver;
		PageFactory.initElements(scdriver, this);
		waithelper=new WaitHelper(scdriver);
	}
	
	@FindBy(id="SearchEmail")
	@CacheLookup
	WebElement txtSearchEmail;
	
	@FindBy(id="SearchFirstName")
	@CacheLookup
	WebElement txtFirstName;
	
	@FindBy(id="SearchLastName")
	@CacheLookup
	WebElement txtLastName;
	
	@FindBy(xpath="//button[@id='search-customers']")
	@CacheLookup
	WebElement btnSearch;
	
	public void setEmail(String email) {
		txtSearchEmail.sendKeys(email);
	}
	
	public void setFirstName(String firstname) {
		txtFirstName.sendKeys(firstname);
	}
	
	public void setLastName(String lastname) {
		txtLastName.sendKeys(lastname);
	}
	
	public void clickSearch() {
		btnSearch.click();
	}
	
	public boolean searchCustomerByEmail(String email) throws InterruptedException {
		boolean flag=false;
		System.out.println("email is -----------"+email);
		Thread.sleep(5000);
		String emailid=scdriver.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr/td[2]")).getText();
		System.out.println("Email id is -------------"+emailid);
		if(email.equalsIgnoreCase(emailid)) {
			flag=true;
		}
		System.out.println("flag is ----------"+flag);
			return flag;
	}
	
	public boolean searchCustomerByName(String fname, String lname) throws InterruptedException {
		boolean flag=false;
		Thread.sleep(5000);
		String name=scdriver.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr/td[3]")).getText();
		System.out.println("Name from xpath-------------"+name);
		String fullname=fname+" "+lname;
		System.out.println("Name from search---------------"+fullname);
		if (fullname.equalsIgnoreCase(name)) {
			flag=true;
		}
		
		return flag;
	}
}
