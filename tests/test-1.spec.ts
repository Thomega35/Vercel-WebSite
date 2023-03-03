import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://flowcv.me/thomas-delapart');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: 'Linkedin icon' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/.*linkedin/);
});