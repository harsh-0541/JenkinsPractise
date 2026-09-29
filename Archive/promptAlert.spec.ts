import { test, expect } from '@playwright/test';

test('prompt aler', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole('button', { name: 'Prompt Alert' }).click();

    page.once('dialog', async dialog => {
        console.log(dialog.type());

        if (dialog.type() === 'prompt') {
            await dialog.accept('harsh');
        } else {
            dialog.accept();
        }
    });

});
