// page/CartPage.ts
import BasePage from './BasePage';
import { $, $$ } from '@wdio/globals';

class CartPage extends BasePage {
    checkoutButton = () => $('#checkout');

    async proceedToCheckout() {
        await this.checkoutButton().click();
    }
}

export default new CartPage();
