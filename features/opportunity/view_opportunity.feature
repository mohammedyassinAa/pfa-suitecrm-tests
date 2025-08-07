Feature: View Leads

  Scenario: User views the list of leads
    Given the user is logged in as an administrator
    And the user navigates to the view opportunities page
    Then the list of opportunities should be visible
