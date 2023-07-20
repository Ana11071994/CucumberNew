package org.steps;

import java.util.List;
import java.util.Map;

import org.info.Baseclass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefenitions3 extends Baseclass {
	@Given("user need to be in amazon page")
	public void user_need_to_be_in_amazon_page() {
	   chromebrowser();
	   geturl("https://www.amazon.in/");
	   maximize();
	}

	@When("user should enter product name in search box")
	public void user_should_enter_product_name_in_search_box(io.cucumber.datatable.DataTable d) {
	  List<Map<String, String>> m = d.asMaps();
	   WebElement searchbx = driver.findElement(By.xpath("//input[@type='text']"));
	   fillbox(searchbx, m.get(1).get("New Product"));
	}

	@When("user should click search button")
	public void user_should_click_search_button() {
	   WebElement searchbtn = driver.findElement(By.xpath("//input[@type='submit']"));
	   click(searchbtn);
	}

	@Then("user will navigate to products page")
	public void user_will_navigate_to_products_page() {
	   System.out.println("user in product page");
	   driver.quit();
	}

}
