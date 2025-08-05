Feature: Create Account

  Scenario: User creates a new account successfully
    Given the user is logged in as an administrator
    And the user navigates to the create account page
    When the user fills in the account form
    Then the new account should be created successfully
