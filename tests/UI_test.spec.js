import { test, expect } from '@playwright/test';

test('verify that all games in the lobby are clickable', async ({page}) => {
    await page.goto('https://live88lobby.io/');
    const desktopLobby = page.getByRole('link', { name: 'Desktop lobby' });
    await desktopLobby.click();
    await page.locator('#iframeId').contentFrame().getByText('Highrollers').click();
    await page.locator('#iframeId').contentFrame().getByText('Baccarat', { exact: true }).click();
    await page.locator('#iframeId').contentFrame().getByText('Roulette', { exact: true }).click();
    await page.locator('#iframeId').contentFrame().getByText('Dragon Tiger', { exact: true }).click();
    await page.locator('#iframeId').contentFrame().getByText('Indian Games').click();
    await page.locator('#iframeId').contentFrame().getByText('Poker').click();
    await page.locator('#iframeId').contentFrame().getByText('Favourites').click();

})

test('user should be able to join a game from the lobby',async ({page}) => {
    await page.goto('https://live88lobby.io/');
    const desktopLobby = page.getByRole('link', { name: 'Desktop lobby' });
    await desktopLobby.click();
    await page.locator('#iframeId').contentFrame().locator('[data-test-id="featured-table"] [data-test-id="button-click-join-table-button"]').click();
    await expect((await page.locator('#iframeId').contentFrame()).getByText('Hot & Cold')).toBeVisible();
    
}) 
