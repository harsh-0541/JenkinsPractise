import { test, expect } from '@playwright/test';

test('test add iphone 18 pro max (512)GB - Glacier', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('#twotabsearchtextbox').fill("iphone");
    await page.locator('#nav-search-submit-button').click();
    await page.waitForLoadState();

    const products = await page.locator('.puisg-row');
    const productcounts = await products.count();

    console.log(productcounts);

    for (let i = 0; i < productcounts; i++) {
        const product = products.nth(i);
        const tittle = await product.locator('a h2 span').allTextContents();
        if (tittle?.trim()=== "iPhone 18 Pro (256 GB) - Glacier") {
            await page.getByRole('button', { name: 'Add to cart' }).click();
        }

    }
    await page.getByRole('button', { name: 'cart' }).click();

    await page.waitForLoadState();
    await expect(page.getByText("iPhone 18 Pro (256 GB) - Glacier")).toBeVisible();

});