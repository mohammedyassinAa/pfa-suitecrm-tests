Feature: End-to-End Lead Management

  @lead @e2e
  Scenario: Create, import, and view a lead
    Given the user is logged in as an administrator
    When the user navigates to the leads module
    And clicks on create lead
    And the user fills out the lead creation form
    Then the new lead should be created successfully
    When the user navigates to the import leads page
    And the user uploads a valid leads CSV file
    And maps the lead fields and continues
    And confirms and imports the leads
    Then the new lead should appear in the lead list
    When the user navigates to the view leads page
    Then the list of leads should be visible
    
