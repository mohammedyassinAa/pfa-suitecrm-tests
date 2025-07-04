import { test, expect } from '@playwright/test';

test('login to SuiteCRM', async ({ page }) => {
    await page.goto('http://localhost:18080/suitecrm/index.php');

    // Exemple de login
    await page.fill('#user_name', 'admin');
    await page.fill('#username_password', 'admin123'); // change selon ton mot de passe
    await page.click('#bigbutton');

    // Attendre le tableau de bord
    const actionsLink = page.getByRole('link', { name: /ACTIONS/i });
    await expect(actionsLink).toBeVisible();
});

// test('logout from SuiteCRM', async ({ page }) => {
//     // Assurez-vous d'être connecté avant de se déconnecter
//     await page.goto('http://localhost:18080/suitecrm/index.php');
//     await expect(page.locator('text=Dashboard')).toBeVisible();

//     // Cliquer sur le bouton de déconnexion
//     await page.click('#logout_link');

//     // Vérifier que la page de connexion est visible
//     await expect(page.locator('#user_name')).toBeVisible();
// });