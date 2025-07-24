import { test } from '@playwright/test';
import { CreateContactPage } from '../../pages/contact/CreateContactPage';
import { LoginPage } from '../../pages/loginPage';
import { adminUser } from '../../models/userModel';
test('Create contact successfully in SuiteCRM', async ({ page }) => {
  // Go to the login page and login first if needed
    const loginPage = new LoginPage(page);
    const contactPage = new CreateContactPage(page);

    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);

    await contactPage.navigateToCreateContact();
    await contactPage.fillContactForm();
    await contactPage.saveContact();
    await contactPage.verifyContactCreated(' Mr. Mohammed yassine Aoulad ahriz ');

});
