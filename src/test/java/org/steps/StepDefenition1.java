package org.steps;

import org.info.Baseclass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefenition1 extends Baseclass {
	@Given("user need to be in login page")
	public void user_need_to_be_in_login_page() {
	  geturl("https://www.facebook.com/");
	  maximize();
	}

	@When("user should enter invalid {string} and invalid {string}")
	public void user_should_enter_invalid_and_invalid(String username, String password) {
	   WebElement user = driver.findElement(By.id("email"));
	   fillbox(user,username);
	   WebElement passwd = driver.findElement(By.id("pass"));
	   fillbox(passwd,password);
	}

	@When("user should click login button")
	public void user_should_click_login_button() {
		WebElement btnlogin = driver.findElement(By.name("login"));
		click(btnlogin);
	}

	@Then("user will navigate to invalid credential page")
	public void user_will_navigate_to_invalid_credential_page() {
	    System.out.println("user should in invalid credential page");
	    driver.quit();
	}

	

	
	
}
