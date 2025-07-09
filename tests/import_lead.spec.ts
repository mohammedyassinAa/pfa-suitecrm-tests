import { test } from '@playwright/test';
import { ImportLeadsPage } from '../pages/ImportLeadsPage';
import { LoginPage } from '../pages/loginPage';

test('Import Leads in SuiteCRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const importLeadsPage = new ImportLeadsPage(page);

    await loginPage.goto();
    await loginPage.login('admin', 'admin123'); // adapte le mot de passe si besoin

   await  importLeadsPage.navigateToImportLeads()
   await importLeadsPage.uploadCSVFile();
   await importLeadsPage.mapFieldsAndImport();
   await importLeadsPage.confirmDuplicatesAndImport();
   await importLeadsPage.navigateToViewLeads();

   // Valider que le lead est présent
   await importLeadsPage.verifyLeadImported('Mohammed yassine Aoulad ahriz');

});
