import { test, expect } from '@playwright/test'
import { getLocations } from 'rickmortyapi'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
})

test.describe('Home page', () => {
    test('should navigate to home page', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Ricky n Morty universe' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Locations' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Location Preview' })).toBeVisible();
    })

    test('should display locations', async ({ page }) => {
        const locations = (await getLocations({ page: 1 })).data.results || []
        if (locations.length) {
            const locationCards = await page.$$('.locations')
            expect(locationCards).toHaveLength(locations.length)
        }
    })

    test('should display location preview', async ({ page }) => {
        const locations = (await getLocations({ page: 1 })).data.results || []

        if (locations[0]) {
            const card = await page.$('.locations')
            if (card) {
                await card.click()
                const preview = await page.$('#preview')
                expect(preview).toBeDefined()
            }
        }
    })

    test('should navigate to character page', async ({ page }) => {
        const locationCards = await page.$$('.locations')
        expect(locationCards).toBeDefined()
        if (locationCards.length) {
            let card = locationCards[0]
            await card?.click()
            const preview = await page.$('#preview')
            expect(preview).toBeDefined()
            const characterCards = await page.$$('.characters')
            expect(characterCards).toBeDefined()
            if (characterCards.length) {
                let card = characterCards[0]
                await card?.click()
                const characterId = await page.evaluate(() => {
                    const url = new URL(page.url())
                    return url.pathname.split('/').pop()
                })
                expect(page.url()).toContain(`/character/${characterId}`)
            }
        }
    })

    test('should display search results', async ({ page }) => {
        const locations = (await getLocations({ name: 'Earth' })).data.results || []
        const search = await page.$('input[type="search"]')
        if (search) {
            await search.fill('Earth')
            const searchBtn = await page.$('input[type="search"]')
            expect(searchBtn).toBeDefined()
            await searchBtn?.click()

            const locationCards = await page.$$('.locations')
            expect(locationCards).toHaveLength(locations.length)
        }
    })
})

