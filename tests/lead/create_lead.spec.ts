import { test } from '@playwright/test';
import { CreateLeadPage } from '../../pages/lead/createLeadPage';
import { mockLead } from '../../models/lead/leadModel';
import { LoginPage } from '../../pages/loginPage';
import { adminUser } from '../../models/userModel';

test('Create a new lead in SuiteCRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const leadPage = new CreateLeadPage(page);

  await loginPage.goto();
  await loginPage.login(adminUser.username, adminUser.password);

  await leadPage.navigateToLeads();
  await leadPage.clickCreateLead();
  await leadPage.createLead(mockLead.firstName, mockLead.lastName, mockLead.phone, mockLead.email);

  const fullName = `${mockLead.firstName} ${mockLead.lastName}`;
  await leadPage.LeadCreated();
  await leadPage.verifyLeadCreated(fullName);

});
