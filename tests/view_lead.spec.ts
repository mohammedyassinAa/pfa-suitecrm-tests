import { test } from '@playwright/test';
import { ViewLeadsPage } from '../pages/ViewLeadsPage';
import { LoginPage } from '../pages/loginPage';

test('View Leads in SuiteCRM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const viewLeadsPage = new ViewLeadsPage(page);

    await loginPage.goto();
    await loginPage.login('admin', 'admin123'); // adapte le mot de passe si besoin

   await  viewLeadsPage.navigateToViewLeads()
   

   // Valider que le lead est présent
//    await viewLeadsPage.verifyLeadImported('Mohammed yassine Aoulad ahriz');

});
