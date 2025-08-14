Feature: Import Account

  @account
    Scenario: User successfully imports an account from a CSV file
        Given the user is logged in as an administrator
        And the user navigates to the import accounts page
        When the user uploads a valid account CSV file
        And confirms the account import properties and mappings
        And completes the account import
        Then the new account should appear in the account list
