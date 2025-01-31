Feature: Creation of an app in the Builder application
    As a visitor I can sign in

    Scenario: User creates a new app in their account
        Given the user has verified their identity and is logged into their account with crendentials
            | email       | password     | valid |
            | d@pefai.com | Admin001*    | false |
            | d@pefai.com | Dave&Bu9ld5r | true  |
        Then it loads the user home page