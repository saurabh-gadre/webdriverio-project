// features/step-definitions/inventory.steps.ts
import { Given, When, Then } from '@wdio/cucumber-framework';
import InventoryPage from '../../pageobjects/saucedemo/InventoryPage.js';

When(/^I sort products by "([^"]*)"$/, async (option: string) => {
    await InventoryPage.sortProducts(option);
});

Then(/^the products should be displayed in alphabetical order$/, async () => {
    const productTitles = await InventoryPage.getProductTitles();
    const sortedTitles = [...productTitles].sort();
    expect(await productTitles).toEqual(sortedTitles);
});

When(/^I click on the "Add to cart" button for the "Sauce Labs Backpack"$/, async () => {
    await InventoryPage.addToCart();
});

Then(/^the product should be added to the cart$/, async () => {
    expect(await InventoryPage.removeButton()[0].isDisplayed());
});

Then(/^the cart icon should display the number of items in the cart$/, async () => {
    await expect(await InventoryPage.cartIcon().getText()).toEqual('1');
});

When(/^I click on the "Remove" button for the "Sauce Labs Backpack"$/, async () => {
    await InventoryPage.removeButton()[0].waitForClickable({ timeout: 5000 });
    await InventoryPage.removeFromCart();
});

Then(/^the product should be removed from the cart$/, async () => {
    await expect(await InventoryPage.addToCartButton()[0].isDisplayed()).toBeTruthy();
    await expect(await InventoryPage.addToCartButton()[0].isEnabled());
});

When(/^I click on the "Sauce Labs Backpack" product$/, async () => {
    await InventoryPage.openProductDetails();
});

Then(/^I should be redirected to the product details page$/, async () => {
    await expect(await browser.getUrl()).toContain('inventory-item.html');
});

Then(/^the product details should be displayed correctly$/, async () => {
    await expect(await InventoryPage.productTitleInvetory().getText()).toEqual('Sauce Labs Backpack');
});

When(/^I click on the cart icon$/, async () => {
    await InventoryPage.openCart();
});

Then(/^I should be redirected to the cart page$/, async () => {
    await expect(await browser.getUrl()).toContain('cart.html');
});

Then(/^the cart page should display the products added to the cart$/, async () => {
    await expect(await InventoryPage.productTitleInvetory().getText()).toEqual('Sauce Labs Backpack');
    await expect(await InventoryPage.productPrice().isDisplayed);
    await InventoryPage.removeButton()[0].waitForExist({ timeout: 5000 });
    await expect(await InventoryPage.removeButton()[0].isEnabled());
    await expect(await InventoryPage.checkoutButton().isEnabled());
});

Then(/^the prices of the products should be displayed correctly$/, async () => {
    const productPrices = await InventoryPage.getProductPrices();
    const expectedPrices = [29.99, 9.99, 15.99, 49.99, 7.99, 15.99];
    expect(await productPrices).toEqual(expectedPrices);
});

Then(/^the prices should match the expected values$/, async () => {
    const productPrices = await InventoryPage.getProductPrices();
    const expectedPrices = [29.99, 9.99, 15.99, 49.99, 7.99, 15.99];
    expect(await productPrices).toEqual(expectedPrices);
});

When('I add the {string} to the cart', async (s: string) => {
    await InventoryPage.addToCart(); 
    await InventoryPage.openCart();
});

When(/^I logout the application$/, async () => { 
     InventoryPage.logout();
});
