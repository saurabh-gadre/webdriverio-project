// features/step-definitions/login.steps.ts
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../pageobjects/saucedemo/LoginPage.js';

Given(/^I am on the sauce demo application login page$/, async () => {
    await LoginPage.open('https://www.saucedemo.com/');
});

When(/^I login with valid credentials$/, async () => {
    await LoginPage.saucedemologin('standard_user', 'secret_sauce');
});

Then(/^I should see the inventory page$/, async() => {
    expect((await browser.getUrl()).includes('inventory'));
});
