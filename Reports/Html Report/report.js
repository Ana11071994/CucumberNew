$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "To validate the login functionality of fb Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter invalid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "java@123",
        "java"
      ]
    },
    {
      "cells": [
        "sele@123",
        "selenium"
      ]
    },
    {
      "cells": [
        "python@123",
        "python"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter invalid \"java@123\" and invalid \"java\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition1.user_should_enter_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition1.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition1.user_will_navigate_to_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter invalid \"sele@123\" and invalid \"selenium\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition1.user_should_enter_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition1.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition1.user_will_navigate_to_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter invalid \"python@123\" and invalid \"python\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition1.user_should_enter_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition1.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition1.user_will_navigate_to_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with empty username and empty password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition2.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will redirect to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition2.user_will_redirect_to_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/product.feature");
formatter.feature({
  "name": "To validate the functionality of amazon application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate searchbox with product name",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in amazon page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenitions3.user_need_to_be_in_amazon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter product name in search box",
  "rows": [
    {
      "cells": [
        "Product",
        "New Product"
      ]
    },
    {
      "cells": [
        "iphone",
        "Mac Laptop"
      ]
    },
    {
      "cells": [
        "tshirt",
        "smart watch"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenitions3.user_should_enter_product_name_in_search_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenitions3.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to products page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenitions3.user_will_navigate_to_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});