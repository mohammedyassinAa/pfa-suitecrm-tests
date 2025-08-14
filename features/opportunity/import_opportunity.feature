Feature: Import Opportunities

    @opportunity
    Scenario: Import a new opportunity from CSV
        Given the user is logged in as an administrator
        When the user navigates to the import opportunities page
        And the user uploads a valid opportunity CSV file
        And maps the opportunity fields and proceeds
        And confirms the import process
        Then the imported opportunity should appear in the list
