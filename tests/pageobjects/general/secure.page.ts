import { $, $$ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    flashAlert = () => $('#flash');
    headerLinks = () => $$('#header a');
}

export default new SecurePage();
