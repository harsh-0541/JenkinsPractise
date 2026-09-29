import { test, expect, chromium, Page } from '@playwright/test';

const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

async function loginAndVerfiy(page: Page) {
    await page.goto("https://www.saucedemo.com/");

    const username = await page.locator('#user-name');
    const password = await page.locator('#password');
    const login = await page.getByRole('button', { name: 'Login' });


    await username.fill(USERNAME);
    await password.fill(PASSWORD);
    await login.click();
}

test('validate browser context', async () => {
    const browser = await chromium.launch();
    const Context1 = await browser.newContext();
    const Context2 = await browser.newContext();

    const page1 = await Context1.newPage();
    const page2 = await Context1.newPage();
    await Promise.all([
        loginAndVerfiy(page1),
        loginAndVerfiy(page2)
    ]);

    await Context1.close();
    await Context2.close();
    await browser.close();
});




