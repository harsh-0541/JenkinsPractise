import { test, expect } from '@playwright/test';

test('Saucedemo login with invalid password', async ({ page }) => {

    page.goto("https://www.saucedemo.com/");

    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("harsh123");
    await page.locator('#login-button').click();
    await expect(page.getByRole('alert')).toHaveText("Epic sadface: Username and password do not match any user in this service");





});