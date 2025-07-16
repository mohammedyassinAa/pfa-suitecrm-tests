import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ImportLeadPage } from '../pages/ImportLeadsPage';
import { leadImportPath } from '../models/leadImportFile';
import { adminUser } from '../models/userModel';
import { expectedImportedLeadName } from '../models/leadImportFile';


test('Import leads from CSV into SuiteCRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const importPage = new ImportLeadPage(page);

  await loginPage.goto();
  await loginPage.login(adminUser.username, adminUser.password);

  await importPage.navigateToImportLeads();
  await importPage.uploadCSVFile(leadImportPath);
  await importPage.mapFieldsAndImport();
  await importPage.confirmDuplicatesAndImport();
  await importPage.navigateToViewLeads();

  await importPage.verifyLeadImported(expectedImportedLeadName); // Replace with actual name from CSV
});
