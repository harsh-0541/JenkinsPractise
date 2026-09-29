import { test, expect } from '@playwright/test';

test('Dynamic calender', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#start-date').click();

});