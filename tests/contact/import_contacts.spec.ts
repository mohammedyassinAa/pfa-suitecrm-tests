import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ImportContactPage } from '../../pages/contact/ImportContactPage';
import { contactImportPath, expectedImportedContactFullName } from '.bin/models/contact/contactImportFile';
import { adminUser } from '.bin/models/userModel';

test('Import contacts from CSV into SuiteCRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const importPage = new ImportContactPage(page);

    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);

    await importPage.navigateToImportContacts();
    await importPage.uploadCSVFile(contactImportPath);
    await importPage.confirmProperties();
    await importPage.confirmMappings();
    await importPage.confirmAndImport();
    await importPage.goToViewContacts();

    await importPage.verifyContactImported(expectedImportedContactFullName);
});
