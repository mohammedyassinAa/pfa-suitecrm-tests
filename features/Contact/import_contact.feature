Feature: Import Contacts

  Scenario: User successfully imports a contact from a CSV file
    Given the user is logged in as an administrator
    And the user navigates to the import contacts page
    When the user uploads a valid CSV file
    And confirms the import properties and mappings
    And completes the import
    Then the new contact should appear in the contact list
