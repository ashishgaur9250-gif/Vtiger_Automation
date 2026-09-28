Feature: Vtiger Login, Lead Creation and Logout

  As a registered Vtiger user
  I want to login, create a lead and logout
  So that I can manage leads in Vtiger


  Background:
    Given the user opens the Vtiger login page


  Scenario: Login, Create Lead and Logout successfully

    # Login
    When the user enters a valid username
    And the user enters a valid password
    And the user clicks on the Login button
    Then the user should be redirected to the Vtiger dashboard

    # Lead Creation
    When the user navigates to the Leads module
    And the user clicks on the Create Lead button
    And the user enters the lead first name
    And the user enters the lead last name
    And the user enters the lead company name
    And the user enters the lead phone number
    And the user enters the lead email address
    And the user clicks on the Save button
    Then the lead should be created successfully

    # Logout
    When the user clicks on the Logout button
    Then the user should be redirected to the Vtiger login page

