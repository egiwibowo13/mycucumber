Feature: Login
    You can edit the content of this feature.
    Click on the "Save" button above when you are ready to share it with your team

  Scenario: user have an account to login
user Login have account and input with valid email and password

    Given user on login page
    And user typing email
    And user typing password
    When user click login button
    Then user logged in, and navigate to home
