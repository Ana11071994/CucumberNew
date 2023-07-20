package org.steps;

import org.info.Baseclass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends Baseclass {
@Before
public void chrome() {
	chromebrowser();

}
@After
public void closebrowser() {
	driver.quit();

}
}
