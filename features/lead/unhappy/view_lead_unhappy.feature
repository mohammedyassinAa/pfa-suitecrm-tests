Feature: Unhappy path - View Lead

  @lead @lead_unhappy
  Scenario: View leads when none exist
    Given the user is logged in as an administrator
    When the user navigates to the view leads page
    Then a message "You currently have no records saved." should be displayed
