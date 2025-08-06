Feature: Import Lead

  Scenario: User successfully imports a lead from a CSV file
    Given the user is logged in as an administrator
    When the user navigates to the import leads page
    And the user uploads a valid leads CSV file
    And maps the lead fields and continues
    And confirms and imports the leads
    Then the new lead should appear in the lead list
