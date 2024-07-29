import { test, expect } from '@playwright/test';

test.only('my first test @smoke', async ({ page }) => {
  await page.goto('https://google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
});

test('my second test', async ({ page }) => {
  await page.goto('https://indianairlines.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("indianairlines");
});

test.skip('my third test', async ({ page }) => {
  await page.goto('https://spicejet.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("spicejet");
});
