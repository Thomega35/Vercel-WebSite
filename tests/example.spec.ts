import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('contact navigation', async ({ page }) => {
  await page.goto('https://beta.thomega.fr/');

  await page.getByRole('link', { name: 'Contests' }).click();
  await page.getByRole('link', { name: 'Personal projects' }).click();
  await page.getByRole('link', { name: 'Contests' }).click();
  
  await expect(page).toHaveURL(/.*contest/);
});

test('test', async ({ page }) => {
  await page.goto('https://beta.thomega.fr/about');
  await page.getByPlaceholder('Type here').click();
  await page.getByPlaceholder('Type here').fill('John Doe');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Expect to find the text "John Doe" in the page.
  await expect(page.getByRole('heading', { name: 'John Doe' })).toBeTruthy();
});