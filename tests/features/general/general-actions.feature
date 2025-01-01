Feature: General Action on Heruko App

  @selectTest
  Scenario: verify dropdown element
    Given user navigates to 'Dropdown' Page
    And user select option "Option 2"
    And user verifies the selected Option

  @windowTest
  Scenario: verify multiple browser windows
    Given user navigates to 'Windows' Page
    And user clicks the "Click Here" Link
    And user verifies new window tab

  @alertTest
  Scenario: Verify Alerts on Screen
    Given user navigates to "Javascript_Alerts" Page
    #And user clicks the "Click for JS Alert" button and verifies "Information" Alert
    And user clicks the "Click for JS Confirm" button and verifies "Confirmation" Alert

  @fileUpload
  Scenario: Verify File Upload
    Given user navigates to "Upload" Page
    And user verifies file can be uploaded
