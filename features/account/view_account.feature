Feature: View Accounts

  Scenario: User views the list of accounts
    Given the user is logged in as an administrator
    And the user navigates to the view accounts page
    Then the list of accounts should be visible
