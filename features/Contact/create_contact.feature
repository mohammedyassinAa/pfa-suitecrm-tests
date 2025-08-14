Feature: Create a new contact in SuiteCRM

    @contact
    Scenario: User creates a new contact successfully
        Given the user is logged in as an administrator
        And the user navigates to the create contact page
        When the user fills in the contact form
        And submits the contact form
        Then the new contact should be created successfully
