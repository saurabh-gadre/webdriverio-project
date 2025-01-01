# features/login.feature
Feature: Sauce Demo Application Checkout Feature
# Verify Cart Icon Functionality

  @smoke
  Scenario: Verify Cart Icon Functionality
    Given I am on the sauce demo application login page
    When I login with valid credentials
    Then I should see the inventory page
    When I click on the "Add to cart" button for the "Sauce Labs Backpack"
    When I click on the cart icon
    Then I should be redirected to the cart page
    And the cart page should display the products added to the cart

  @regression
  Scenario: Login, Add Product to Cart, and Checkout
    Given I am on the sauce demo application login page
    When I login with valid credentials
    And I add the "Sauce Labs Backpack" to the cart
    And I proceed to checkout
    And I enter my checkout information
    And I finish the checkout process
    Then I should see the order confirmation message
    And I logout the application
