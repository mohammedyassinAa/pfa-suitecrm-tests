Feature: Create Opportunity

    @opportunity
    Scenario: User creates a new opportunity successfully
      Given the user is logged in as an administrator
      And the user navigates to the opportunities module
      And clicks on create opportunity
      When the user fills out the opportunity creation form
      Then the new opportunity should be created successfully
