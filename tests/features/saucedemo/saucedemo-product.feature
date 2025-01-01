# features/login.feature
Feature: Sauce Demo Application Product Feature
 # Add a Product to the Cart

  @smoke
  Scenario: Add a Product to the Cart
    Given I am on the sauce demo application login page
    When I login with valid credentials
    Then I should see the inventory page
    When I click on the "Add to cart" button for the "Sauce Labs Backpack"
    Then the product should be added to the cart
    And the cart icon should display the number of items in the cart
  # Remove a Product from the Cart

  @smoke
  Scenario: Remove a Product from the Cart
    Given I am on the sauce demo application login page
    When I login with valid credentials
    Then I should see the inventory page
    When I click on the "Add to cart" button for the "Sauce Labs Backpack"
    Then the product should be added to the cart
    When I click on the "Remove" button for the "Sauce Labs Backpack"
    Then the product should be removed from the cart
    And I logout the application
  # Verify Product Details

  @smoke
  Scenario: Verify Product Details
    Given I am on the sauce demo application login page
    When I login with valid credentials
    Then I should see the inventory page
    When I click on the "Sauce Labs Backpack" product
    Then I should be redirected to the product details page
    And the product details should be displayed correctly
    And I logout the application
