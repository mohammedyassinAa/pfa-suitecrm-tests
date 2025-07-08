import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LeadsPage } from '../pages/leadsPage';

test('Create a new Lead in SuiteCRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const leadsPage = new LeadsPage(page);

  await loginPage.goto();
  await loginPage.login('admin', 'admin123');

  await leadsPage.navigateToLeads();
  await leadsPage.clickCreateLead();

  await leadsPage.createLead('Yassin', 'LeadPFA', '061020304','leadpfa@example.com');
  await leadsPage.verifyLeadCreated('Mr. Yassin LeadPFA');

});
