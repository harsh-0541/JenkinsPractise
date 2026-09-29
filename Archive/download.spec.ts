import { test, expect } from '@playwright/test';
import path from 'path';
const filepath = path.resolve(__dirname, '../TestData/resume1.pdf');

test('download file', async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download");
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;

    await download.saveAs(filepath);





});