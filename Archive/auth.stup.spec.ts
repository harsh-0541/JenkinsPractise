import { test as setup, expect } from '@playwright/test';
import path from 'path';
const authfile = path.resolve(__dirname, '../auth/user.json');
setup('authenticate the user login ', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByLabel("Username").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator('#login-button').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();


    await page.context().storageState({path: authfile} );



});



