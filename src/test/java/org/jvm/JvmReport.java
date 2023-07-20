package org.jvm;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
public static void jvmreportGenerate(String json) {
	File f= new File("C:\\Users\\Kannan\\eclipse\\CucumH2\\Reports\\Jvm Report");
	Configuration c=new Configuration(f,"Social Application");
	c.addClassifications("operating system","Windows11");
	c.addClassifications("Browser","chrome");
	List<String> l= new ArrayList<String>();
	l.add(json);
	ReportBuilder r = new ReportBuilder(l, c);
	r.generateReports();
}
}
