import { test } from '@playwright/test';
import { CreateAccountPage } from '../../pages/accounts/CreateAccountPage';
import { CreateAccountObjects } from '../../objects/accounts/CreateAccountObjects';
import { LoginPage } from '../../pages/loginPage';
import { adminUser } from '.bin/models/userModel';

test('Create a new account in SuiteCRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const objects = new CreateAccountObjects(page);
    const accountPage = new CreateAccountPage(objects);

    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);

    await accountPage.navigateToCreateAccount();
    await accountPage.fillAndSubmitForm('TestCorp Inc.', 'https://testcorp.com', 'contact@testcorp.com');
    await accountPage.verifyAccountCreated('TestCorp Inc.');
});
