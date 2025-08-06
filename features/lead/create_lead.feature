Feature: Create Lead

  Scenario: User creates a new lead successfully
    Given the user is logged in as an administrator
    And the user navigates to the leads module
    And clicks on create lead
    When the user fills out the lead creation form
    Then the new lead should be created successfully
