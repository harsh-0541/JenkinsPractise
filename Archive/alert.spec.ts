import { test, expect } from '@playwright/test';

test('alert testing', async ({ page }) => {
    await page.goto("https://demoqa.com/alertsWindows");
    await page.waitForLoadState();
    await page.getByRole('link', { name: 'Alerts' }).click();
    await page.locator('#confirmButton').click();

    page.once('dialog', async (dialog) => {
        await dialog.accept();
        await expect(page.locator('#confirmButton')).toHaveText('You selected Ok');

    });
    
});


test('alert handle by assignment', async ({ page }) => {

    await page.goto("https://demoqa.com/modal-dialogs");
    await page.getByRole('button', { name: 'Large modal' }).click();

    page.once('dialog', async dialog => {
        console.log(dialog.type());
        console.log(dialog.message);
        await page.getByRole('button', { name: 'Close' }).click();

    });

});