Feature: View Leads

  Scenario: User views the list of leads
    Given the user is logged in as an administrator
    And the user navigates to the view leads page
    Then the list of leads should be visible
