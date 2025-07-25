import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ViewContactPage } from '../../pages/contact/ViewContactPage';
import { adminUser } from '../../models/userModel';

test('View existing contacts in SuiteCRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const viewPage = new ViewContactPage(page);

    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);

    await viewPage.navigateToViewContacts();
    await viewPage.verifyContactsVisible();
});
