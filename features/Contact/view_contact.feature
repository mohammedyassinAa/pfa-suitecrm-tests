Feature: View existing contacts

  Scenario: User views the list of existing contacts
    Given the user is logged in as an administrator
    And the user navigates to the view contacts page
    Then the list of contacts should be visible
