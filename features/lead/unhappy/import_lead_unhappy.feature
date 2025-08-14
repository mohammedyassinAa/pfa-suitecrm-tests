Feature: Unhappy path - Import Lead

  @lead @lead_unhappy
  Scenario: Import lead with missing last name in CSV
    Given the user is logged in as an administrator
    When the user navigates to the import leads page
    And the user uploads a malformed lead CSV with missing last name
    Then an error message "rows were not imported due to error" should be displayed
