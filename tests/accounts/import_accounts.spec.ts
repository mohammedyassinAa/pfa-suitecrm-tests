import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ImportAccountPage } from '../../pages/accounts/ImportAccountPage';
import { accountImportPath, expectedImportedAccountNames } from '../../models/accounts/accountImportFile';
import { adminUser } from '../../models/userModel';

test('Import accounts from CSV into SuiteCRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const importPage = new ImportAccountPage(page);

    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);

    await importPage.navigateToImportAccounts();
    await importPage.uploadCSVFile(accountImportPath);
    await importPage.confirmProperties();
    await importPage.confirmMappings();
    await importPage.confirmAndImport();
    await importPage.goToViewAccounts();

    await importPage.verifyAccountImported(expectedImportedAccountNames);
});
