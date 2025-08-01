import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { adminUser } from '.bin/models/userModel';

test('Login to SuiteCRM as admin', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(adminUser.username, adminUser.password);

  await expect(page).toHaveURL(/index\.php/); 
  const actionsLink = page.getByRole('link', { name: /ACTIONS/i });
  await expect(actionsLink).toBeVisible();
});
