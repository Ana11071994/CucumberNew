package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features",glue="org.steps",dryRun=false,monochrome=true,strict=true,
plugin= {"pretty","html:C:\\Users\\Kannan\\eclipse\\CucumH2\\Reports\\Html Report","json:C:\\Users\\Kannan\\eclipse\\CucumH2\\Reports\\Json Report\\jsonreport.json","junit:C:\\Users\\Kannan\\eclipse\\CucumH2\\Reports\\Junit Report\\junitreport.xml"})
public class TestRunner {
@AfterClass
public static void jvm() {
	JvmReport.jvmreportGenerate("C:\\Users\\Kannan\\eclipse\\CucumH2\\Reports\\Json Report\\jsonreport.json");

}
}
	