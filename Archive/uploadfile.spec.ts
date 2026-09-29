import { test, expect } from '@playwright/test';
import path from 'path';
const filepath = path.resolve(__dirname, '../TestData/resume.pdf');

test('upload the file', async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download");
    await page.locator('#uploadFile').setInputFiles(filepath);
    await expect(page.locator('#uploadedFilePath')).toContainText("resume.pdf");




});
