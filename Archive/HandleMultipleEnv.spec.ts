import { test } from '@playwright/test';

test('handle multiple env', async ({ page }) => {
    console.log(process.env.URL);

})