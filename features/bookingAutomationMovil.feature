Feature: Booking apk automation

  Scenario Outline: As user, i want to use the booking service

  Scenario: Stays view
    Given The user is in the stays view
    Then The user must see the destination options

  Scenario: Enter Destination
    Given The user is on the destination option
    When The user enter his destination <destiny>
    Examples:
      | destiny |
      | Cusco   |

   Scenario: Enter date range
    Given The user is on the date view
    When The user specify the range of days: <start> - <end> - of <monthYear>
    Then The user see the range of days specified on the stays view: <dateLabel>
    Examples:
      | start | end | monthYear     | dateLabel                 |
      | 14    | 28  | February 2023 | Tue, Feb 14 - Tue, Feb 28 |    

  Scenario: Enter the guests
    Given The user is on the Select rooms and guests view
    When The user select the <age> of his child
    Then The user see the rooms and guests that he has specified: <roomsGuestsLabel>
    Examples:
      | age | roomsGuestsLabel            |
      | 5   | 1 room · 2 adults · 1 child |    

  Scenario: Fill the user data
    Given The user is on the form view
    When The user fill the inputs with his personal data: <firstName> - <lastName> - <email> - <address> - <zipCode> - <city> - <country> - <mobilePhone>
    Examples:
      | firstName | lastName | email                    | address     | zipCode | city | country | mobilePhone |
      | Manuel    | Rosales  | mrosaleslevano@gmail.com | El agustino | 15003   | Lima | Peru    | 997099341 |    
      
  Scenario: Final Step
    Given The user is on the final step of the form
    When I have to fill the form with my credit card info: <cardNumber> - <cardType> - <expirationDate>
  Examples:
    | cardNumber       | cardType | expirationDate |
    | 1234567891245789 | Visa     | 05/25          |   