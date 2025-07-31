import { Given } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/loginPage';
import { adminUser } from '../../models/userModel';
import { CustomWorld } from '../../support/hooks';

let loginPage: LoginPage;

Given('the user is logged in as an administrator', async function (this: CustomWorld) {
    loginPage = new LoginPage(this.page);
    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);
});
