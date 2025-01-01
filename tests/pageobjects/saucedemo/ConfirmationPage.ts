// page/ConfirmationPage.ts
import BasePage from '../../pageobjects/saucedemo/BasePage.js';
import { $, $$ } from '@wdio/globals';

class ConfirmationPage extends BasePage {
    confirmationMessage = () => $('.complete-header'); 

    async getConfirmationMessage() {
        return await this.confirmationMessage().getText();
    }
}

export default new ConfirmationPage();
