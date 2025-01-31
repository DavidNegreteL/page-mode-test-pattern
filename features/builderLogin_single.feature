Feature: Registration Feature
    As a visitor I can sign in
    Scenario: Scenario Outline name: User login the Builder App
        Given I open the login page
        When I enter First Name "d@pefai.com"
        When I enter Password "Dave&Bu9ld5r"
        When I press login button
        Then I go to the user dashboard