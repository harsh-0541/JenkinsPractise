import { test, expect } from '@playwright/test';

test('Check result from search input', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
  // await page.locator('#twotabsearchtextbox').waitFor({ state: 'visible' });
    await page.locator('#twotabsearchtextbox').click();
    await page.locator('#twotabsearchtextbox').fill("Mobile");
    await page.locator('#nav-search-submit-button').click();

    await page.waitForLoadState();

    const titles = await page.locator('a h2 span').allTextContents();

    for (const mobile of titles.slice(0, 10)) {
        console.log(mobile);
    }

});
