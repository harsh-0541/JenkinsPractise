import { test, expect } from '@playwright/test';

test('Handle mutiple windows', async ({ page }) => {

    await page.goto("https://demoqa.com/buttons");
    await page.getByRole('link', { name: 'Links', exact: true }).click();
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        await page.getByRole('link', { name: 'Home', exact: true }).click()
    ]);

    await popup.waitForLoadState();

    await expect(popup).toHaveURL("https://demoqa.com/");



});