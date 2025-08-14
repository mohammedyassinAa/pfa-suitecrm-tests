Feature: Import Contact from vCard

    @contact
    Scenario: User imports a contact using a vCard file
        Given the user is logged in as an administrator
        And the user navigates to the import vCard page
        When the user uploads a vCard file
        Then the new contact should be imported successfully
