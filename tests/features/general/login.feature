Feature: The Internet Heruko App

  Scenario Outline: Login with different credentials  - [ <username> and <password> ]
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <result>

    Examples:
      | username | password             | result                         |
      | foobar   | barfoo               | Your username is invalid!      |
      | abc      | SuperSecretPassword! | Your username is invalid!      |
      | practice | ""                   | Your username is invalid!      |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
