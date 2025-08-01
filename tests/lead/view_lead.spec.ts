import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ViewLeadsPage } from '../../pages/lead/ViewLeadsPage';
import { adminUser } from '.bin/models/userModel';

test('View leads and check lead presence', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const viewLeadsPage = new ViewLeadsPage(page);

  await loginPage.goto();
  await loginPage.login(adminUser.username, adminUser.password);

  await viewLeadsPage.navigateToViewLeads();
  await viewLeadsPage.verifyLeadVisible(); 
});
