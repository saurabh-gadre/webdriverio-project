import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
   
    inputUsername = () => $('#username');
    inputPassword = () => $('#password');
    btnSubmit = () => $('form button[type="submit"]');
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername().setValue(username);
        await this.inputPassword().setValue(password);
        await this.btnSubmit().click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open () {
        return super.open('login');
    }
}

export default new LoginPage();
