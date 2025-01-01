import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import LoginPage from '../../pageobjects/general/login.page.js';
import SecurePage from '../../pageobjects/general/secure.page.js';

const pages = {
  login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert()).toBeExisting();
  await expect(SecurePage.flashAlert()).toHaveText(expect.stringContaining(message));
  expect((await browser.getUrl()).includes('/secure'));
});

Given('user navigates to {string} Page', async (s: string) => {
  // Write code here that turns the phrase above into concrete actions
  s = s.toLowerCase();
  await browser.url(`https://the-internet.herokuapp.com/${s}`);
});

Given('user verifies the selected Option', async () => {
  // Write code here that turns the phrase above into concrete actions
  let selectedOption = await $('option[selected="selected"]');
  console.log('Selected Option: ', await selectedOption.getText());
  expect((await selectedOption.getText()).includes('Option 2'));

  let select = await $$('[id="dropdown"] option');
  for (const element of select) {
    console.log(await element.getText());
  }
});

Given('user select option {string}', async (s: string) => {
  // Write code here that turns the phrase above into concrete actions
  let select = await $('[id="dropdown"]');
  await select.selectByVisibleText(s);
});

Given('user verifies new window tab', async () => {
  // Write code here that turns the phrase above into concrete actions
  const handles = await browser.getWindowHandles();
  console.log((await browser.getWindowHandles()).length);
  (await handles).forEach(async handle => {
    let pageTitle = await browser.getTitle();
    console.log('Page Title - ', await pageTitle, 'for Window Handle -', handle);
  });

  await browser.switchToWindow(handles[1]);
  await browser.pause(2000);

  // switch back to parent window
  await browser.switchToWindow(handles[0]);
});

Given('user clicks the {string} Link', async (s: string) => {
  // Write code here that turns the phrase above into concrete actions
  let newTabLink = await $('=' + s);
  await newTabLink.click();
});

Given('user clicks the {string} button and verifies {string} Alert', async (s: string, s2: string) => {
  // Write code here that turns the phrase above into concrete actions
  await browser.refresh();
  if (s2.startsWith('Information')) {
    await $('button=' + s).click();
    browser.on('dialog', async (dialog) => {
      console.log('Dialog Text:', dialog.message())
      await dialog.accept();
    });
  } else if (s2.startsWith('Confirmation')) {
    await $('button=' + s).click();
    browser.on('dialog', async (dialog) => {
      console.log('Dialog Text:', dialog.message())
      await dialog.accept();
    });
  }
  expect(await $('p[id="result"]').isDisplayed());
});

Given('user verifies file can be uploaded', async () => {
  // Write code here that turns the phrase above into concrete actions
  await $('#file-upload').setValue(process.cwd()+'/data/dummy.txt');
  await $('#file-submit').click();
  expect(await $('h3').isDisplayed());
})

