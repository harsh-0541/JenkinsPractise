import { test, expect, request } from '@playwright/test'

test('Login via APi and verify Ui', async ({ page, request }) => {
    const response = await request.post("https://practicetestautomation.com/practice-test-login/"

        , {

            data: {
                uername: 'student',
                password: 'Password123e'
            }

        });
    expect(response.status()).toBe(200);
    const body = await response.json();
    const token = body.token;

    await page.addInitScript((token) => {
        window.localStorage.setItem('authToken', token);
    }, token);
    await page.goto('**/inventory.html');
    await expect(page.locator('.app_logo')).toBeVisible();



});