import { test, expect } from '@playwright/test';

test('Jenkins practise test part 1', async ({ page }) => {
    console.log("practise test 1");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    console.log("ending test 1");
});

test('Jenkins practise test part 2', async ({ page }) => {
    console.log("practise test 2");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    console.log("ending test 2");
});

test('Jenkins practise test part 3', async ({ page }) => {
    console.log("practise test 3");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    console.log("ending test 3");
});

