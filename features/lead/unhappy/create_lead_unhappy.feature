Feature: Unhappy path - Create Lead

  @lead @lead_unhappy
  Scenario: Submit lead form without last name
    Given the user is logged in as an administrator
    And the user navigates to the leads module
    And clicks on create lead
    When the user submits the lead form without filling the last name
    Then an error message "Missing required field: Last Name" should be displayed under the "Last Name" field


