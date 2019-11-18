package pageObjects;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerPage {

	public WebDriver acdriver;

	public AddCustomerPage(WebDriver driver) {
		acdriver = driver;
		PageFactory.initElements(acdriver, this);
	}

	@FindBy(xpath="//a[@href='#']/span[contains(text(),'Customers')]")
	@CacheLookup
	WebElement lnkCustomersMenu;
	
	@FindBy(xpath="//a[@href='/Admin/Customer/List']/span[@class='menu-item-title'][contains(text(),'Customers')]")
	@CacheLookup
	WebElement lnkCustomersMenuItem;
	
	@FindBy(xpath="//a[@href='/Admin/Customer/Create']")
	@CacheLookup
	WebElement btnAddCustomer;
	
	@FindBy(id = "Email")
	@CacheLookup
	WebElement txtEmail;

	@FindBy(id = "Password")
	@CacheLookup
	WebElement txtPasswd;

	@FindBy(id = "FirstName")
	@CacheLookup
	WebElement txtFirstName;

	@FindBy(id = "LastName")
	@CacheLookup
	WebElement txtLastName;

	@FindBy(id = "Gender_Male")
	@CacheLookup
	WebElement radBtnMale;

	@FindBy(id = "Gender_Female")
	@CacheLookup
	WebElement radBtnFemale;

	@FindBy(id = "DateOfBirth")
	@CacheLookup
	WebElement txtDob;

	@FindBy(id = "Company")
	@CacheLookup
	WebElement txtCompany;

	@FindBy(id = "IsTaxExempt")
	@CacheLookup
	WebElement chkboxTaxExempt;

	@FindBy(xpath = "//input[@name='SelectedNewsletterSubscriptionStoreIds'][@value='1']")
	@CacheLookup
	WebElement chkboxNewsLtr1;

	@FindBy(xpath = "//input[@name='SelectedNewsletterSubscriptionStoreIds'][@value='2']")
	@CacheLookup
	WebElement chkboxNewsLtr2;

	@FindBy(xpath = "//div[@class='k-multiselect-wrap k-floatwrap']")
	@CacheLookup
	WebElement txtCustRoles;

	@FindBy(xpath = "//li[contains(text(),'Administrators')]")
	@CacheLookup
	WebElement lstItemAdministrators;

	@FindBy(xpath = "//li[contains(text(),'Forum Moderators')]")
	@CacheLookup
	WebElement lstItemModerator;

	@FindBy(xpath = "//li[contains(text(),'Registered')]")
	@CacheLookup
	WebElement lstItemRegistered;

	@FindBy(xpath = "//li[contains(text(),'Guests')]")
	@CacheLookup
	WebElement lstItemGuest;

	@FindBy(xpath = "//li[contains(text(),'Vendors')]")
	@CacheLookup
	WebElement lstItemVendor;

	@FindBy(xpath = "//select[@id='VendorId']")
	@CacheLookup
	WebElement drpMgrOfVendor;

	@FindBy(id = "Active")
	@CacheLookup
	WebElement chkBoxActive;

	@FindBy(id = "AdminComment")
	@CacheLookup
	WebElement txtAdminComment;
	
	@FindBy(xpath="//button[@name='save']")
	@CacheLookup
	WebElement btnSave;
	
	@FindBy(xpath="//button[@name='save-continue']")
	@CacheLookup
	WebElement btnSaveContinueEdit;
	
	public String getPageTitle() {
		return acdriver.getTitle();
	}
	
	public void clickCustomerMenu() {
		lnkCustomersMenu.click();
	}
	
	public void clickCustomersMenuItem() {
		lnkCustomersMenuItem.click();
	}
	
	public void clickAddNewCustomer() {
		btnAddCustomer.click();
	}

	public void setEmail(String email) {
		txtEmail.sendKeys(email);
	}

	public void setPassword(String passwd) {
		txtPasswd.sendKeys(passwd);
	}

	public void setFirstName(String fname) {
		txtFirstName.sendKeys(fname);
	}

	public void setLastName(String lname) {
		txtLastName.sendKeys(lname);
	}

	public void setGender(String gender) {
		if (gender == "Male") {
			radBtnMale.click();
		} else 
			if (gender == "Female") {
				radBtnFemale.click();
			}
		
		else {
			radBtnMale.click();
		}

	}

	public void setDob(String dob) {
		txtDob.sendKeys(dob);
	}

	public void setCompany(String company) {
		txtCompany.sendKeys(company);
	}

	public void setTaxExempt(String taxexempt) {
		if (taxexempt == "yes") {
			chkboxTaxExempt.clear();
			chkboxTaxExempt.click();
		} else {
			chkboxTaxExempt.clear();
		}
	}

	public void setCustomerRoles(String custrole) {
		if (custrole.equals("Administrators")) {
			lstItemAdministrators.click();
		} else if (custrole.equals("Moderator")) {
			lstItemModerator.click();
		} else if (custrole.equals("Registered")) {
			lstItemRegistered.click();
		} else if (custrole.equals("Guest")) {
			lstItemGuest.click();

		} else if (custrole.equals("Vendor")) {
			lstItemVendor.click();

		}
	}
	
	public void setMgrVendor(String mgr) {
		Select selectmgr=new Select(drpMgrOfVendor);
		selectmgr.selectByVisibleText(mgr);
	}
	
	public void setActive(String active) {
		if (active=="active") {
			chkBoxActive.clear();
			chkBoxActive.click();
		}
		else if(active=="inactive") {
			chkBoxActive.clear();
		}
		else {
			chkBoxActive.clear();
		}
	}
	
	public void setAdminComment(String comments) {
		txtAdminComment.sendKeys(comments);
	}
	
	public void clickSave() {
		btnSave.click();
	}
	
	public void clickSaveContinueEdit() {
		btnSaveContinueEdit.click();
	}
}