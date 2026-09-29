import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Add to cart use authenticated user', () => {
    test.use({ storageState: path.resolve(__dirname, '../auth/user.json') });

    test('add item to cart', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        const products = await page.locator('.inventory_item_description');
        const productCounts = await products.count();
        console.log(productCounts);

        for (let i = 0; i < productCounts; i++) {

            const product = products.nth(i);
            const tittle = await product.locator('.inventory_item_name').textContent();
            if (tittle?.trim() === "Sauce Labs Fleece Jacket") {
                await product.getByRole('button', { name: 'Add to cart' }).click();
            }
            await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
            const cartpage = await page.getByTestId("shopping-cart-link").click();
            await page.waitForURL('**/cart.html');
            await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();

        }








    });

});



