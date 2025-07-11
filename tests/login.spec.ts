import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('User can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('admin', 'admin123');

    const actionsLink = page.getByRole('link', { name: /ACTIONS/i });
    await expect(actionsLink).toBeVisible();
});
