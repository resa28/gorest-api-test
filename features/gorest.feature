Feature: GoRest API testing

  Scenario: Create a new user
    When I send a POST request to create a new user
    Then the response status should be 201
    And the response should contain the user id

  Scenario: Get user details
    Given I have a valid user ID
    When I send a GET request to get the user details
    Then the response status should be 200
    And the response should contain the correct user name

  Scenario: Update user details
    Given I have a valid user ID
    When I send a PUT request to update the user details
    Then the response status should be 200
    And the response should contain the updated name
