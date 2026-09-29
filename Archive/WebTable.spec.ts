import { test, expect } from '@playwright/test';

test('Handle web tables', async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    const thirdRow = page.locator('tbody tr ').nth(2);
    await thirdRow.locator('#edit-record-3').click();
    await expect(page.locator('#registration-form-modal')).toHaveText("Registration Form");


});