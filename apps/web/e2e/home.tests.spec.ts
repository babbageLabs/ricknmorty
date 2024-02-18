import { test, expect } from '@playwright/test'


test('should navigate to home page', async ({ page }) => {
    await page.goto('http://localhost:3000')
    const title = page.locator('h1')
    await expect(page.getByRole('heading', { name: 'Ricky n Morty universe' })).toBeVisible();

})
