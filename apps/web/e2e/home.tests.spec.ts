import { test, expect } from '@playwright/test'


test('should navigate to home page', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page.getByRole('heading', { name: 'Ricky n Morty universe' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Locations' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Location Preview' })).toBeVisible();
})

test('should navigate to character page', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.click('text=Rick Sanchez')
    await expect(page.getByRole('heading', { name: 'Rick Sanchez' })).toBeVisible();
})
