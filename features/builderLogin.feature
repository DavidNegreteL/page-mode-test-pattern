Feature: Registration Feature
    As a visitor I can sign in
    Scenario: Scenario Outline name: User login the Builder App
        Given I open the login page
        When I enter First Name "<userName>"
        When I enter Password "<password>"
        When I press login button
        Then I go to the user dashboard
        Examples:
            | userName       | password     |
            | abel@pefai.com | Admin001*    |
            | d@pefai.com    | Dave&Bu9ld5r |
            | d@pefai.com    | Admin001*    |