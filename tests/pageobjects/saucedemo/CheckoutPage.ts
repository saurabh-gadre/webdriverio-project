// page/InventoryPage.ts
import BasePage from '../../pageobjects/saucedemo/BasePage.js';
import { $, $$ } from '@wdio/globals';

class CheckoutPage extends BasePage {
     firstName= () => $('#first-name'); 
     lastName= () => $('#last-name'); 
     postalCode= () => $('#postal-code'); 
     continueButton= () => $('input[data-test="continue"]'); 
     finishButton= () => $('button[data-test="finish"]'); 

    async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstName().setValue(firstName);
        await this.lastName().setValue(lastName);
        await this.postalCode().setValue(postalCode);
        await this.continueButton().click();
    }

    async finishCheckout() {
        await this.finishButton().click();
    }
}

export default new CheckoutPage();
