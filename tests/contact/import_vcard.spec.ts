import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ImportVcardPage } from '../../pages/contact/ImportVcardPage';
import { adminUser } from '../../models/userModel';

test('Import contact using vCard in SuiteCRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const importVcardPage = new ImportVcardPage(page);

    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);

    await importVcardPage.navigateToImportVcard();
    await importVcardPage.importVcard();
    await importVcardPage.verifyImportSuccess();
});
