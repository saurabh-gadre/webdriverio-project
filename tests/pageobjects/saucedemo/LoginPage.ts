// page/LoginPage.ts
import BasePage from '../saucedemo/BasePage.js';

class LoginPage extends BasePage {
    username = () => $('#user-name');
    password = () => $('#password');
    loginButton = () => $('#login-button');

    async saucedemologin(username: string, password: string) {
        await this.username().setValue(username);
        await this.password().setValue(password);
        await this.loginButton().click();
    }
}

export default new LoginPage();
