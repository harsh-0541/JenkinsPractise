import { test, expect } from '@playwright/test';

test('webtables verification', async ({ page }) => {

    await page.goto("https://demoqa.com/webtables");

    const row = await page.locator('table tbody tr');
    const thirdrow = await row.nth(2);
    await page.locator('#edit-record-3').click();
    // await expect(page.locator('#registration-form-modal')).toHaveText("Registration Form");
    await expect(page.getByText("Registration Form")).toBeVisible();

});