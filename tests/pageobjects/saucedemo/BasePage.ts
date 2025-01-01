// page/BasePage.ts
export default class BasePage {
    async open(path: string) {
        await browser.url(path);
        await browser.setTimeout({ 'pageLoad': 10000 })
    }
}
