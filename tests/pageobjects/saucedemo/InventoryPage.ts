// page/InventoryPage.ts
import BasePage from '../../pageobjects/saucedemo/BasePage.js';
import { $, $$ } from '@wdio/globals';

class InventoryPage extends BasePage {
    checkoutButton = () => $('#checkout');
    productSortDropdown = () => $('.product_sort_container');
    addToCartButton = () => $$('button[data-test^="add-to-cart"]');
    removeButton = () => $$('button[data-test^="remove"]');
    cartIcon = () => $('.shopping_cart_link span');
    productTitle = () => $('.inventory_item_name');
    productTitleInvetory = () => $('[data-test="inventory-item-name"]');
    productPrice = () => $('.inventory_item_price');
    menuButton = () => $('#react-burger-menu-btn');
    logoutLink = () => $('#logout_sidebar_link');

    async logout() { 
        await this.menuButton().click();
        await this.logoutLink().click(); 
    }

    async sortProducts(option: string) {
        await this.productSortDropdown().selectByVisibleText(option);
    }

    async addToCart() {
        await this.addToCartButton()[0].click();
    }

    async removeFromCart() {
        await browser.pause(2000);
        await this.removeButton()[0].click();
    }

    async openProductDetails() { await this.productTitle().click(); }

    async openCart() {
        await this.cartIcon().click();
    }
    async getProductTitles() {
        const elements = await $$('.inventory_item_name');
        return Promise.all(await elements.map(async element => await element.getText()));
    }
    async getProductPrices() {
        const elements = await $$('.inventory_item_price');
        return Promise.all(await elements.map(async element => parseFloat((await element.getText()).replace('$', ''))));
    }
}

export default new InventoryPage();
