import { test, expect } from '@playwright/test';
test.describe('SpiceJet - Add-ons menu', () => {

    test('Click on fly Early link', async ({ page, context }) => {
        await page.goto("https://www.spicejet.com/");
        const addOns = await page.getByText('Add-ons').first();
        await addOns.hover();

        const flyEarly = await page.getByTestId('test-id-FlyEarly');
        await expect(flyEarly).toBeVisible();
        await expect(flyEarly).toHaveText('FlyEarly');


        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            await flyEarly.click(),
        ])

        await expect(newPage).toHaveTitle('SpiceJet');

    });


});