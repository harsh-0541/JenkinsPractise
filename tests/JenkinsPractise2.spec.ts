import { test, expect } from '@playwright/test';

test('Jenkins practise test part 4', async ({ page }) => {
    console.log("practise test 4");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    console.log("ending test 4");
});

test('Jenkins practise test part 5', async ({ page }) => {
    console.log("practise test 5");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    console.log("ending test 5");
});

test('Jenkins practise test part 6', async ({ page }) => {
    console.log("practise test 6");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    console.log("ending test 6");
});

