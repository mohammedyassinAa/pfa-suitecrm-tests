import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ImportLeadPage } from '../../pages/lead/ImportLeadsPage';
import { leadImportPath } from '.bin/models/lead/leadImportFile';
import { adminUser } from '.bin/models/userModel';
import { expectedImportedLeadName } from '.bin/models/lead/leadImportFile';


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

  await importPage.verifyLeadImported(expectedImportedLeadName); 
});
