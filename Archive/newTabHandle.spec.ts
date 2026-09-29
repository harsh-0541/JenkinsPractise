import { test, expect } from '@playwright/test'


test('New window', async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows");
    const [newPage] = await Promise.all([

        page.context().waitForEvent('page'),
        page.getByRole('button', { name: 'New Tab' }).click()

    ]);
    await newPage.waitForLoadState();
    await expect(newPage.locator('#sampleHeading')).toHaveText("This is a sample page");

    await newPage.bringToFront()
});