package org.steps;

import org.info.Baseclass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefenition2 extends Baseclass {
	@When("user clicks login button")
	public void user_clicks_login_button() {
	  WebElement btnlogin = driver.findElement(By.xpath("//button[@type='submit']"));
	  implicitytimeout();
	  click(btnlogin);
	}

	@Then("user will redirect to invalid credential page")
	public void user_will_redirect_to_invalid_credential_page() {
	  
	   System.out.println("user is in invalid credential page");
	}
}
