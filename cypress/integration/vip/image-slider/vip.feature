Feature: View Item Page (VIP)
  View full details of an Article

  Scenario: View Gallery
    Given I am open a VIP of a vehicle
    When I land no page
    Then I should see image gallery of the Item with a Full Screen button
    When I click "Full Screen" button
    Then I should see the images in full screen
