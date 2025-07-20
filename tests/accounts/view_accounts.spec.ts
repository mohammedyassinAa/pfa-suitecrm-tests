import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ViewAccountsPage } from '../../pages/accounts/ViewAccountsPage';
import { adminUser } from '../../models/userModel';

test('View existing accounts in SuiteCRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const viewPage = new ViewAccountsPage(page);

  await loginPage.goto();
  await loginPage.login(adminUser.username, adminUser.password);

  await viewPage.navigateToViewAccounts();
  await viewPage.verifyAccountsVisible();
});
