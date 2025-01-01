# features/login.feature
Feature: Sauce Demo Application Login

  @smoke
  Scenario: Verify user is able to Successfully login
    Given I am on the sauce demo application login page
    When I login with valid credentials
    Then I should see the inventory page
    And I logout the application
  # Verify Product Sorting

  @smoke
  Scenario: Verify Product Sorting
    Given I am on the sauce demo application login page
    When I login with valid credentials
    Then I should see the inventory page
    When I sort products by "Name (A to Z)"
    Then the products should be displayed in alphabetical order
    And I logout the application
 
  