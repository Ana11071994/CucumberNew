Feature: To validate the functionality of amazon application

  Scenario: To validate searchbox with product name
    Given user need to be in amazon page
    When user should enter product name in search box
      | Product | New Product |
      | iphone  | Mac Laptop  |
      | tshirt  | smart watch |
    And user should click search button
    Then user will navigate to products page
