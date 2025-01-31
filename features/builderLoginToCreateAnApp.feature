Feature: Creation of an app in the Builder application
    As a user who has verified their identity
    I should be able to create a new application

    @e2e
    Scenario: User creates a new app in their account
        Given the user has verified their identity and is logged into their account with crendentials
            | email       | password     | valid |
            | d@pefai.com | Admin001*    | false |
            | d@pefai.com | Dave&Bu9ld5r | true  |
        Then it loads the user home page
        When they clicks the New Project button
        Then the create modal should be visible
        And set the app name to a random name
        And click the Create app button
        Then the app should be created with the random name