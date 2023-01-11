import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import StaysPage from '../pageobjects/stays.view';
import BookingStay from '../pageobjects/booking.view';
import CardData from '../pageobjects/cardData.view';
import UserData from '../pageobjects/userdata.view';

const pages = {
    login: LoginPage
}

//Stays View
Given(/^The user is in the stays view$/, async () => {
    await LoginPage.closeLogin();
})

Then(/^The user must see the destination options$/, async () => {
    await expect(StaysPage.searchFields).toBeExisting();
})

//Ingreso del destino

Given(/^The user is on the destination option$/, async () => {
    await StaysPage.destination.click();
})

When(/^The user enter his destination (.*)$/, async (destiny) => {
    await StaysPage.setDestination(destiny);
})

//Date

Given(/^The user is on the date view$/,async () => {
})

When(/^The user specify the range of days: (.*) - (.*) - of (.*)$/, async (start, end, monthYear) => {
    await StaysPage.setDate(start, end, monthYear)
})

Then(/^The user see the range of days specified on the stays view: (.*)$/, async (dateLabel) => {
    await expect(StaysPage.labelFields[1]).toHaveTextContaining(dateLabel)
})

//Rooms and Guests
Given(/^The user is on the Select rooms and guests view$/, async () => {
    await StaysPage.roomsAndGuests.click();
})

When(/^The user select the (.*) of his child$/,async (age) => {
    await StaysPage.setRoomsAndGuests(age);
})

Then(/^The user see the rooms and guests that he has specified: (.*)$/, async(roomsGuests) => {
    await expect(StaysPage.labelFields[2]).toHaveTextContaining(roomsGuests)
})

// Fill the user data
Given(/^The user is on the form view$/, async () => {
    await BookingStay.chooseStay();
})

When(/^The user fill the inputs with his personal data: (.*) - (.*) - (.*) - (.*) - (.*) - (.*) - (.*) - (.*)$/, async (firstName, lastName, email, address, zipCode, city, country, mobilePhone) => {
    await UserData.fillInfo(firstName, lastName, email, address, zipCode, city, country, mobilePhone);
})

//Final step
Given(/^The user is on the final step of the form$/, async () =>{
})

When(/^I have to fill the form with my credit card info: (.*) - (.*) - (.*)$/, async (cardNumber, cardType, expirationDate) => {
    await CardData.finalStep(cardNumber, cardType, expirationDate)
})