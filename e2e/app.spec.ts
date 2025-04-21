import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  
  // Check the title
  await expect(page).toHaveTitle(/Vite \+ React/);

  // Check if the count button exists and works
  const countButton = page.getByText(/count is/i);
  await expect(countButton).toBeVisible();
  
  // Click the button and verify count increases
  await countButton.click();
  await expect(page.getByText('count is 1')).toBeVisible();
}); 