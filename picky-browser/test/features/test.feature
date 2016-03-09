
Feature: Browser test

Scenario: Context
    Given I start the TEST server
    When I open the url at /html/test.html
    Then I wait 1sec
    Then the title is equal to Test
    Then the location.host is equal to 127.0.0.1:3001
    Then I stop the TEST server
