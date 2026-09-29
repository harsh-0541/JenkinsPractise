import { test, expect } from '@playwright/test'

test('frame testing', async ({ page }) => {

    await page.goto("https://demoqa.com/frames");
    const frame = page.frameLocator('#frame1').locator('#sampleHeading');
    await expect(frame).toHaveText("This is a sample page");

});