// features/step-definitions/inventory.steps.ts
import { Given, When, Then } from '@wdio/cucumber-framework';
import CartPage from '../../pageobjects/saucedemo/CartPage.js';
import CheckoutPage from '../../pageobjects/saucedemo/CheckoutPage.js';
import ConfirmationPage from '../../pageobjects/saucedemo/ConfirmationPage.js';

When('I proceed to checkout',async  () => {
    await CartPage.proceedToCheckout();
});
When('I enter my checkout information',async  () => {
     await CheckoutPage.enterCheckoutInformation('John', 'Doe', '12345');
});

When('I finish the checkout process', async () => {
    await CheckoutPage.finishCheckout();
});

Then('I should see the order confirmation message', async () => {
    const message = await ConfirmationPage.getConfirmationMessage(); 
    await expect(await message).toEqual('Thank you for your order!');
})
